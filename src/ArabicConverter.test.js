import { cleanup, fireEvent, render } from '@testing-library/react'
import ArabicConverter from './ArabicConverter'

describe('<ArabicConverter />', () => {
  afterEach(cleanup)
  it('has an input field', () => {
    const { getByLabelText } = render(<ArabicConverter />)
    expect(() => {
      getByLabelText(/roman/i)
    }).not.toThrow()
  })
  it('shows no arabic number by default', () => {
    const { getByText } = render(<ArabicConverter />)
    expect(() => {
      getByText('Arabic: none')
    }).not.toThrow()
  })
  it('converts MMXIX to 2019 ', () => {
    const { getByText, getByLabelText } = render(<ArabicConverter />)
    fireEvent.change(getByLabelText(/roman/i), { target: { value: 'MMXIX' } })
    expect(() => {
      getByText('Arabic: 2019')
    }).not.toThrow()
  })
})
