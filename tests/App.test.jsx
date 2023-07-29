import { render, screen } from "@testing-library/react";
import App from "../src/App";
import axiosMock from "axios";

vi.mock("axios");

describe("App tests", () => {
  test("it displays 'Headlines' on the Headlines page", () => {
    render(<App />);

    expect(screen.getByText("Headlines Page").toBeInTheDocument);
  });

  test("it should make an axios call from the getHeadlines function to get the mockNewsData", async () => {
    render(await axiosMock.get("http://localhost:3000/mockApiResponse"));

    expect(
      screen.findByText(
        "Victorian MPs urged to implement integrity reforms before state election after scathing Ibac findings"
      ).toBeInTheDocument
    );
  });
});
