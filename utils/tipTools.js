import { Toast, Dialog, Notify } from 'vant';

export function VToast(message = '操作成功', type = 'success', duration = 3000) {
  Toast.clear()
  Toast({
    message,
    type,
    duration
  })
}

// confirm 弹框
export function VConfirm(message = '确认更改', title = '温馨提示', options = {}) {
  return new Promise((resolve, reject) => {
    Dialog.confirm(message, title, {
      cancelButtonText: '取消',
      allowHtml: true,
      closeOnClickOverlay: false, // 是否可通过点击遮罩关闭
      ...options
    }).then(() => {
      resolve(true);
    }).catch((error) => {
      reject(error);
    });
  });
 }

// alert 弹框
export function VAlert(message, title = '温馨提示', options = {}) {
  return new Promise((resolve) => {
    Dialog.alert(message, title, {
      allowHtml: true,
      closeOnClickOverlay: false, // 是否可通过点击遮罩关闭
      callback: (action) => {
        resolve(action === 'confirm')
      },
      ...options
    }).then().catch(() => { })
  })
}

export function VNotify(message, type = 'warning') {
  Notify({
    title: '警告',
    message,
    duration: 3000,
    type
  })
}
