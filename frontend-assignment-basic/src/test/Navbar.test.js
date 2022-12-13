import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("should render without any error", () => {
  render(<Navbar />);
  const navbar = screen.getByTestId("navbar");
  const hamburger = screen.getByTestId("hamburger");

  expect(navbar).toBeInTheDocument();
  expect(hamburger).toBeInTheDocument();
});
