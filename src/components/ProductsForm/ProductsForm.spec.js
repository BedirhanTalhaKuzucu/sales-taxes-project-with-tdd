import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductsForm from "./ProductsForm";

describe("Product Form Component Test", () => {
  render(<ProductsForm />);

  async function addProduct() {
    for (let index = 0; index < 2; index++) {
      let addButton = screen.getByTestId("addProduct-button");
      userEvent.click(addButton);
    }
  }

  test("Does the close button delete its own input from the page?", async () => {
    await addProduct();
    let closeButton = screen.queryByTestId("close-button-1");
    userEvent.click(closeButton);
    closeButton = screen.queryAllByTestId("close-button-1");
    expect(closeButton).toHaveLength(0);
  });

  test("Click the printButton without filling out the form will result in an invalid form?", async () => {
    await addProduct();
    let printButton = screen.getByTestId("print-button");
    let form = screen.getByTestId("form");

    userEvent.click(printButton);

    expect(form).not.toBeValid()
  });

});
