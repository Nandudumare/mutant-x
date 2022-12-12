import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("should render without any error", () => {
  render(<Navbar />);
  const navbar = screen.getByTestId("navbar");
  expect(navbar).toBeInTheDocument();
});
