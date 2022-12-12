import { render, screen } from "@testing-library/react";
import Card from "./Card";

const el = {
  name: "Kaushik Dutta",
  profile: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
  pods: "Web,Mobile & Software Dev",
  rating: 4.5,
  location: "Betul",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum a tempora sed optio. Fugit rem optio, consectetur nam in ratione itaque. Incidunt provident a...",
  skills: ["IOS Devlopers"],
};

test("should render without any error", () => {
  render(<Card el={el} />);
  const card = screen.getByTestId("card");
  expect(card).toBeInTheDocument();
});

test("should have cover Image, Profile Image, Name,Pods, Ratings, Location, Description, Skills", () => {
  render(<Card el={el} />);

  const coverImage = screen.getByTestId("coverImage");
  const profile = screen.getByTestId("profile");
  const image = screen.getByTestId("image");
  const name = screen.getByTestId("name");
  const pods = screen.getByTestId("pods");
  const rating_location = screen.getByTestId("rating_location");
  const description = screen.getByTestId("description");
  const skills = screen.getByTestId("skills");

  expect(coverImage).toBeInTheDocument();
  expect(profile).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(name).toHaveTextContent(`${el.name}`);
  expect(pods).toBeInTheDocument();
  expect(pods).toHaveTextContent(`${el.pods}`);
  expect(rating_location).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(description).toHaveTextContent(`${el.description}`);
  expect(skills).toBeInTheDocument();
});
