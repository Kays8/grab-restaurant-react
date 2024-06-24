import React, { useState, useEffect } from "react";

const Cart = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((restaurants) => {
        setRestaurants(restaurants);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="pt-4 flex flex-wrap justify-center gap-4">
        {restaurants && restaurants.map((restaurants) => {
          return (
            <div
              key={restaurants.id}
              className="card w-96 bg-base-100 shadow-xl bg-indigo-100 text-black"
            >

              <figure>
                <img src={restaurants.img} alt={restaurants.name} />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{restaurants.name}</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">สั่งซื้อ</button>
                </div>
              </div>
              
            </div>
          );
        }
          
        )}
      </div>
    </>
  );
};

export default Cart;
