import React, { useEffect, useState } from "react";

const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [countDownValue, setCountDownValue] = useState(null);
  const [countDown, setCountDown] = useState(0);
  const [mode, setMode] = useState("Timer");
  const [paused, setPaused] = useState(false);
  const [alarmValue, setAlarmValue] = useState(null);
  const [alarm, setAlarm] = useState(null);
  const [disabled, setDisabled] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setSeconds((seconds) => seconds + 1);
      }
    }, 1000);
    setMode("Timer");
    return () => clearInterval(interval);
  }, [paused]);

  const startTimer = () => {
    setPaused(false);
  };

  const stopTimer = () => {
    setPaused(true);
  };

  const resetTimer = () => {
    setSeconds(0);
    setMode("Timer");
    setPaused(false);
  };

  useEffect(() => {
    if (countDown !== 0) {
      const timeout = setTimeout(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
      setMode("Countdown");
      setDisabled("disabled");
      return () => clearTimeout(timeout);
    }
    setSeconds(0);
    setMode("Timer");
    setPaused(false);
    setDisabled("");
  }, [countDown]);

  useEffect(() => {
    if (seconds === alarm) {
      alert("It's time!");
      setAlarm(null);
    }
  }, [seconds, alarm]);

  const handleCountdownInput = (event) => {
    setCountDownValue(event.target.value);
  };

  const startCountdown = () => {
    const parsedCountDownValue = parseInt(countDownValue);
    if (parsedCountDownValue > 0) {
      setCountDown(parsedCountDownValue);
      setMode("Countdown");
      setCountDownValue(null);
    }
  };

  const handleAlarmInput = (event) => {
    setAlarmValue(event.target.value);
  };

  const startAlarm = () => {
    setAlarm(parseInt(alarmValue));
    setAlarmValue(null);
  };

  return (
    <div className="card p-5 bg-dark text-light rounded shadow-lg font-monospace">
      <h2 className="display-5 text-center">{mode} Mode</h2>
      <h1 className="display-1 text-center">
        {countDown === 0 ? `${seconds}` : `${countDown}`}
      </h1>
      <div
        className="btn-group btn-group-lg my-3"
        role="group"
        aria-label="..."
      >
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={resetTimer}
          disabled={disabled}
        >
          Reset
        </button>
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={stopTimer}
          disabled={disabled}
        >
          Pause
        </button>
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={startTimer}
          disabled={disabled}
        >
          Start
        </button>
      </div>
      <div className="input-group my-3">
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleCountdownInput}
          value={countDownValue !== null ? countDownValue : ""}
          required
        />
        <button
          className="input-group-text"
          onClick={startCountdown}
          id="countdownButton"
        >
          Set countdown
        </button>
      </div>
      <div className="input-group my-3">
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleAlarmInput}
          value={alarmValue !== null ? alarmValue : ""}
        />
        <button
          className="input-group-text"
          onClick={startAlarm}
          id="countdownButton"
        >
          Set alarm
        </button>
      </div>
    </div>
  );
};

export default SecondsCounter;
