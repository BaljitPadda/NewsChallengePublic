import { render, screen } from "@testing-library/react";
import HeadlinesPage from "../src/Components/HeadlinesPage";
import mockNewsData from "../mockNewsData.json";

describe("HeadlinesPage tests", () => {
  test("it should call the displayData function which should return a HeadlineCard", () => {
    render(
      <HeadlinesPage
        dataArray={mockNewsData.mockApiResponse.response.results}
      />
    );

    expect(
      screen.getByText(
        "Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings"
      ).toBeInTheDocument
    );
  });
});
