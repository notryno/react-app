import React from "react";
import Card from "../components/Card";

// Assuming this is your mock data array
const cardData = [
  {
    id: 1,
    image:
      "https://nicholassparks.com/wp-content/uploads/2022/08/201908-the-choice-9780446401319-680x1020-1.jpeg",
    title: "Product 1",
    description: "Description for Product 1",
    price: 10.99,
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/51TgX6GiRdL._SL500_.jpg",
    title: "Product 2",
    description: "Description for Product 2",
    price: 19.99,
  },
  {
    id: 3,
    image:
      "https://nicholassparks.com/wp-content/uploads/2022/08/201908-the-choice-9780446401319-680x1020-1.jpeg",
    title: "Product 1",
    description: "Description for Product 1",
    price: 10.99,
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/51TgX6GiRdL._SL500_.jpg",
    title: "Product 2",
    description: "Description for Product 2",
    price: 19.99,
  },
  {
    id: 5,
    image:
      "https://nicholassparks.com/wp-content/uploads/2022/08/201908-the-choice-9780446401319-680x1020-1.jpeg",
    title: "Product 1",
    description: "Description for Product 1",
    price: 10.99,
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/51TgX6GiRdL._SL500_.jpg",
    title: "Product 2",
    description: "Description for Product 2",
    price: 19.99,
  },
  {
    id: 7,
    image:
      "https://nicholassparks.com/wp-content/uploads/2022/08/201908-the-choice-9780446401319-680x1020-1.jpeg",
    title: "Product 1",
    description: "Description for Product 1",
    price: 10.99,
  },
  {
    id: 8,
    image: "https://m.media-amazon.com/images/I/51TgX6GiRdL._SL500_.jpg",
    title: "Product 2",
    description: "Description for Product 2",
    price: 19.99,
  },
];

const Home = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cardData.map((card, index) => (
        <div
          key={index}
          style={{ display: "flex", marginBottom: "20px", marginRight: "30px" }}
        >
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            price={card.price}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
