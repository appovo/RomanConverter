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
      <div className="input-arabic-parent">
        <label>
          <input
            className="input-arabic"
            onChange={this.handleChange}
            type="number"
            placeholder="Enter an Arabic number"
          ></input>
        </label>
        <h2 style={{ float: "left", margin: "3px 0 0 5px" }}>
          is Roman: {this.state.roman}
        </h2>
      </div>
    );
  }
}

export default ArabicConverter;
