import React, { Component } from 'react';
import SlideOne from './SlideOne';


export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="slider">
        <SlideOne/>
      </div>
    );
  }

}
