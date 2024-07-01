import Card from "./Card";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
      {restaurants &&
        restaurants.map((restaurants) => (
          <Card
            key={restaurants.id}
            id={restaurants.id}
            img={restaurants.img}
            title={restaurants.title}
            type={restaurants.type}
          />
        ))}
    </div>
  );
};

export default Restaurants;
