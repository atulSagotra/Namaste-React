import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../store/cartSlice";

const RestaurantCard = ({ restaurantData }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[200px] h-[400px] p-1 m-1 shadow-md">
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
