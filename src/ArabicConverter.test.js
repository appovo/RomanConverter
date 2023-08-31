import { cleanup, fireEvent, render } from "@testing-library/react";
import ArabicConverter from "./ArabicConverter";

describe("<ArabicConverter />", () => {
  afterEach(cleanup);
  it("has an input field", () => {
    const { getByPlaceholderText } = render(<ArabicConverter />);
    expect(() => {
      getByPlaceholderText(/arabic/i);
    }).not.toThrow();
  });

  it("converts 2019 to MMXIX ", () => {
    const { getByText, getByPlaceholderText } = render(<ArabicConverter />);
    fireEvent.change(getByPlaceholderText(/arabic/i), {
      target: { value: "2019" },
    });
    expect(() => {
      getByText("is Roman: MMXIX");
    }).not.toThrow();
  });
});
