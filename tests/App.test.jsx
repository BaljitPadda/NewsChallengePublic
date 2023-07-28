import { render, screen } from "@testing-library/react";

import App from "../src/App";

describe("App tests", () => {
  test("it displays 'Headlines' on the Headlines page", () => {
    render(<App />);

    expect(screen.getByText("Headlines Page").toBeInTheDocument);
  });
});
