import { useState } from "react";
import React from "react";

const Add = () => {
  const [restaurants, setRestaurants] = useState({
    title: "",
    type: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurants, [name]: value });
  };

  const handSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        body: JSON.stringify(restaurants),
      });
      if (response.ok) {
        alert("GG");
        setRestaurants({
          title: "",
          type: "",
          img: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-8">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
          {/* Menu Type */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="menuType"
            >
              ชื่อเมนู:
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Name"
              name="title"
              value={restaurants.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="menuType"
            >
              ประเภทเมนู:
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Type"
              name="type"
              value={restaurants.type}
              onChange={handleChange}
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="menuType"
            >
              IMG:
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="imageUrl"
              name="img"
              value={restaurants.img}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6 text-center">
            <button className="btn btn-primary" type="submit" onClick={handSubmit}>
              ส่งข้อมูล
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
