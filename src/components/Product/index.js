/* eslint-disable array-callback-return */
import FilterForm from "../FilterForm";
import "./styles.css";

const Product = ({
  products,
  setFilteredProducts,
  filteredProducts,
  handleClick,
}) => {
  return (
    <>
      <FilterForm setFilteredProducts={setFilteredProducts} />
      <ul className="liContainer">
        {products
          .filter((value) => {
            if (filteredProducts === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(filteredProducts.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item, key) => {
            return (
              <li className="productBox" key={key}>
                <img className="image" src={item.img} alt="" />
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <h4 className="price">R$ {item.price}</h4>
                <button
                  className="green-button"
                  onClick={() => handleClick(item)}
                >
                  Adicionar
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Product;
