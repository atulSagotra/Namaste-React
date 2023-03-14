import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Skeleton from "../Components/Skeleton"
import { IMG_CDN_URL } from "../Constants"

const RestaurantMenu = () => {
  const {id} = useParams()
  const [restaurantData, setRestaurantData] = useState()

  useEffect(() => {
    fetchRestaurantData()
  }, [])

  const fetchRestaurantData = async() => {
    const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=' + id)
    const json = await data.json()
    setRestaurantData(json?.data)
  }
  if(!restaurantData) return <Skeleton />
  return (
    <div className="restaurantData-page">
      {
        !restaurantData 
        ? <Skeleton />
        : (
          <div className="restaurant-page">
            <div>
              <h2>{restaurantData?.name}</h2>
              <img src={IMG_CDN_URL + restaurantData?.cloudinaryImageId} width='500px' height='200px' alt='res_image' />
              <h3>{restaurantData?.area}</h3>
              <h3>{restaurantData?.city}</h3>
              <h3>{restaurantData?.avgRating} stars</h3>
              <h3>{restaurantData?.costForTwoMsg}</h3>
            </div>
            <div>
            <h1>Menu</h1>
            <ul>
              {Object.values(restaurantData?.menu?.items).map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
          </div>
        )
      }

    </div>
  )
}
export default RestaurantMenu