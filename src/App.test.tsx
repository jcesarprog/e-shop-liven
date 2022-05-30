import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppContextProvider } from "./contexts/AppContext";

import "@testing-library/jest-dom";
import App from "./App";
describe("App", () => {
  test("App gold path testing", async () => {
    render(
      <AppContextProvider>
        <App />
      </AppContextProvider>
    );
    // at first its loading
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // then it renders the product list
    // The first product is: Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
    await waitFor(
      () =>
        screen.findByText(
          "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        ),
      { timeout: 5000 }
    );

    // Now it must have 20 products, looking for buttons it will have 20 form products and one from the search bar, so 21 buttons
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(21);

    // Check the number on cart
    expect(screen.getByTestId("cart-counter").textContent).toBe("0");

    // Now we click on the first product and it must add to cart
    userEvent.click(buttons[1]);
    expect(screen.getByTestId("cart-counter").textContent).toBe("1");

    // clicking on the same product should not add increase the cart counter
    userEvent.click(buttons[1]);
    expect(screen.getByTestId("cart-counter").textContent).toBe("1");

    // Now we click on the second product and it must add to cart
    userEvent.click(buttons[2]);
    expect(screen.getByTestId("cart-counter").textContent).toBe("2");

    // now we click on the cart button and it must show the cart
    userEvent.click(screen.getByTestId("cart"));

    // we should be in the checkout cart now with both products
    // we have 2 from the first and 1 from the second
    // Values are: 109.95, 22.3
    expect(
      screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Mens Casual Premium Slim Fit T-Shirts")
    ).toBeInTheDocument();

    // Checking if the prices are correct
    expect(screen.getByText("Subtotal: $219.90")).toBeInTheDocument();
    expect(screen.getByText("Subtotal: $22.30")).toBeInTheDocument();

    // Checking it the Total Price is correct
    expect(screen.getByText("Total: $242.20")).toBeInTheDocument();

    const minusBtn = screen.getAllByTestId("minus-btn");
    const plusBtn = screen.getAllByTestId("plus-btn");
    const deleteBtn = screen.getAllByTestId("delete-btn");

    // Checking buttons on the first product
    userEvent.click(minusBtn[0]);
    expect(screen.getByText("Subtotal: $109.95")).toBeInTheDocument();
    // Checking it the Total Price is correct
    expect(screen.getByText("Total: $132.25")).toBeInTheDocument();
    // now adding two more to the first product
    userEvent.click(plusBtn[0]);
    userEvent.click(plusBtn[0]);
    expect(screen.getByText("Subtotal: $329.85")).toBeInTheDocument();
    // Checking it the Total Price is correct
    expect(screen.getByText("Total: $352.15")).toBeInTheDocument();

    // now we delete the first product
    userEvent.click(deleteBtn[0]);
    expect(
      screen.queryByText(
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      )
    ).not.toBeInTheDocument();

    // So the total price needs to be updated
    expect(screen.getByText("Total: $22.30")).toBeInTheDocument();

    // now we click on the finish order button
    userEvent.click(screen.getByText("Finish Order"));
    // expect to be on the last page with the congratulations message
    expect(screen.getByText("Congratulations 🎉🎉🎉")).toBeInTheDocument();

    // now we click on the E-shop button and goes back to the first page
    userEvent.click(screen.getByText("E-Shop"));
    expect(
      screen.getByPlaceholderText("Search for product")
    ).toBeInTheDocument();
  });
});
