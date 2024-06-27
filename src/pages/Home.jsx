import Header from "../components/Header";
import Search from "../components/Search";
import Restaurants from "../components/Restaurants";
import { useEffect, useState } from "react";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [filtedRestaurants, setFilteredRestaurants] = useState([]);

  //
  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
        setFilteredRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
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
