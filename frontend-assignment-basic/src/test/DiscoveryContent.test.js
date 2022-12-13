import { render, screen } from "@testing-library/react";
import DiscoveryContent from "../components/DiscoveryContent";


test("should render without any error", () => {
  render(<DiscoveryContent />);
  const header = screen.getByTestId("header");
  const searchBox = screen.getByTestId("searchBox");
  const container = screen.getByTestId("container");

  expect(header).toBeInTheDocument();
  expect(searchBox).toBeInTheDocument();
  expect(container).toBeInTheDocument();
});
