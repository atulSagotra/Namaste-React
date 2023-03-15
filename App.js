import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import "./App.css";
import Footer from "./src/Components/Footer";
import RestaurantList from "./src/Components/RestaurantList";
import { lazy, Suspense, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ErrorPage from "./src/Components/ErrorPage";
import Profile from "./src/Components/Profile";
import About from "./src/Components/About";
import RestaurantMenu from "./src/Components/RestaurantMenu";

const Instamart = lazy(() => import("./src/Components/Instamart"));

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
				children: [{ path: "profile", element: <Profile /> }],
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantMenu />,
			},
			{
				path: "/instamart",
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<Instamart />
					</Suspense>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={appRoutes} />
);
