import { useState } from "react";
import "./styles.css";
import FilterForm from "../FilterForm";
import Product from "../Product";

const MenuContainer = ({ products, handleClick }) => {
  const [filteredProducts, setFilteredProducts] = useState("");

  return (
    <>
      {/* <FilterForm setFilteredProducts={setFilteredProducts} /> */}

      <div className="productContainer">
        <Product
          products={products}
          setFilteredProducts={setFilteredProducts}
          filteredProducts={filteredProducts}
          handleClick={handleClick}
        />
      </div>
    </>
  );
};

export default MenuContainer;
