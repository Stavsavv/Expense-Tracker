import { useRef, useEffect, useContext } from "react";
import { currencyFormatter } from "@/app/lib/utils";
import { db } from "@/app/lib/firebase";
import Panel from "../panel";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc, //
} from "firebase/firestore";
import { FaRegTrashAlt } from "react-icons/fa";
import { financeContext } from "@/app/lib/store/finance-context";

function AddIncomePanel({ show, onClose }) {
  const amountRef = useRef();
  const descriptionRef = useRef();
  const { income, addIncomeItem, removeIncomeItem } =
    useContext(financeContext);

  const addIncomeHandler = async (e) => {
    e.preventDefault(); // Prevent form submission
    const newIncome = {
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
      createdAt: new Date(),
    };

    try {
      await addIncomeItem(newIncome);
      descriptionRef.current.value = "";
      amountRef.current.value = "";
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteIncomeHandler = async (incomeId) => {
    try {
      await removeIncomeItem(incomeId);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Panel show={show} onClose={() => onClose(false)}>
      <form onSubmit={addIncomeHandler} className="flex flex-col gap-10">
        <div className="input-group">
          <label htmlFor="amount">Income Amount</label>
          <input
            type="number"
            name="amount"
            ref={amountRef}
            min="0.01"
            step="0.01"
            placeholder="Enter income amount"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <input
            name="description"
            ref={descriptionRef}
            type="text"
            placeholder="Enter income description"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Income
        </button>
        <h3 className="text-center text-2xl font-bold ">Income History</h3>
        <div className="flex flex-col gap-4 px-2 overflow-auto max-h-64">
          {income.map((i) => (
            <div className="flex justify-between items-center" key={i.id}>
              <div className="flex-1">
                <p className="font-semibold">{i.description}</p>
                <small className="text-xs">{i.createdAt.toISOString()}</small>
              </div>
              <p className="flex items-center gap-2">
                {currencyFormatter(i.amount)}
                <button onClick={() => deleteIncomeHandler(i.id)}>
                  <FaRegTrashAlt />
                </button>
              </p>
            </div>
          ))}
        </div>
      </form>
    </Panel>
  );
}

export default AddIncomePanel;
