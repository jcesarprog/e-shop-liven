import { render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("Search Bar", () => {
  it("Testing if the search bar renders with the input and the button", () => {
    render(<SearchBar />);
    expect(
      screen.getByPlaceholderText("Search for product")
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
