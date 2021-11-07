import "./styles.css";

const ShoppingCart = ({
  setCurrentSale,
  currentSale,
  setCartTotal,
  cartTotal,
  total,
  handleRemove,
}) => {
  return (
    <>
      <div className="cartHeader">
        <h2>Carrinho de compras</h2>

        {currentSale.map((item, key) => {
          return (
            <div className="cart-container">
              <div className="cartproductBox" key={key}>
                <img src={item.img} alt="" />
                <span className="cartInfo">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                </span>

                {/* <h4 className="price">R${item.price}</h4> */}
                <button
                  className="gray-button"
                  onClick={() => handleRemove(item)}
                >
                  Remover
                </button>
              </div>
            </div>
          );
        })}
        <div className="subtotal">
          <span>
            <p className="totalP">Total: </p>
            <p className="totalValue">R${total}</p>
          </span>
          <button className="removeAll" onClick={() => setCurrentSale([])}>
            Remover todos
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
