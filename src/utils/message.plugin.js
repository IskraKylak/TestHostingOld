export default {
  install (app, options) {
    app.config.globalProperties.$message = function (html) {
      setTimeout(function() {
          document.getElementById("message").classList.add('hidden-xs');
      }, 3000)
      
      document.getElementById("message").innerHTML = html
      document.getElementById("message").classList.remove('hidden-xs');
    }

    app.config.globalProperties.$error = function (html) {
      setTimeout(function() {
          document.getElementById("message").classList.add('hidden-xs');
      }, 3000)
      
      document.getElementById("message").innerHTML = html
      document.getElementById("message").classList.remove('hidden-xs');
    }
  }
}
