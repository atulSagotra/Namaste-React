import { useEffect, useState } from "react";
import { FETCH_RES_LIST_URL } from "./constants";

const useRestaurantList = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const data = await fetch(FETCH_RES_LIST_URL)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setAllRestaurant(data?.data?.cards[2].data?.data?.cards);
  };
  return allRestaurant;
};
export default useRestaurantList;
