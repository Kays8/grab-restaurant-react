import Header from "../components/Header";
import Search from "../components/Search";
import Restaurants from "../components/Restaurants";
import { useEffect, useState } from "react";
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filtedRestaurants, setFilteredRestaurants] = useState([]);

  //
  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await RestaurantService.getAllRestaurant();
        if (response.status === 200) {
          setRestaurants(response.data);
          setFilteredRestaurants(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Get All Restaurant",
          text: error.response.data.message || error.message,
          icon: "error",
        });
      }
    };
    getRestaurants();
  }, []);

  return (
    <div className="bg-gray-50">
      <Header />
      <Search
        restaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <Restaurants restaurants={filtedRestaurants} />
    </div>
  );
}

export default Home;
