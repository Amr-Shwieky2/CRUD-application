import { useEffect, useState } from "react";
import axios from "axios";
import "../style/Products.css";
import { TbCurrencyShekel } from "react-icons/tb";
import FormEdite from "../components/FormEdite";
import FormAdd from "../components/FormAdd";
import { useCart } from "../context/CartContext";


const Products = () => {
  const { addToCart } = useCart();
  const [cakes, setCakes] = useState([]);
  //////edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCakeId, setEditCakeId] = useState();
  const [selectedCakeId, setSelectedCakeId] = useState(null);
  const [isFormAddVisible, setIsFormAddVisible] = useState(false);
  const baseURL = "http://localhost:5000/cakes";
  //const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setCakes(response.data);
    });
  }, []);
  // const handleEditButtonClick = (cakeID) => {
  //   setIsModalOpen(true);
  //   setEditCakeId(cakeID);
  //   setSelectedCakeId(cakeID);
  //   console.log("Edit button clicked for cake ID:", cakeID);
  // };
  // const handleAddToCart = (cakeID) => {
  //   setCart((prevCart) => [...prevCart, cakeID]);
  // };
  const addProduct = () => {
    setIsFormAddVisible(true);
  };
  const deleteProduct = (cakeId) => {
    axios.delete(`${baseURL}/${cakeId}`).then((response) => {
      console.log("success", response.data);
    });
  };
  const renderProducts = () => {
    const rows = [];
    for (let i = 0; i < cakes.length; i += 4) {
      const row = [];
      for (let j = i; j < i + 3 && j < cakes.length; j++) {
        const cake = cakes[j];
        row.push(
          <div
            key={cake.id}
            className="col border border-white border-4 d-flex flex-column justify-content-center align-items-center"
          >
            <div className=" fw-bold fs-5">Name: {cake.name}</div>
            <div>
              <img
                className="rounded float-end "
                style={{ width: "200px", height: "200px" }}
                src={cake.image}
              />
            </div>
            <div className=" fs-5">
              Price: {cake.price} <TbCurrencyShekel />
            </div>
            <div className="">Description:{cake.description}</div>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <button
                className="btn  mx-center me-2 btn-delete"
                onClick={() => deleteProduct(cake.id)}
              >
                Delete
              </button>
              <button
                className="btn  mx-center me-2 btn-edit"
                onClick={() => addToCart(cake)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      }
      rows.push(
        <div className="row" key={i}>
          {row}
        </div>
      );
    }
    return rows;
  };
  return (
    <>
      <div className="product">{renderProducts()}</div>
      {selectedCakeId !== null && isModalOpen && (
        <FormEdite
          cakes={cakes}
          cakeId={editCakeId}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <div className="d-flex flex-row justify-content-center align-items-center">
        <button
          className="btn  mx-center me-2 btn-edit d-flex justify-content-center"
          onClick={addProduct}
        >
          add products
        </button>
      </div>
      {isFormAddVisible && (
        <FormAdd onClose={() => setIsFormAddVisible(false)} />
      )}
    </>
  );
};
export default Products;