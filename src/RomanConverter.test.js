import { cleanup, fireEvent, render } from "@testing-library/react";
import RomanConverter from "./RomanConverter";

describe("<RomanConverter />", () => {
  afterEach(cleanup);
  it("has an input field", () => {
    const { getByPlaceholderText } = render(<RomanConverter />);
    expect(() => {
      getByPlaceholderText(/roman/i);
    }).not.toThrow();
  });
  it("converts MMXIX to 2019 ", () => {
    const { getByText, getByPlaceholderText } = render(<RomanConverter />);
    fireEvent.change(getByPlaceholderText(/roman/i), {
      target: { value: "MMXIX" },
    });
    expect(() => {
      getByText("is Arabic: 2019");
    }).not.toThrow();
  });
});
