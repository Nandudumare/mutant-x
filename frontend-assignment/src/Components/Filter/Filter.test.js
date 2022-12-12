import { fireEvent, render, screen } from "@testing-library/react";
import Filter from "./Filter";

test("should render without any error", () => {
  render(<Filter />);
  const filter = screen.getByTestId("filter");
  expect(filter).toBeInTheDocument();
});
