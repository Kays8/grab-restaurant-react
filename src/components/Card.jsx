import React from "react";
import Swal from "sweetalert2";

const Card = ({ id, title, type, img }) => {
  //ใส่ handleDelete
  const handleDelete = async (id) => {
    Swal.fire({
      title: "ลบรายการนี้ใช่หรือไม่?",
      text: "Good Luck for Example in the future!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            "http://localhost:3000/restaurants/" + id,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            // SweetAlert สำหรับแจ้งว่าการลบสำเร็จ
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500, // แสดงผลเป็นเวลา 1.5 วินาที
            }).then(() => {
              window.location.reload();
            });
          }
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

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
            <button className="btn  btn-error" onClick={() => handleDelete(id)}>
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
