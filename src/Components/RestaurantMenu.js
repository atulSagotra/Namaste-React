import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Skeleton from "../Components/Skeleton";
import { IMG_CDN_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
	const { id } = useParams();

	const restaurantData = useRestaurant(id);

	if (!restaurantData) return <Skeleton />;
	return (
		<div className="restaurantData-page">
			{!restaurantData ? (
				<Skeleton />
			) : (
				<div className="flex m-4">
					<div>
						<h2>{restaurantData?.name}</h2>
						<img
							src={IMG_CDN_URL + restaurantData?.cloudinaryImageId}
							width="500px"
							height="200px"
							alt="res_image"
						/>
						<h3>{restaurantData?.area}</h3>
						<h3>{restaurantData?.city}</h3>
						<h3>{restaurantData?.avgRating} stars</h3>
						<h3>{restaurantData?.costForTwoMsg}</h3>
					</div>
					<div className="m-4">
						<h1>Menu</h1>
						<ul>
							{Object.values(restaurantData?.menu?.items).map((item) => (
								<li key={item.id}>{item.name}</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};
export default RestaurantMenu;
