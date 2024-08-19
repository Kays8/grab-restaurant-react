import React from "react";
import Swal from "sweetalert2";
import {useAuthContext} from "../context/AuthContext"
import RestaurantService from "../services/restaurant.service";

const Card = ({ id, name, type, imageUrl }) => {
const { user } = useAuthContext();

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
        // เรียกใช้งานฟังก์ชัน deleteRestaurant
        const response = await RestaurantService.deleteRestaurant(id);

        // ตรวจสอบสถานะการตอบกลับ
        if (response.status === 200 ) {
          // แสดง SweetAlert สำหรับแจ้งว่าการลบสำเร็จ
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500, // แสดงผลเป็นเวลา 1.5 วินาที
          }).then(() => {
            // รีโหลดหน้าเว็บ
            window.location.reload();
          });
        } else {
          // แสดงข้อความผิดพลาดหากสถานะไม่เป็น 200 หรือ 204
          Swal.fire({
            title: "Failed to Delete",
            text: "The item could not be deleted.",
            icon: "error",
          });
        }
      } catch (error) {
        // แสดงข้อความข้อผิดพลาด
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.message || error.message,
          icon: "error",
        });
      }
    }
  });
};

  return (
    <div className="card items-center pt-2">
      <div className="card w-72 h-96 shadow-xl bg-gray-50 text-black ">
        <figure>
          <img src={imageUrl} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{type}</p>
          {user &&
            (user.roles.includes("ROLES_MODERATOR") ||
              user.roles.includes("ROLES_ADMIN")) && (
              <div className="card-actions justify-end">
                {user.roles.includes("ROLES_ADMIN") && (
                  <button
                    className="btn text-white btn-error"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                )}
                <a href={`/Edit/${id}`} className="btn btn-outline ">
                  EDIT
                </a>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Card;
