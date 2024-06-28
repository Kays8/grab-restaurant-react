import React from "react";

const Card = ({ img, title, type }) => {
  return (
    <div className="card items-center pt-2">
      <div className="card w-72 h-96 shadow-xl bg-gray-50 text-black ">
        <figure>
          <img src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{type}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
