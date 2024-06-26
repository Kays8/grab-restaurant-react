import React from "react";

const Cart = () => {
  const items = [
    {
      id: 1,
      name: "ชานมไข่มุก SEAL CHA - ถนนจรัญสนิทวงศ์",
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C4EZPB6JG3JDHE/hero/14740504-f0f7-4db2-abd6-754603cfaa9d__store_cover__2023__08__06__05__17__50.webp",
    },

    {
      id: 2,
      name: "ชาคุมะ - บางลำพู บวรนิเวศ - บางขุนพรหม",
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C3CXFAVFENAGTE/hero/f5bd492ad3b9411685163d9cd3252438_1645493394542478810.webp",
    },

    {
      id: 3,
      name: "Noonkotsi นุนกตซิ บิงซูเกาหลี - บรรทัดทอง",
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2MECFTYG3UACT/hero/b742dbfc3a194d969d7b9700a9d18f9d_1619767067138384219.webp",
    },

    {
      id: 4,
      name: "ใส่นม ราชเทวี - ซอยเพชรบุรี5",
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-CZDXMGKDC3XDAX/hero/7dd7cd00445343ecaa23107dd0aac970_1587628308975907155.webp",
    },

    {
      id: 5,
      name: "292 Slowbar Cafe & Roastery - บางขุนพรหม",
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C3AJNN2JGJXCVX/hero/9dd94ddf48bd43bcbefd6bda1582d36d_1656562601100269522.webp",
    },
  ];
  return (
    <>
      <div className="pt-4 flex flex-wrap justify-center gap-4 ">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="card w-96 bg-base-100 shadow-xl bg-indigo-100 text-black"
            >
              <figure>
                <img src={item.img} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">สั่งซื้อ</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
