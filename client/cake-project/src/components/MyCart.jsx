import { useCart } from "../context/CartContext";
import { TbCurrencyShekel } from "react-icons/tb";

import "../style/cart.css";
const MyCart = () => {
  const { cart } = useCart();
  return (
    <div>
      <div className="cart">
        <div className="forms-container">
          <form className="MyCartForm">
            <h1>My Cart</h1>
            {cart.map((cake, index) => (
              <li className="cartDetails" key={index}>
                Cake Name: {cake.name} , Cake Price : {cake.price}
                <TbCurrencyShekel />
              </li>
            ))}
          </form>

          <form className="placeOrder-form">
            <input
              className="input-style"
              type="text"
              value=""
              onChange=""
              placeholder="Name"
            ></input>
            <input
              className="input-style"
              type="text"
              value=""
              onChange=""
              placeholder="address"
            ></input>
            <button
              className="btn  mx-center me-2 btn-placeorder d-flex justify-content-center"
              onClick=""
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
