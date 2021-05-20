// get our element
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

// build our function
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();

}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

function handleSkip() {
  const skip = this.dataset.skip
  video.currentTime += parseFloat(skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

// hook up event listeners
  // play or pause the video
video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)

  // change the style of toggle button
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

  // skip function
skipButtons.forEach(skipButton => skipButton.addEventListener('click', handleSkip))
  
  // handle range update function
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

  // handle progress bar
video.addEventListener('timeupdate', handleProgress)
progress.addEventListener('click', scrub)

let mousedown = false
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

