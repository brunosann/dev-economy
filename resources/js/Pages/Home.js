import React from "react";
import Layout from "../components/Layout";
import CardMoney from "../components/CardMoney";
import { Doughnut } from "react-chartjs-2";
import AddExpense from "../components/AddExpense";
import formatCurrency from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";

const Home = ({ expenses, expenseCategories }) => {
  const getCategoryById = (id) => {
    const index = expenseCategories.findIndex((category) => category.id === id);
    return expenseCategories[index];
  };

  const dataExpensesChart = expenses.reduce(
    (acc, expense) => {
      const categoryName = getCategoryById(
        expense.expenses_categories_id
      ).category;
      if (!acc.categories.includes(categoryName))
        acc.categories = [...acc.categories, categoryName];

      acc.data[categoryName] = acc.data[categoryName]
        ? Number(acc.data[categoryName]) + Number(expense.value)
        : Number(expense.value);

      acc.total = Number(acc.total) + Number(expense.value);

      return acc;
    },
    { categories: [], data: {}, total: 0 }
  );

  const dataChart = {
    labels: dataExpensesChart.categories,
    datasets: [
      {
        label: "Gráfico despesas do mês",
        data: dataExpensesChart.categories.map(
          (category) => dataExpensesChart.data[category]
        ),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const optionsChart = {
    title: {
      display: true,
      text: "Gráfico de Gastos",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "right",
    },
    responsive: true,
    layout: {
      padding: 20,
    },
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8 xl:px-0">
        <article className="flex gap-4 sm:gap-8 my-4 sm:my-8 justify-center sm:justify-start">
          <AddExpense />
          <button className="bg-blue-600 px-4 py-2 text-white rounded-md shadow-lg focus:outline-none transition-all hover:bg-blue-800">
            Nova Receita
          </button>
        </article>
        <section className="grid sm:grid-cols-3 gap-4 sm:gap-8">
          <CardMoney title="Saldo Atual" value="578.95" type="balance" />
          <CardMoney title="Receitas" value="978.95" type="recipe" />
          <CardMoney
            title="Despesas"
            value={dataExpensesChart.total}
            type="expense"
          />
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 my-4 sm:my-8">
          <article
            className="bg-white py-4 overflow-auto rounded-md shadow-md scrollbar"
            id="style-7"
          >
            <p className="font-semibold text-xl text-gray-700 text-center">
              Despesas do mês
            </p>
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="mx-4 my-2 border-b border-gray-300"
              >
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-700 text-center">
                    {getCategoryById(expense.expenses_categories_id).category}
                  </p>
                  <p className="font-semibold text-gray-700 text-center text-sm">
                    {expense.description}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold text-red-400 text-center">
                    {formatCurrency(expense.value)}
                  </p>
                  <p className="font-semibold text-gray-700 text-center text-sm">
                    {formatDate(expense.created_at)}
                  </p>
                </div>
              </div>
            ))}
          </article>
          <article className="bg-white flex-1 rounded-md shadow-md">
            <Doughnut data={dataChart} options={optionsChart} />
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
