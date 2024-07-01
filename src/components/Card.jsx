import React from "react";

const Card = ({id, title, type, img }) => {
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
            <a href= {`/Edit/${id}`} className="btn btn-primary">
              EDIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
