import React, { useEffect, useState } from "react";
import { useData } from "../../../utils/context/useData";
import CardItem from "../CardItem";
import "./index.css";

export default function Carousel(props) {
  const { getData } = useData();
  const [items, setItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(); // Llamar a getData desde el contexto
      setItems(data);
    };

    fetchData();
  }, [getData]);

  const handleSlideChange = (slide) => {
    setCurrentSlide(slide);
  };

  const handleItemClick = (item) => {
    history.push(`/item/${item.key}`); // Redirecciona a la ruta del ítem seleccionado
  };

  const renderItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    return items.slice(startIndex, endIndex).map((item) => (
      <CardItem
        img={item.img}
        title={item.title}
        category={item.category}
        price={item.price}
        key={item.key}
        url_id={`/shop/item/id:${item.key}`}
        onClick={() => handleItemClick(item)} // Agrega un manejador de clic para cada ítem
      />
    ));
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <h2>{props.title}</h2>
        <div className="slides">
          <button
            id="left_btn"
            onClick={() => handleSlideChange(currentSlide - 1)}
            disabled={currentSlide === 0}
          >
            ❮
          </button>
          <button
            id="right_btn"
            onClick={() => handleSlideChange(currentSlide + 1)}
            disabled={currentSlide === Math.floor(items.length / itemsPerSlide)}
          >
            ❯
          </button>
            {renderItems()}
        </div>
      </div>
    </div>
  );
}
