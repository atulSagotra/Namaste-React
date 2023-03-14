import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import "./App.css";
import Footer from "./src/Components/Footer";
import RestaurantList from "./src/Components/RestaurantList";
import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import RestaurantMenu from "./src/Routes/RestaurantMenu";
import About from "./src/Routes/About";
import ErrorPage from "./src/Components/ErrorPage";
import Profile from "./src/Components/Profile";

const App = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
const appRoutes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <RestaurantList />,
				
			},
			{
				path: "/about",
				element: <About />,
				children: [{ path: "profile" , element: <Profile /> }],
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantMenu />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={appRoutes} />
);
