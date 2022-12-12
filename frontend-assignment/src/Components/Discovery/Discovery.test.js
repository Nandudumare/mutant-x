import { fireEvent, render, screen } from "@testing-library/react";
import Discovery from "./Discovery";

test("should render without any error", () => {
  render(<Discovery />);
  const discovery = screen.getByTestId("discovery");
  expect(discovery).toBeInTheDocument();
});
