import React from "react";

const CounterInput = ({ onChange, value, onClick, text }) => {
  return (
    <div className="input-group my-3">
      <input
        type="number"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        onChange={onChange}
        value={value}
        required
      />
      <button className="input-group-text" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default CounterInput;
