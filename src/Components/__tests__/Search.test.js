import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { StaticRouter } from "react-router-dom/server";
import RestaurantList from "../RestaurantList";
import { RESTAURANT_DATA, RestaurantData } from "../../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});
test("Reastaurnat Should Load on Homepage", async () => {
  const body = render(
    <Provider store={store}>
      <StaticRouter>
        <RestaurantList />
      </StaticRouter>
    </Provider>
  );

  await waitFor(() => expect(body.getByTestId("restaurant-list")));

  const resList = body.getByTestId("restaurant-list");

  expect(resList.children.length).toBe(15);

  // const shimmer = body.getByTestId("shimmer");
  // expect(shimmer.children.length).toBe(10);
  // expect(shimmer).toBeInTheDocument();
});

test("Search Result on HomePage", async () => {
  const body = render(
    <Provider store={store}>
      <StaticRouter>
        <RestaurantList />
      </StaticRouter>
    </Provider>
  );

  await waitFor(() => expect(body.getByTestId("search-bar")));

  const SearchBar = body.getByTestId("search-bar");

  fireEvent.change(SearchBar, {
    target: {
      value: "food",
    },
  });

  const resList = body.getByTestId("restaurant-list");

  expect(resList.children.length).toBe(4);

  // const shimmer = body.getByTestId("shimmer");
  // expect(shimmer.children.length).toBe(10);
  // expect(shimmer).toBeInTheDocument();
});
