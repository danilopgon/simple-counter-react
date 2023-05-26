import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

//create your first component
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-12 d-flex align-items-center justify-content-center">
          <SecondsCounter />
        </div>
      </div>
    </div>
  );
};

export default Home;
