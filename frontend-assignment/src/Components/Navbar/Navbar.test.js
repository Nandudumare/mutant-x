import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("should render without any error", async () => {
  render(<Navbar />);
  const navbar = screen.getByTestId("navbar");
  await expect(navbar).toBeInTheDocument()
});
