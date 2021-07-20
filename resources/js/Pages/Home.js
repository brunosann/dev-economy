import React from "react";
import Layout from "../components/Layout";
import CardMoney from "../components/CardMoney";
import { Doughnut } from "react-chartjs-2";

const Home = (props) => {
  const dataChart = {
    labels: [
      "Red",
      "Blue",
      "Yellow",
      "Red",
      "Blue",
      "Yellow",
      "Red",
      "Blue",
      "Yellow",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
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
          <button className="bg-blue-600 px-4 py-2 text-white rounded-md shadow-lg focus:outline-none transition-all hover:bg-blue-800">
            Nova Receita
          </button>
          <button className="bg-blue-600 px-4 py-2 text-white rounded-md shadow-lg focus:outline-none transition-all hover:bg-blue-800">
            Nova Despesa
          </button>
        </article>
        <section className="grid sm:grid-cols-3 gap-4 sm:gap-8">
          <CardMoney title="Saldo Atual" value="578,95" type="balance" />
          <CardMoney title="Receitas" value="978,95" type="recipe" />
          <CardMoney title="Despesas" value="718,26" type="expense" />
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 my-4 sm:my-8">
          <article
            className="bg-white py-4 overflow-auto rounded-md shadow-md scrollbar"
            id="style-7"
          >
            <p className="font-semibold text-xl text-gray-700 text-center">
              Despesas do mês
            </p>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
              (i) => (
                <div key={i} className="mx-4 my-2 border-b border-gray-300">
                  <div className="flex justify-between">
                    <p className="font-semibold text-gray-700 text-center">
                      Comida
                    </p>
                    <p className="font-semibold text-gray-700 text-center text-sm">
                      Informação para preencher
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold text-red-400 text-center">
                      R$ 26,90
                    </p>
                    <p className="font-semibold text-gray-700 text-center text-sm">
                      10/10/2021
                    </p>
                  </div>
                </div>
              )
            )}
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
