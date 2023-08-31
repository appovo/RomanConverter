import React from "react";
import toRoman from "./toRoman";
import "./index.css";

class ArabicConverter extends React.Component {
  state = { roman: "" };
  handleChange = (event) => {
    const arabic = event.target.value || "";
    this.setState({ roman: toRoman(arabic) });
  };
  render() {
    return (
      <div style={{ float: "left", margin: "15px 0 15px 0" }}>
        <label>
          <input
            onChange={this.handleChange}
            type="number"
            placeholder="Enter an Arabic number"
            style={{ width: "163px", float: "left", marginLeft: "15px" }}
          ></input>
        </label>
        <h2 style={{ float: "left", margin: "0 0 0 5px" }}>
          is Roman: {this.state.roman}
        </h2>
      </div>
    );
  }
}

export default ArabicConverter;
