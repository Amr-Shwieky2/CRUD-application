import { useEffect, useState } from "react";
import axios from "axios";
import "../style/Products.css";
import { TbCurrencyShekel } from "react-icons/tb";
import FormEdite from "../components/FormEdite";
import FormAdd from "../components/FormAdd";
const Products = () => {
  const [cakes, setCakes] = useState([]);
  //////edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editCakeId, setEditCakeId] = useState();
  const [selectedCakeId, setSelectedCakeId] = useState(null);
  const [isFormAddVisible, setIsFormAddVisible] = useState(false);
  const baseURL = " https://6516ff2909e3260018ca8e50.mockapi.io/cake";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCakes(response.data);
    });
  }, []);
  const handleEditButtonClick = (cakeID) => {
    setIsModalOpen(true);
    setEditCakeId(cakeID);
    setSelectedCakeId(cakeID);
    console.log("Edit button clicked for cake ID:", cakeID);
  };
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
                onClick={() => handleEditButtonClick(cake.id)}
              >
                Edit
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
