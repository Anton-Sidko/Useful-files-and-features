// Get our elements
const player = document.querySelector('.player'),
      video = player.querySelector('.viewer'),
      progress = player.querySelector('.progress'),
      progressBar = player.querySelector('.progress__filled'),
      playBtn = player.querySelector('.toggle'),
      skipBtns = player.querySelectorAll('[data-skip]'),
      ranges = player.querySelectorAll('.player__slider'),
      fullScreenBtn = player.querySelector('.fullscreen-btn');

let mouseDown = false,
    isFullScreen = false;

// Build functions
function togglePlay() {
    const action = video.paused ? 'play' : 'pause';
    video[action]();
}

// Change btn icon
function updatePlayBtn() {
    const icon = this.paused ? '▶' : '❚ ❚';
    playBtn.textContent = icon;
}

function skip() {
    video.currentTime += +this.dataset.skip;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function handleFullScreen() {
    if (isFullScreen) {
        video.exitFullscreen();
    } else {
        video.requestFullscreen();
    }
    // This flag is not used, because in full screen we have not our btn (in Chrome)...
    // isFullScreen = !isFullScreen;
}

// Hook up the event listener
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayBtn);
video.addEventListener('pause', updatePlayBtn);
playBtn.addEventListener('click', togglePlay);

skipBtns.forEach(btn => btn.addEventListener('click', skip));

ranges.forEach(slider => slider.addEventListener('change', handleRangeUpdate));
ranges.forEach(slider => slider.addEventListener('mousemove', () => mouseDown && handleRangeUpdate));
ranges.forEach(slider => slider.addEventListener('mousedown', () => mouseDown = true));
ranges.forEach(slider => slider.addEventListener('mouseup', () => mouseDown = false));

video.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);

fullScreenBtn.addEventListener('click', handleFullScreen);
