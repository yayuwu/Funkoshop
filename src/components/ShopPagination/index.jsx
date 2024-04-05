import React, { useState, useEffect } from "react";
import CardItem from "../CardItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./index.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase.config";

export default function ShopPagination() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const getData = async () => {
    const productsRef = collection(db, "productos");
    const snapshot = await getDocs(productsRef);
    const data = snapshot.docs.map((doc) => ({
      img: doc.data().image,
      title: doc.data().title,
      category: doc.data().category,
      price: doc.data().price,
      key: doc.data().key,
    }));
    setItems(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
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
