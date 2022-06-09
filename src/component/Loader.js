import React, { Component } from "react";
import loading from "./loader.gif";
export class Loader extends Component {
  render() {
    return (
      <div className="item-center">
          <img src={loading} alt="loadinggggg" />
        
      </div>
    );
  }
}

export default Loader;
