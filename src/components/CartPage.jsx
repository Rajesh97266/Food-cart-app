import "./Cart.css"

const CartPage = () => {
  return (
    <>
      <h1 className="cart-title">Cart Products</h1>
      <div className="cart-container">
        <div className="cart-product">
          <div className="cart-image">
            <img src="https://placeholder.pics/svg/100" alt="image" />
          </div>
          <div className="cart-details">
            <h3>Product Name</h3>
            <p>Price Rs: 19.99</p>
          </div>
        </div>
        <div className="cart-product">
          <div className="cart-image">
            <img src="https://placeholder.pics/svg/100" alt="image" />
          </div>
          <div className="cart-details">
            <h3>Product Name</h3>
            <p>Price Rs: 19.99</p>
          </div>
        </div>
        <div className="cart-product">
          <div className="cart-image">
            <img src="https://placeholder.pics/svg/100" alt="image" />
          </div>
          <div className="cart-details">
            <h3>Product Name</h3>
            <p>Price Rs: 19.99</p>
          </div>
        </div>
      </div>
      <h2 className="total-amount">Total Amount: Rs: 19.99</h2>
    </>
  );
};

export default CartPage;
