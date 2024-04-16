import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../../utils/context/useData";
import { Button } from "../../components/Button";
import Carousel from "../../components/Carousel";
import './index.css'

const Item = () => {
  const { id } = useParams(); // Obtiene el id del ítem de la URL
  const { getData } = useData();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      const extractedId = parseInt(id.split(":")[1], 10);
      const item = data.find((item) => item.key === extractedId); // Busca el ítem por su id
      setSelectedItem(item);
    };
    fetchData();
  }, [getData, id]);

  return (
    <div>
      {selectedItem && (
        <div id="item">
          <div>
            <img src={selectedItem.img} alt={selectedItem.title} id="img_item"/>
          </div>
          <div>
            <p className="uppercase">{selectedItem.category}</p>
            <h2 className="uppercase">{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <p className="price_item">{`$ ${selectedItem.price}`}</p>
            <div>
                <div id="stock">
                   <input type="number" name="stock_input" id="stock_input" placeholder="0"/>
                   <div id="buttons">
                      <button>+</button>
                      <button>-</button>
                   </div>
                <Button color="red" id="cart_button">Agregar al carrito</Button>
                </div>
            </div>
          </div>
        </div>
      )}
      <Carousel title="productos relacionados"/>
    </div>
  );
};

export default Item;
