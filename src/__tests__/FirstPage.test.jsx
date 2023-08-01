import { render, screen } from "@testing-library/react";
import FirstPage from "../FirstPage";

test("Example 1 renders successfully", () => {
  render(<FirstPage />);
  const inputElement = screen.getByRole("spinbutton");
  const button = screen.getByRole("button", { name: /submit/i });

  expect(inputElement).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
