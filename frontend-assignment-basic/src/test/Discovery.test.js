import { render, screen } from "@testing-library/react";
import Discovery from "../components/Discovery";


test("should render without any error", () => {
  render(<Discovery />);
  const discovery = screen.getByTestId("discovery");
  const filterSection = screen.getByTestId("filter-section");
  const contentSection = screen.getByTestId("content-section");
  expect(discovery).toBeInTheDocument();
  expect(filterSection).toBeInTheDocument();
  expect(contentSection).toBeInTheDocument();
});
