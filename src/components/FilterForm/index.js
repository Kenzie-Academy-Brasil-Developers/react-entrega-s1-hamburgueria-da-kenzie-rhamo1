import { useState } from "react";
import burguer from "./assets/burguer.png";
import "./styles.css";

const FilterForm = ({}) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div className="header">
      <img src={burguer} alt="logo" className="header-title" />

      <div className="search">
        <input
          type="text"
          placeholder="nome do produto"
          onChange={(event) => {
            setFilteredProducts(event.target.value);
          }}
        />
        <button className="green-button">Limpar</button>
      </div>
    </div>
  );
};

export default FilterForm;
