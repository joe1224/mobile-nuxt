export default {

  async getCommonConfigs(ctx, argument) {
    const params = {
      name: [...argument]
    };
    const data = await ctx.$api.queryCommonConfigs(params);
    return data.configs[0].config
  },


  // 提取图片均色
  extractAverageColor(imagePath, callback) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const context = canvas.getContext('2d');
      context.drawImage(img, 0, 0);
      const imageData = context.getImageData(0, 0, img.width, img.height).data;
      let r = 0; let g = 0; let b = 0;
      let count = 0;

      for (let i = 0; i < imageData.length; i += 4) {
        r += imageData[i];
        g += imageData[i + 1];
        b += imageData[i + 2];
        count++;
      }

      r = Math.round(r / count);
      g = Math.round(g / count);
      b = Math.round(b / count);

      const averageColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
      callback(averageColor);
    };

    img.src = imagePath;
  },

  downloadFile(url) {
    if (!url) {
      return
    }
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}


