import "../../pages/game";
export function setSeconds(container) {
  let getSeconds = container.getAttribute("seconds");
  let countdown = parseInt(getSeconds, 10);
  const secondEl = container.querySelector(".cuenta-regresiva");
  secondEl.textContent = countdown;
  const intervalId = setInterval(() => {
    if (countdown == 0) {
      clearInterval(intervalId);
    }
    secondEl.textContent = countdown;
    countdown--;
  }, 1000);
}
