import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-16 p-4 bg-white drop-shadow-lg">
        <div className="navbar-start ">
          <a href="/">
            <img
              className="w-40"
              src="https://cloud.shopback.com/c_fit,h_750,w_750/store-service-th/assets/11076/9838b3f0-c024-11ea-bf98-e1c7c502cca8.png"
              alt=""
            />
          </a>
        </div>

        <div className="navbar-end">
          <a href="/Add" className="btn">
            ADD MENU
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
