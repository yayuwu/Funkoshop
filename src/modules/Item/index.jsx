import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../../utils/context/useData";
import { Button } from "../../components/Button";
import Carousel from "../../components/Carousel";
import { useCart } from "../../../utils/context/useCart";
import './index.css'

const Item = ({item}) => {
  const { id } = useParams(); // Obtiene el id del ítem de la URL
  const { getData } = useData();
  const [quantity, setQuantity] = useState(0);
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

  const { addToCart } = useCart(); // Obtiene la función addToCart del contexto
  
  const handleAddToCart = () => {
    if (selectedItem && quantity > 0) {
      addToCart(selectedItem, quantity); // Agrega la cantidad especificada al carrito
      setQuantity(0); // Limpia la cantidad después de agregar al carrito
    }
  };
  

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    // Limita la cantidad a un máximo de 10
    if (!isNaN(value)) {
      value = Math.min(value, 10);
      setQuantity(value);
    }
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

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
                   <input type="number" name="stock_input" id="stock_input" placeholder="0" value={quantity} max={10} onChange={handleInputChange}/>
                   <div id="buttons">
                      <button onClick={handleIncrement}>+</button>
                      <button onClick={handleDecrement}>-</button>
                   </div>
                <Button color="red" id="cart_button" onClick={handleAddToCart}>Agregar al carrito</Button>
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
