import React from "react";
import Buttons from "../Slide/Buttons";

const Slide = props => {
  return (
    <div>
      <div className="content">
        <h2> {props.slide.head}</h2>
        <p> {props.slide.text}</p>
        <p>{props.slide.card}</p>
      </div>
      <div className="slide">
        <Buttons
          next={props.next}
          prev={props.prev}
          currentIndex={props.currentIndex}
          data={props.data}
          slide={props.slide}
        />
      </div>
    </div>
  );
};

export default Slide;
