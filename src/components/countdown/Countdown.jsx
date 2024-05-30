import { useEffect, useState } from "react";
import "./Countdown.scss";
import { calculateTime } from "../../utils/timerFunctions";

const Countdown = () => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  let startDate = new Date();
  startDate.setHours(startDate.getHours() + 2);
  startDate.setMinutes(startDate.getMinutes() + 18);
  startDate.setSeconds(startDate.getSeconds() + 46);

  useEffect(() => {
    let date = localStorage.getItem("timerDate");
    if (!date) {
      date = startDate;
    } else {
      date = new Date(date);
    }

    calculateTime(date, setTime);

    const interval = setInterval(() => {
      calculateTime(date, setTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <div className="countdown-value">{time.days}</div>
        <div className="countdown-time">Days</div>
      </div>
      <span>:</span>
      <div className="countdown-item">
        <div className="countdown-value">{time.hours}</div>
        <div className="countdown-time">Hours</div>
      </div>
      <span>:</span>
      <div className="countdown-item">
        <div className="countdown-value">{time.minutes}</div>
        <div className="countdown-time">Mins</div>
      </div>
      <span>:</span>
      <div className="countdown-item">
        <div className="countdown-value">{time.seconds}</div>
        <div className="countdown-time">Secs</div>
      </div>
    </div>
  );
};

export default Countdown;
