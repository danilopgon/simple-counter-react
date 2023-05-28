import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

//create your first component
const Home = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center font-monospace">
      <div className="row">
        <div className="col-12 bg-dark text-light d-flex flex-column p-3 rounded">
          <SecondsCounter />
        </div>
      </div>
    </div>
  );
};

export default Home;
