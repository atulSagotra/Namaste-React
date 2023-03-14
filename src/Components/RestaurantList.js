import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Skeleton from "./Skeleton";

const RestaurantList = ({}) => {
	const [allRestaurant, setAllRestaurant] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);

	useEffect(() => {
		fetchRestaurantList();
	}, []);

	const fetchRestaurantList = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
		)
			.then((res) => res.json())
			.catch((err) => console.log(err));
		console.log("fetch:", data?.data?.cards[2].data?.data?.cards);
		setAllRestaurant(data?.data?.cards[2].data?.data?.cards);
		setFilteredRestaurant(data?.data?.cards[2].data?.data?.cards);
	};
	if (allRestaurant?.length === 0) return <Skeleton />;
	return (
		<>
			<input
				type="text"
				className="search-input-restaurant"
				placeholder="Search Restaurant Here..."
				onChange={(e) => {
					if (e.target.value) {
						const filteredRestaurant = allRestaurant.filter((res) =>
							res.data.name.toLowerCase().includes(e.target.value.toLowerCase())
						);
						setFilteredRestaurant(filteredRestaurant);
					} else {
						setFilteredRestaurant(allRestaurant);
					}
				}}
			/>
			<div className="restaurnat-container">
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
		</>
	);
};
export default RestaurantList;
