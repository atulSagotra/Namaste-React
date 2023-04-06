export const filteredRestaurantData = (searchText, allRestaurant) => {
  const filteredRestaurant = allRestaurant.filter((res) =>
    res.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredRestaurant;
};
