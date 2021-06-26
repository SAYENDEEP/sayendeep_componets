import React from "react";
import "../../stylesheets/sayendeep_style/Map.css";
import ReactStars from "react-rating-stars-component";

const firstExample = {
  size: 20,
  count: 5,
  isHalf: false,
  value: 4,
  color: "blue",
  activeColor: "red",
  onChange: (newValue) => {
    console.log(`Example 3: new value is ${newValue}`);
  }
};

const secondExample = {
  size: 20,
  count: 5,
  isHalf: false,
  value: 4,
  color: "blue",
  activeColor: "red",
  onChange: (newValue) => {
    console.log(`Example 3: new value is ${newValue}`);
  }
};

const thirdExample = {
  size: 20,
  count: 5,
  isHalf: false,
  value: 4,
  color: "blue",
  activeColor: "red",
  onChange: (newValue) => {
    console.log(`Example 3: new value is ${newValue}`);
  }
};

const fourthExample = {
  size: 20,
  count: 5,
  isHalf: false,
  value: 4,
  color: "blue",
  activeColor: "red",
  onChange: (newValue) => {
    console.log(`Example 3: new value is ${newValue}`);
  }
};

export default function Star() {
  return (
    <div className="App">
      {/* <h1>react-rating-stars-component</h1> */}

      <h5>
        Cost of Trip
        <ReactStars {...firstExample} />
      </h5>
      <h5>
        Beauty of the place
        <ReactStars {...secondExample} />
      </h5>
      <h5>
        Food and Cuisine
        <ReactStars {...thirdExample} />
      </h5>
      {/* <h4>Char with half rating and a11y</h4> */}
      <h5>
        {" "}
        SightSeeing
        <ReactStars {...fourthExample} />
      </h5>
    </div>
  );
}
