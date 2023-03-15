import { useEffect, useState } from "react";
import { FETCH_RES_MENU_URL } from "./constants";

const useRestaurant = (resId) => {
	const [restaurantData, setRestaurantData] = useState();
	useEffect(() => {
		fetchRestaurantData();
	}, []);

	const fetchRestaurantData = async () => {
		const data = await fetch(FETCH_RES_MENU_URL + resId);
		const json = await data.json();
		setRestaurantData(json?.data);
	};
	return restaurantData;
};
export default useRestaurant;
