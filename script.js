const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const audio = document.querySelector('audio');

document.body.addEventListener('mousemove', function () {
  audio.play();
});

const setDate = () => {
  const now = new Date();
  // Setting Seconds
  const sec = now.getSeconds();
  const secDegree = sec * 6 + 90;
  secondHand.style.transform = `rotate(${secDegree}deg)`;
  // Setting minutes
  const min = now.getMinutes();
  const minDegree = min * 6 + 90;
  minuteHand.style.transform = `rotate(${minDegree}deg)`;
  // Setting hours
  let hour = now.getHours();
  // if (hour >= 12) hour -= 12;
  const hourDegree = hour * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  audio.currentTime = 0;
  audio.play();
};
setInterval(setDate, 1000);
