/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

describe("Header Rendering", () => {
  it("Testing if the header renders the title the logo and the cart", () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText("E-Shop")).toBeInTheDocument();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    const svgEl = container.querySelector(
      "[data-icon='cart-shopping']"
    ) as HTMLImageElement;
    expect(svgEl.classList.toString()).toContain("fa-cart-shopping");
  });
});
