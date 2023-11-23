import { useCart } from "../context/CartContext";
import "../style/cart.css";
const MyCart = () => {
  const { cart } = useCart();
  return (
    <div>
      <div className="cart">
        <form className="MyCartForm">
          <h1>My Cart</h1>
          {cart.map((cake, index) => (
            <li className="cartDetails" key={index}>
              Cake Name: {cake.name} , Cake Price : {cake.price}
            </li>
          ))}
        </form>
      </div>
    </div>
  );
};

export default MyCart;
