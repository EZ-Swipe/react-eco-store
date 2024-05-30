export const formatTime = (value) => {
  return value < 10 ? `0${value}` : `${value}`;
};

export const calculateTime = (date, setDate) => {
  let now = new Date();
  let gap = date - now;

  if (gap < 0) {
    // Обновление даты, чтобы начать новый цикл отсчета с 03:00:00
    date = new Date(now.getTime() + 3 * 60 * 60 * 1000); // Добавляем 3 часа
    gap = date - now;
    localStorage.setItem("timerDate", date);
  }

  let days = Math.floor(gap / (1000 * 60 * 60 * 24));
  let hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((gap % (1000 * 60)) / 1000);

  // Форматирование значений времени
  days = formatTime(days);
  hours = formatTime(hours);
  minutes = formatTime(minutes);
  seconds = formatTime(seconds);

  // Обновление состояний
  setDate({ days, hours, minutes, seconds });
};
