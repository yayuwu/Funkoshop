// Context.js
import React, { createContext, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config"
const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const getData = async () => {
    const productsRef = collection(db, "productos");
    const snapshot = await getDocs(productsRef);
    const data = snapshot.docs.map((doc) => ({
      img: doc.data().image,
      title: doc.data().title,
      category: doc.data().category,
      description: doc.data().description,
      price: doc.data().price,
      key: doc.data().key,
      quantity: doc.data().quantity, 
    }));
    return data;
  };

  return (
    <DataContext.Provider value={{ getData }}>                       
      {children}
    </DataContext.Provider>
  );
};
