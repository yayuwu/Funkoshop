import React, { useState, useEffect } from "react";
import { useData } from "../../../utils/context/useData"; // Importar el contexto
import CardItem from "../CardItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./index.css";

export default function ShopPagination() {
  const { getData } = useData(); // Obtener la función getData del contexto
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(); // Llamar a getData desde el contexto
      setItems(data);
    };

    fetchData();
  }, [getData]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleItemClick = (item) => {
    history.push(`/item/${item.key}`); // Redirecciona a la ruta del ítem seleccionado
  };

  // Calcular el rango de índices de elementos a mostrar
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div id="shop_pagination">
        {currentItems.map((item) => (
          <CardItem
            img={item.img}
            title={item.title}
            category={item.category}
            price={item.price}
            key={item.key}
            url_id={`/shop/item/id:${item.key}`}
            onClick={() => handleItemClick(item)} // Agrega un manejador de clic para cada ítem
          />
        ))}
      </div>
      <div id="pagination">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(items.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
}