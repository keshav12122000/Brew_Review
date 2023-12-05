import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";

// import Home from './Home';
// import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css";

function DisplayProfile({ value }) {
  const[rate,setrate]=useState('4');
  const navigate = useNavigate();
  // const value =data[0];
  // <div id="myElement" data-page="Home.js">Click me</div>
  const handleData = () => {
    console.log(value);
    const newData = JSON.stringify(value);
    localStorage.setItem("value", newData);
    navigate("/home");
  };
  return (
    <>
      <div className="container">
        <div className="card p-3">
          <div className="d-flex align-items-center">
            {/* <div className="image">  */}
            {/* <img src={value.website_url} className="rounded" width="100"/>  */}
            <a
              target="_blank"
              style={{ width: "31px", marginTop: "57px", marginRight: "16px" }}
              href={value.website_url}
            >
              <i
                style={{ fontSize: "40px" }}
                className="bi bi-browser-edge"
              ></i>
            </a>
            {/* </div> */}
            <div className="ml-3 w-100">
              <h4 className="mb-0 mt-0">
              
                <div  className="change d-flex align-items-center justify-content-between" onClick={handleData}>{value.name} <span>Rating: {rate}</span></div>
              </h4>
              <span>{value.address_1}</span>
              <div className="p-2 mt-2 bg-info d-flex justify-content-between rounded text-white stats">
                <div className="d-flex flex-column">
                  {" "}
                  <span className="articles">Mobile No</span>{" "}
                  <span className="number1">{value.phone}</span>{" "}
                </div>
                <div className="d-flex flex-column">
                  {" "}
                  <span className="followers">State</span>{" "}
                  <span className="number2">{value.state}</span>{" "}
                </div>
                <div className="d-flex flex-column">
                  {" "}
                  <span className="rating">longitude</span>{" "}
                  <span className="number3">{value.longitude}</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Home value={value}/> */}
    </>
  );
}

export default DisplayProfile;
