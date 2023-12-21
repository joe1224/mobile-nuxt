import Vue from 'vue';
import XEUtils from 'xe-utils';

// 进入视图 触发函数
Vue.directive('enter-viewport', {
  inserted: function (el, binding) {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const fn = binding.value
        typeof fn === 'function' && fn()
      }
    });
    observer.observe(el);

    // 在unbind钩子中清除观察器以防止内存泄漏
    el._enterViewportObserver = observer;
  },
  unbind(el) {
    // 清除观察器以防止内存泄漏
    if (el._enterViewportObserver) {
      el._enterViewportObserver.disconnect();
      delete el._enterViewportObserver;
    }
  }
});

Vue.directive('scroll-trigger', {
  bind(el, binding) {
    // 通过节流函数来限制触发频率
    const handleScroll = XEUtils.debounce(function () {
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const containerHeight = window.innerHeight;

        // 判断 DOM 元素是否在视图中间
        if (rect.top <= (containerHeight) / 2 && rect.bottom >= (containerHeight) / 2) {
          // 如果在视图中间，则调用传递给指令的回调函数
          binding.value();
        }
      });
    }, 300, {
      leading: false,
      trailing: true
    })

    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);

    // 在unbind钩子中移除滚动监听器以防止内存泄漏
    el._scrollTriggerHandler = handleScroll;
  },
  unbind(el) {
    // 移除滚动监听器以防止内存泄漏
    if (el._scrollTriggerHandler) {
      window.removeEventListener('scroll', el._scrollTriggerHandler);
      delete el._scrollHandler;
    }
  }
});