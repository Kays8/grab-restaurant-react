import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import RestaurantService from "../services/restaurant.service";
import Swal from "sweetalert2";

const Edit = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState({
    name: "",
    type: "",
    imageUrl: "",
  });

  useEffect(() => {
   RestaurantService.getRestaurantById(id).then((response)=>{
    if(response.status === 200){
      setRestaurants(response.data);
    }
   })
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurants, [name]: value });
  };

  const handSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await RestaurantService.editRestaurant(id, restaurants);
      if (response === 200) {
        Swal.fire({
          title: "Restaurant update",
          text: response.data.message,
          icon: "success",
          
        })
         navigate("/");
      }
      
    } catch(error){
      Swal.fire({
        title: "Restaurant Update",
        text: error?.response?.data?.message || error.message ,
        icon: "error",
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-8">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
          {/* Menu Type */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ชื่อเมนู:
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Name"
              id="title"
              name="name"
              value={restaurants.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ประเภทเมนู:
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Type"
              id="type"
              name="type"
              value={restaurants.type}
              onChange={handleChange}
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              IMG:
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="imageUrl"
              id="imageUrl"
              name="imageUrl"
              value={restaurants.imageUrl}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6 text-center">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handSubmit}
            >
              ส่งข้อมูล
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
