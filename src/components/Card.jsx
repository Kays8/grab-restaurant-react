import React from "react";

const Card = ({id, title, type, img }) => {
  //ใส่ handleDelete 
  const handeDelete = async (id) =>{
     try {
       const response = await fetch("http://localhost:3000/restaurants/" + id, {
         method: "DELETE"
       });
       if (response.ok) {
         alert("DELETE JA");
         window.location.reload();
       }
     } catch (err) {
       console.log(err);
     }
  }



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
            <button className="btn  btn-error" onClick={()=>handeDelete(id)}>
              Delete
            </button>
            <a href={`/Edit/${id}`} className="btn btn-info">
              EDIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
