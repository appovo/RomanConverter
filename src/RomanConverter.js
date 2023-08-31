import React from "react";
import toArabic from "./toArabic";
import "./index.css";

class RomanConverter extends React.Component {
  state = { arabic: "" };
  handleChange = (event) => {
    const roman = event.target.value;
    this.setState({ arabic: toArabic(roman) });
  };
  render() {
    return (
      <div className="input-roman-parent">
        <label>
          <input
            className="input-roman"
            onChange={this.handleChange}
            type="string"
            placeholder="Enter a Roman number"
          ></input>
        </label>
        <h2 style={{ float: "left", margin: "3px 0 0 150px" }}>
          is Arabic: {this.state.arabic || ""}
        </h2>
      </div>
    );
  }
}

export default RomanConverter;
