import { render, screen } from "@testing-library/react";
import { CheckoutProduct } from "./CheckoutProduct";

const product1 = {
  image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  title: "DANVOUY Womens T Shirt Casual Cotton Short",
  price: 12.99,
  id: 20,
  amount: 10,
};

describe("CheckoutProduct", () => {
  it("testing if the Checkout product renders properly", () => {
    render(<CheckoutProduct {...product1} />);
    expect(
      screen.getByText("DANVOUY Womens T Shirt Casual Cotton Short")
    ).toBeInTheDocument();
    expect(screen.getByText("Price: $12.99")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Subtotal: $129.90")).toBeInTheDocument();

    // testing if the buttons are rendered
    expect(screen.getByTestId("minus-btn")).toBeInTheDocument();
    expect(screen.getByTestId("plus-btn")).toBeInTheDocument();
    expect(screen.getByTestId("delete-btn")).toBeInTheDocument();
  });
});
