import React, { createContext, useContext } from 'react';
import { auth } from '../firebase.config';

// Creamos el contexto de Firebase
const FirebaseContext = createContext();

// Función para acceder al contexto de Firebase en otros componentes
export const useFirebase = () => {
  return useContext(FirebaseContext);
};

// Proveedor del contexto de Firebase
export const FirebaseProvider = ({ children }) => {
  // Funciones de Firebase Authentication que queremos proporcionar
  const signInWithEmailAndPassword = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
  };

  const signOut = async () => {
    return await auth.signOut();
  };

  const createUserWithEmailAndPassword = async (email, password) => {
    return await auth.createUserWithEmailAndPassword(email, password);
  };

  return (
    <FirebaseContext.Provider value={{ signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
