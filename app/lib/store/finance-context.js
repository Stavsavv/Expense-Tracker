"use client";

import { createContext, useState, useEffect } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { db } from "@/app/lib/firebase";

export const financeContext = createContext({
  income: [],
  addIncomeItem: async () => {},
  removeIncomeItem: async () => {},
});

export default function FinanceContextProvider({ children }) {
  const [income, setIncome] = useState([]);

  const getIncomeData = async () => {
    const collectionRef = collection(db, "income");
    const docSnap = await getDocs(collectionRef);
    const data = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: new Date(doc.data().createdAt.toMillis()),
    }));
    setIncome(data);
  };

  const addIncomeItem = async (newIncome) => {
    const collectionRef = collection(db, "income");
    try {
      const docSnap = await addDoc(collectionRef, newIncome);
      setIncome((prevState) => [
        ...prevState,
        {
          id: docSnap.id,
          ...newIncome,
        },
      ]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeIncomeItem = async (incomeId) => {
    const docRef = doc(db, "income", incomeId);
    try {
      await deleteDoc(docRef);
      setIncome((prevState) => prevState.filter((i) => i.id !== incomeId));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    getIncomeData();
  }, []);

  const values = { income, addIncomeItem, removeIncomeItem };

  return (
    <financeContext.Provider value={values}>{children}</financeContext.Provider>
  );
}
