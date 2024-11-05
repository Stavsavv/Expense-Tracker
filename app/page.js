"use client";
import { useState } from "react";
import { currencyFormatter } from "./lib/utils";
import ExpenceCategoryItem from "./components/ExpencCategoryItems";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import AddIncomePanel from "@/app/components/panels/AddIncomePanel";

ChartJS.register(ArcElement, Tooltip, Legend);

const DUMMY_DATA = [
  { id: 1, title: "Entertainment", color: "#000", total: 500 },
  { id: 2, title: "Gas", color: "#009", total: 200 },
  { id: 3, title: "Fuel", color: "#003", total: 1200 },
  { id: 4, title: "Movies", color: "#008", total: 800 },
  { id: 5, title: "Holiday", color: "#006", total: 2000 },
];

export default function Home() {
  const [showAddIncomePanel, setShowAddIncomePanel] = useState(false);

  return (
    <>
      <div>
        {/* Main Content */}
        <AddIncomePanel
          show={showAddIncomePanel}
          onClose={setShowAddIncomePanel}
        />
        <main className="container max-w-2xl px-6 mx-auto">
          <section className="py-3">
            <small className="text-gray-400 text-md">My Balance</small>
            <h2 className="text-4xl font-bold">{currencyFormatter(0)}</h2>
          </section>

          <section className="flex items-center gap-2 py-3">
            <button
              onClick={() => setIsPanelOpen(true)}
              className="btn btn-primary"
            >
              + Expenses
            </button>
            <button
              onClick={() => setShowAddIncomePanel(true)}
              className="btn btn-primary-outline"
            >
              + Income
            </button>
          </section>

          <section className="py-6">
            <h3 className="text-2xl">Expenses</h3>
            <div className="flex flex-col gap-4 mt-6">
              {DUMMY_DATA.map((expense) => (
                <ExpenceCategoryItem
                  key={expense.id}
                  color={expense.color}
                  title={expense.title}
                  total={expense.total}
                />
              ))}
            </div>
          </section>

          <section className="py-6">
            <h3 className="text-2xl">Stats</h3>
            <div className="w-1/2 mx-auto">
              <Doughnut
                data={{
                  labels: DUMMY_DATA.map((expense) => expense.title),
                  datasets: [
                    {
                      label: "Expenses",
                      data: DUMMY_DATA.map((expense) => expense.total),
                      backgroundColor: DUMMY_DATA.map(
                        (expense) => expense.color
                      ),
                      borderColor: ["#18181b"],
                      borderWidth: 5,
                    },
                  ],
                }}
              />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
