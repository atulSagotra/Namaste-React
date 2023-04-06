import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../store/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo Should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("header-image-logo");

  expect(logo[0].src).toBe(
    "https://upload.wikimedia.org/wikipedia/commons/6/6c/Atul_logo.png"
  );
  // Check if logo is loaded
});

test("Instamart Link Should be available in header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const instamartLink = header.getByTestId("instamart-link");

  expect(instamartLink.innerHTML).toBe("Instamart");
  // Check if logo is loaded
});

test("Instamart Link Should be available in header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart 2-items");
  // Check if logo is loaded
});
