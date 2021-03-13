let customButtons = document.querySelectorAll(".audio-bar .audio .div-controls img"),
    audiofile = document.querySelector('.audio-bar .audio audio');

function videoControls()
{
  let pause = false;
  if(this.dataset.button == 2)
  {
    video.currentTime = 0;
    video.pause();
  }

  else if(this.dataset.button == 3)
  {
    video.currentTime = 0;
    video.play();
  }

  else if(this.dataset.button == 1)
  {
    video.pause();
  }

  else {
      console.log('play button');
    video.play();
  }
}

customButtons.forEach(button => button.addEventListener("click", videoControls));