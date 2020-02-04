import React from "react";

const Buttons = props => {
  return (
    <div className="button">
      <button
        className="prev"
        style={{
          float: "left",
          diplay: "block",
          "margin-left": 10,
          border: "none",
          "background-color": "white",
          cursor: "pointer",
          color: "black",
          "font-size": 18
        }}
        onClick={props.prev}
        disabled={props.data.indexOf(props.slide) === 0}
      >
        <i
          className="fas fa-chevron-circle-left"
          style={{
            "font-size": 20,
            color: "black",
            "margin-right": 8
          }}
        />
        Prev
      </button>

      <button
        className="next"
        style={{
          float: "right",
          display: "block",
          "margin-right": 10,
          border: "none",
          "background-color": "white",
          cursor: "pointer",
          "font-size": 18
        }}
        onClick={props.next}
        disabled={props.data.indexOf(props.slide) === props.data.length - 1}
      >
        Next
        <i
          className="fas fa-chevron-circle-right"
          style={{
            "font-size": 20,
            color: "black",
            "margin-left": 8
          }}
        />
      </button>
    </div>
  );
};

export default Buttons;
