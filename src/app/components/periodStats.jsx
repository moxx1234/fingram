import React, { useState } from "react";
import Icons from "../assets/img/svg/icons";
import Piechart from "./piechart";

const colors = [
  "#16C784",
  "#EA3943",
  "#F6B87E",
  "#3861FB",
  "#808A9D",
  "#D3659A",
  "#2ed59c",
  "#ea39be",
  "#38c9fb",
  "#a92ed5",
];

const PeriodStats = ({ getData }) => {
  const [mainType, setMainType] = useState("income");

  const handleTypeChange = (type) => {
    return function (e) {
      e.preventDefault();
      setMainType(type);
    };
  };

  const transactions = getData(mainType);
  const formatData = (inputData) => {
    const data = [];
    const res = {};
    inputData.forEach((transaction) => {
      res[transaction.category]
        ? (res[transaction.category] += transaction.sum)
        : (res[transaction.category] = transaction.sum);
    });
    const names = Object.keys(res);
    const values = Object.values(res);
    for (let i = 0; i < names.length; i++) {
      data[i] = { name: names[i], value: values[i] };
    }
    return data;
  };

  return (
    <div className="stats__detailed period-stats">
      <div className="period-stats__header">
        <div>
          <button
            onClick={handleTypeChange("income")}
            className={`period-stats__tab ${
              mainType === "income" ? " active" : ""
            }`}
          >
            Доходы
          </button>
          <button
            onClick={handleTypeChange("expense")}
            className={`period-stats__tab ${
              mainType === "expense" ? " active" : ""
            }`}
          >
            Расходы
          </button>
        </div>
        <div className="period-stats__settings">
          <select className="period-stats__period">
            <option id="month">Месяц</option>
            <option id="week">Неделя</option>
            <option id="year">Год</option>
            <option id="custom">Другое...</option>
          </select>
          {Icons().plus}
        </div>
      </div>

      <div className="period-stats__content">
        <div className="period-stats__chart">
          <Piechart data={formatData(transactions)} colors={colors} />
        </div>
        <div className="period-stats__period-info period-info">
          <h2 className="period-info__title">Прошлый период:</h2>
          <ul className="period-info__list">
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
          </ul>
        </div>
        <div className="period-stats__period-info period-info">
          <h2 className="period-info__title">Текущий период:</h2>
          <ul className="period-info__list">
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
          </ul>
        </div>
        <div className="period-stats__total">+5,000 ₽/ +2,34 %</div>
      </div>
    </div>
  );
};

export default PeriodStats;
