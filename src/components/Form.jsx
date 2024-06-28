import React from "react";
import Navbar from "./Navbar";

const Form = () => {
  return (
    <>
      <Navbar />
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
              id="menuType"
              type="text"
              placeholder="ใส่ชื่อเมนู"
              name="menuType"
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
              id="menuType"
              type="text"
              placeholder="ใส่ประเภทเมนู"
              name="menuType"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              เลือกรูปภาพ:
            </label>
            <input
              className="input input-bordered w-full"
              id="image"
              type="file"
              accept="image/*"
              name="image"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6 text-center">
            <button className="btn btn-primary" type="submit">
              ส่งข้อมูล
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
