import React from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

export const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  React.useEffect(() => {
    const getPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://62b01332b0a980a2ef497df8.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert(error);
      }
    };
    getPizza();
  }, []);

  if (!pizza) {
    return <>Loading...</>;
  }
  return (
    <div style={{ margin: "50px" }}>
      <img alt={pizza.title} src={pizza.imageUrl} />
      <h1>{pizza.title}</h1>
      <h3>Price: {pizza.price}р.</h3>
    </div>
  );
};
