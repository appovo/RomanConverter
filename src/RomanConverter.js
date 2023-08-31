import React from "react";
import toArabic from "./toArabic";

class RomanConverter extends React.Component {
  state = { arabic: "" };
  handleChange = (event) => {
    const roman = event.target.value;
    this.setState({ arabic: toArabic(roman) });
  };
  render() {
    return (
      <div style={{ float: "left", margin: "15px 0 15px 0" }}>
        <label>
          <input
            placeholder="Enter a Roman number"
            onChange={this.handleChange}
            type="string"
            style={{ float: "left", marginLeft: "150px" }}
          ></input>
        </label>
        <h2 style={{ float: "left", margin: "0 0 0 5px" }}>
          is Arabic: {this.state.arabic || ""}
        </h2>
      </div>
    );
  }
}

export default RomanConverter;
