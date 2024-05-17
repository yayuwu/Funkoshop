import React, { useState, useEffect } from "react";
import Searchbar from "../Searchbar";
import { useData } from "../../../utils/context/useData"; // Importar el contexto
import CardItem from "../CardItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loader from "../CardLoader";
import "./index.css";

export default function ShopPagination() {
  const { getData } = useData(); // Obtener la función getData del contexto
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await getData(); // Llamar a getData desde el contexto
      console.log(data)
      setItems(data);
      // Simular un tiempo de carga de 2 segundos antes de cambiar el estado de loading
      setTimeout(() => {
        setLoading(false);
      }, 1800);
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
       <div style={{display: 'flex', justifyContent: 'center', marginBottom: '100px'}}>
         <Searchbar/>
       </div>
      {loading ? (
        <div className="loader_shop">
          <Loader/>
          <Loader/>
          <Loader/>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
