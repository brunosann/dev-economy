import React from "react";
import { FaWallet, FaCommentsDollar, FaCommentDollar } from "react-icons/fa";

const CardMoney = ({ title, value, type }) => {
  const typesCards = {
    balance: {
      textColor: "text-blue-500",
      bgColor: "bg-blue-500",
      icon: <FaWallet className="text-white text-2xl" />,
    },
    recipe: {
      textColor: "text-green-600",
      bgColor: "bg-green-600",
      icon: <FaCommentsDollar className="text-white text-2xl" />,
    },
    expense: {
      textColor: "text-red-500",
      bgColor: "bg-red-500",
      icon: <FaCommentDollar className="text-white text-2xl" />,
    },
  };

  return (
    <article className="flex items-center justify-between py-7 px-5 bg-white shadow-md rounded-md">
      <div
        className={`flex items-center justify-center w-14 h-12 rounded ${typesCards[type].bgColor}`}
      >
        {typesCards[type].icon}
      </div>
      <div className="text-right">
        <p className="font-semibold text-gray-700">{title}</p>
        <p
          className={`font-semibold tracking-wider ${typesCards[type].textColor}`}
        >
          R$ {value}
        </p>
      </div>
    </article>
  );
};

export default CardMoney;
