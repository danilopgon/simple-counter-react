import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

//create your first component
const Home = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 bg-dark text-light rounded p-3 d-flex flex-column">
          <SecondsCounter />
        </div>
      </div>
    </div>
  );
};

export default Home;
