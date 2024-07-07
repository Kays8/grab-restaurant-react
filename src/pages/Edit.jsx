import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState({
    title: "",
    type: "",
    img: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/restaurants/" + id)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurants, [name]: value });
  };

  const handSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants/" + id, {
        method: "PUT",
        body: JSON.stringify(restaurants),
      });
      if (response.ok) {
        alert("GG JA");
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
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ชื่อเมนู:
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Name"
              id="title"
              name="title"
              value={restaurants.title}
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
              id="img"
              name="img"
              value={restaurants.img}
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
