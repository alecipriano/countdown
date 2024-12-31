const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

const render = (days, hours, minutes, seconds) => {
   daysElement.textContent = days.toString().padStart(2, "0");
   hoursElement.textContent = hours.toString().padStart(2, "0");
   minutesElement.textContent = minutes.toString().padStart(2, "0");
   secondsElement.textContent = seconds.toString().padStart(2, "0");
};

const countdown = () => {
   const now = new Date();
   const nextYear = now.getFullYear() + 1;
   const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);

   const difference = newYearDate - now;

   if (difference <= 0) {
      render(0, 0, 0, 0);
      return;
   }

   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
   const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
   const minutes = Math.floor((difference / (1000 * 60)) % 60);
   const seconds = Math.floor((difference / 1000) % 60);

   render(days, hours, minutes, seconds);
}

setInterval(countdown, 1000);