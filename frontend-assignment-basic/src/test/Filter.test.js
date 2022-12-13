import { render, screen } from "@testing-library/react";
import Filter from "../components/Filter";


test("should render without any error", () => {
  render(<Filter />);
  const filter = screen.getByTestId("filter");
  const filterText = screen.getByText("Filters");
  const podsText = screen.getByText("Pods");
  const categoriesText = screen.getByText("Categories");
  const skillsText = screen.getByText("Skills");
  const cityText = screen.getByText("City/Country");
  const ratingText = screen.getByText("Rating");

  expect(filter).toBeInTheDocument();
  expect(filterText).toBeInTheDocument();
  expect(podsText).toBeInTheDocument();
  expect(categoriesText).toBeInTheDocument();
  expect(skillsText).toBeInTheDocument();
  expect(cityText).toBeInTheDocument();
  expect(ratingText).toBeInTheDocument();
});
