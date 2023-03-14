import { useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({ restaurantData }) => {
	return (
		<div className="restaurnat-card">
			<img
				src={IMG_CDN_URL + restaurantData.cloudinaryImageId}
				alt="restaurant_img"
				width={"200px"}
				height="120px"
			/>
			<h3>{restaurantData.name}</h3>
			<p>{restaurantData.cuisines.join(", ")}</p>
			<p>{restaurantData.locality}</p>
			<p>{restaurantData.costForTwoString}</p>
			<p>{restaurantData.totalRatingsString}</p>
		</div>
	);
};
export default RestaurantCard;
