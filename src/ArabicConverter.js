import React from 'react'
import toArabic from './toArabic'

class ArabicConverter extends React.Component {
  state = { arabic: 'none' }
  handleChange = (event) => {
    const roman = event.target.value
    this.setState({ arabic: toArabic(roman) })
  }
  render() {
    return (
      <>
        <label>
          Roman:
          <textarea defaultValue={'Enter Roman number'} onChange={this.handleChange} type="number"></textarea>
        </label>
        <h1>Arabic: {this.state.arabic}</h1>
      </>
    )
  }
}

export default ArabicConverter
