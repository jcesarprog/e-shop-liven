import { getProducts } from "./fakeStore";

describe("Fake Store API", () => {
  it("Testing if the api is returning data", async () => {
    const data = await getProducts();
    // data must have a length greater than zero
    expect(data.length).toBeGreaterThan(0);
  });
});
