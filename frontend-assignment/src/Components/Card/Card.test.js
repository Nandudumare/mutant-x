// import { fireEvent, render, screen } from "@testing-library/react";
// import Card from "./Card";

// test("should render without any error", () => {
//   render(<Card />);
//   const card = screen.getByTestId("card");
//   expect(card).toBeInTheDocument();
// });

// test("should have cover Image, Profile Image, Name,Pods, Ratings, Location, Description, Skills", () => {
//   render(<Card />);

//   const coverImage = screen.getByTestId("coverImage");
//   const profile = screen.getByTestId("profile");
//   const image = screen.getByTestId("image");
//   const name = screen.getByTestId("name");
//   const pods = screen.getByTestId("pods");
//   const rating_location = screen.getByTestId("rating_location");
//   const description = screen.getByTestId("description");
//   const skills = screen.getByTestId("skills");

//   expect(coverImage).toBeInTheDocument();
//   expect(profile).toBeInTheDocument();
//   expect(image).toBeInTheDocument();
//   expect(name).toBeInTheDocument();
//   expect(pods).toBeInTheDocument();
//   expect(rating_location).toBeInTheDocument();
//   expect(description).toBeInTheDocument();
//   expect(skills).toBeInTheDocument();
// });

// test("should have an element with counter value as default ( 0 )", () => {
//   render(<Card />);

//   const counterValueElement = screen.getByTestId("value");

//   expect(counterValueElement).toHaveTextContent("0");
// });

// test("onClick of ADD, value of Counter should increment by 5", () => {
//   render(<Card />);
//   const btnAdd = screen.getByText("ADD");
//   const counterValueElement = screen.getByTestId("value");
//   fireEvent.click(btnAdd);
//   expect(counterValueElement).toHaveTextContent("5");
// });

// test("onClick of REDUCE, the value of Counter should decrement by 5", () => {
//   render(<Card />);
//   const btnReduce = screen.getByText("REDUCE");
//   const counterValueElement = screen.getByTestId("value");
//   fireEvent.click(btnReduce);
//   expect(counterValueElement).toHaveTextContent("-5");
// });
