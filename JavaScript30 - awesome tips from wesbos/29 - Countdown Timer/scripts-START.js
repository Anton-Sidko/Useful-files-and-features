let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const btns = document.querySelectorAll('[data-time]');
// const custInput = document.querySelector('#custom input');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds /60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  // add am & pm
  // const adjustedHour = hours > 12 ? hours - 12 : hours;

  endTime.textContent = `Be back at ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  // add am & pm
  // endTime.textContent = `Be back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes} ${hours > 12 ? 'PM' : 'AM'}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

btns.forEach(btn => btn.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value * 60;
  this.reset();
  timer(mins);
});