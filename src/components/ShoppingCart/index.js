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
    <div className="cart">
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
          <div>
            <p className="totalP">Total: </p>
            <p className="totalValue">R${total}</p>
          </div>
          <button className="removeAll" onClick={() => setCurrentSale([])}>
            Remover todos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
