import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filteredRestaurantData } from "../utils/helpers";
import useOnline from "../utils/useOnline";
import useRestaurantList from "../utils/useRestaurantList";
import RestaurantCard from "./RestaurantCard";
import Skeleton from "./Skeleton";

const RestaurantList = ({}) => {
	const allRestaurant = useRestaurantList();

	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const isOnline = useOnline();

	useEffect(() => {
		setFilteredRestaurant(allRestaurant);
	}, [allRestaurant]);

	if (!isOnline) return <h1>Offline, Please check your internet connection</h1>;

	if (allRestaurant?.length === 0) return <Skeleton />;
	return (
		<div className="flex flex-col items-center">
			<input
				type="text"
				className="w-1/2 m-4 p-1 text-center"
				placeholder="Search Restaurant Here..."
				onChange={(e) => {
					if (e.target.value) {
						const filteredRestaurant = filteredRestaurantData(
							e.target.value,
							allRestaurant
						);
						setFilteredRestaurant(filteredRestaurant);
					} else {
						setFilteredRestaurant(allRestaurant);
					}
				}}
			/>
			<div className="flex flex-wrap justify-center">
				{filteredRestaurant?.length === 0 ? (
					<>
						<h1>OOPS !</h1>
						<br />
						<h2>No Restaurant Found with this name</h2>
					</>
				) : (
					filteredRestaurant?.map((restaurant) => (
						<Link
							to={"/restaurant/" + restaurant.data.id}
							key={restaurant.data.id}
						>
							<RestaurantCard restaurantData={restaurant.data} />
						</Link>
					))
				)}
			</div>
		</div>
	);
};
export default RestaurantList;
