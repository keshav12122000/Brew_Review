import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [value, setValue] = useState({});
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("value"));
    setValue(data);
  }, []);

  return (
    <div className="container">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        {/* Carousel content */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://media.istockphoto.com/id/1093593288/photo/close-up-of-bartender-pouring-draft-beer-in-glass.jpg?s=612x612&w=0&k=20&c=qhSKb5v13QDuotRFV2HYAsVIlTkefv6wjTFqOBEkFXo="
              alt="First slide"
            />
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div className="jumbotron">
        <div className="brewery-info">
          <h1 className="display-4">
            {value.name} <span className="display-8"><b>{value.brewery_type}</b></span>
          </h1>
          <p className="lead">
            This is a brewery shop, its details are aligned with the information below. You can connect with us. We are available 24/7.
          </p>
        </div>

        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>{value.street}</p>
          <p>
            {value.address_1} {value.address_2} {value.address_3} {value.logitude} {value.city}
          </p>
          <p>
            {value.longitude} {value.latitude}
          </p>
          <p>
            {value.state} {value.country} {value.phone}
            {value.postal_code}
          </p>
        </div>
        <div>
        <input type="number" placeholder="Enter Your Ratings" />
        </div>
        <div className="text-area-container my-2">
          <textarea
            id="myTextbox"
            value={text}
            onChange={handleChange}
            rows="4"
            cols="50"
            placeholder="Enter Your Feedbacks"
          ></textarea>
          <div className="entered-text">
            {/* <label htmlFor="myTextbox"> Enter Feedbacks</label> */}
            <p >Your Feedback: <span style={{fontWeight: "700"}}>{text}</span></p>
          </div>
        </div>

        <p className="lead">
          <a className="btn btn-info btn-lg" href="#" role="button">
            Submit
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;

