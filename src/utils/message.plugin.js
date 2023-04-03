const message = {
  install (app) {
    app.config.globalProperties.$message = function (html) {
      const messageDiv = document.createElement('div');
        messageDiv.setAttribute('id', 'message');
        messageDiv.innerText = html;
        document.body.appendChild(messageDiv);
      setTimeout(function() {
        document.body.removeChild(messageDiv);
      }, 3000)
    }
  }
}

export default message;
