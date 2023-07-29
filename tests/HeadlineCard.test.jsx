import { render, screen } from "@testing-library/react";
import HeadlinesPage from "../src/Components/HeadlinesPage";
import HeadlineCard from "../src/Components/HeadlineCard";

describe("HeadlinesCard tests", () => {
  test("it should display an image and a headline as part of a card", () => {
    render(
      <HeadlineCard headline={"I'm a headline"} imageText={"I'm an image"} />
    );
    expect(screen.getByText("I'm a headline").toBeInTheDocument);
    expect(screen.findByDisplayValue("I'm an image").toBeInTheDocument);
  });
});
