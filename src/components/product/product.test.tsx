import { render, screen } from "@testing-library/react";
import { Product } from "./Product";
describe("Product rendering", () => {
  it("A Product should render with image title price and a button", () => {
    const product = {
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      id: 20,
    };
    render(<Product {...product} />);

    // The image exists
    const img: HTMLImageElement = screen.getByRole("img");
    expect(img.src).toBe(
      "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
    );

    // The title exists
    expect(
      screen.getByText("DANVOUY Womens T Shirt Casual Cotton Short")
    ).toBeInTheDocument();

    // The price exists
    expect(screen.getByText("$12.99")).toBeInTheDocument();

    // The button exists
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
