import React, { useEffect, useState } from "react";
import CounterInput from "./CounterInput.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

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

  const castTimeToString = (timeNumber) => {
    let charsArray = [];
    let textNumber = timeNumber.toString();
    textNumber = textNumber.padStart(6, "000000");
    charsArray = textNumber.split("");
    return charsArray;
  };

  return (
    <>
      <h2 className="display-5 text-center my-3 ">{mode} Mode</h2>
      <div className="card-group text-dark display-2 my-3 d-flex">
        <div className="card p-3 text-center">
          <FontAwesomeIcon icon={faClock} />
        </div>
        {countDown === 0
          ? castTimeToString(seconds).map((number, key) => {
              return (
                <div className="card p-3 text-center" key={key}>
                  {number}
                </div>
              );
            })
          : castTimeToString(countDown).map((number, key) => {
              return (
                <div className="card p-3 text-center" key={key}>
                  {number}
                </div>
              );
            })}
      </div>
      <div
        className="btn-group btn-group-lg w-100 my-3 "
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
      <CounterInput
        onChange={handleCountdownInput}
        value={countDownValue !== null ? countDownValue : ""}
        onClick={startCountdown}
        text={"Set countdown"}
      />

      <CounterInput
        onChange={handleAlarmInput}
        value={alarmValue !== null ? alarmValue : ""}
        onClick={startAlarm}
        text={"Set alarm"}
      />
    </>
  );
};

export default SecondsCounter;
