var button = document.querySelector('#container .button');
  // detect enter or exit fullscreen mode
// when you are in fullscreen, ESC and F11 may not be trigger by keydown listener. 
// so don't use it to detect exit fullscreen

function fullscreen() {
  // check if fullscreen mode is available
  if (document.fullscreenEnabled || 
    document.webkitFullscreenEnabled || 
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled) {
    
    // which element will be fullscreen
    var iframe = document.querySelector('#container iframe');
    // Do fullscreen
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
      document.addEventListener('fullscreenchange', fullscreenChange);
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
      document.addEventListener('webkitfullscreenchange', fullscreenChange);
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
      document.addEventListener('mozfullscreenchange', fullscreenChange);
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
      document.addEventListener('MSFullscreenChange', fullscreenChange);
    }
    iframe.src = iframe.src;
  }
  else {
    document.querySelector('.error').innerHTML = 'Your browser is not supported';
  }

  function fullscreenChange() {
    iframe.src = iframe.src
  }
}

