import React from 'react'
import toRoman from './toRoman'

class RomanConverter extends React.Component {
  state = { roman: 'none' }
  handleChange = (event) => {
    const arabic = event.target.value
    this.setState({ roman: toRoman(arabic) })
  }
  render() {
    return (
      <>
        <label>
          Arabic:
          <input onChange={this.handleChange} type="number"></input>
        </label>
        <h1>Roman: {this.state.roman}</h1>
      </>
    )
  }
}

export default RomanConverter
