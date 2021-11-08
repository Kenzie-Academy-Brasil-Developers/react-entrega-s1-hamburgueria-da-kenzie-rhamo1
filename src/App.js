/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.44,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.65,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.21,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.55,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta Ovomaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const total = currentSale
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  const handleClick = (product) => {
    currentSale.every((item) => item.id !== product.id) &&
      setCurrentSale([...currentSale, product]);
    console.log(currentSale);
  };

  const handleRemove = (prod) => {
    setCurrentSale(currentSale.filter((item) => item !== prod));
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <MenuContainer products={products} handleClick={handleClick} />
      </div>
      <div className="sideBar">
        <ShoppingCart
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          handleRemove={handleRemove}
          total={total}
        />
      </div>
    </div>
  );
}

export default App;
