import { useCart } from "../context/CartContext";
import { TbCurrencyShekel } from "react-icons/tb";
import { useState } from "react";
import "../style/cart.css";
const MyCart = () => {
  const { cart } = useCart();
  const [customerDetails, setcustomerDetails] = useState({
    name: "",
    address: "",
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const handelInputChange = (e) => {
    setcustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.name,
      [e.target.adress]: e.target.address,
    });
  };
  const calculateTotalPrice = () => {
    const total = cart.reduce((acc, cake) => acc + cake.price, 0);
    setTotalPrice(total);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const productIds = cart.map((pro) => pro._id);
    const orderData = {
      products: productIds,
      totalPrice: calculateTotalPrice(cart),
      customerDetails,
    };
    //fetch
    // fetch("http://", {
    //   method: "PPST",
    //   Headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(orderData),
    // }).then((response) => response.json());
  };
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

          <form onSubmit={handlePlaceOrder} className="placeOrder-form">
            <input
              className="input-style"
              type="text"
              name="name"
              value={customerDetails.name}
              onChange={handelInputChange}
              placeholder="Name"
            ></input>
            <input
              className="input-style"
              type="text"
              name="address"
              value={customerDetails.address}
              onChange={handelInputChange}
              placeholder="Address"
            ></input>
            <button
              className="btn  mx-center me-2 btn-placeorder d-flex justify-content-center"
              type="submit"
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
