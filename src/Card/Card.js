import React, { Component } from "react";
import item from "./item";
import Images from "./Images/Images";
import Slide from "./Slide/Slide";

import "./Card.css";

class Card extends Component {
  state = {
    data: item,
    currentData: item[0],
    currentIndex: 0
  };

  prev = () => {
    let currentIndex = this.state.data.indexOf(this.state.currentData);
    this.setState(prevState => {
      return {
        currentData: this.state.data[currentIndex - 1]
      };
    });
  };
  next = () => {
    let currentIndex = this.state.data.indexOf(this.state.currentData);
    this.setState(prevState => {
      return {
        currentData: this.state.data[currentIndex + 1]
      };
    });
  };
  render() {
    return (
      <div className="app">
        <div className="card">
          <div className="image">
            <Images i={this.state.currentData} />
          </div>
          <Slide
            slide={this.state.currentData}
            next={this.next}
            prev={this.prev}
            currentIndex={this.state.currentIndex}
            data={this.state.data}
          />
        </div>
      </div>
    );
  }
}

export default Card;
