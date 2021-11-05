import "./styles.css";

const Product = ({
  products,
  setFilteredProducts,
  filteredProducts,
  handleClick,
}) => {
  return (
    <>
      <li>
        {products
          .filter((value) => {
            if (setFilteredProducts === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(filteredProducts.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item, key) => {
            return (
              <div className="productBox" key={key}>
                <img src={item.img} alt="" />
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <h4 className="price">R${item.price}</h4>
                <button
                  className="green-button"
                  onClick={() => handleClick(item)}
                >
                  Adicionar
                </button>
              </div>
            );
          })}
      </li>
    </>
  );
};

export default Product;
