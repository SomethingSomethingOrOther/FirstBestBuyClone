import "./Cart.css";

const Cart = () => {
  return (
    <div className="container">
      <div className="container__cart">
        <img
          style={{ height: "1.9rem", width: "1.9rem" }}
          src="https://www.svgrepo.com/show/506144/cart-4.svg"
          alt="Cart"
        />
        <span className="container__cart_name">Cart</span>
      </div>
    </div>
  );
};
export default Cart;
