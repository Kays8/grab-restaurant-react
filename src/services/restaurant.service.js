import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

//get all restaurants
const getAllRestaurant = async () => {
  return await api.get(RESTO_API);
};

//get restaurants by Id
const getRestaurantById = async (id) => {
   return await api.get(RESTO_API + `/${id}`);
}

// update a restaurant date
const editRestaurant = async (id, restaurant) =>{
  return await api.put(RESTO_API + `/${id}`, restaurant);
}


//delete restaurants
const deleteRestaurant = async (id) => {
   return await api.delete(RESTO_API + `/${id}`);
}

//add restaurants
const insertRestaurant = async (restaurant) => {
  return await api.post(RESTO_API, restaurant);
};

//export public function
const RestaurantService = {
  getAllRestaurant,
  getRestaurantById,
  editRestaurant,
  deleteRestaurant,
  insertRestaurant
};

export default RestaurantService;
