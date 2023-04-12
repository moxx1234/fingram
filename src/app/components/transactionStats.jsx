import React from "react";
import Icons from "../assets/img/svg/icons";

const TransactionStats = ({ type, format, data }) => {
  const getTotalSum = (budgetType) =>
    budgetType.reduce((total, transaction) => {
      return (total += transaction.sum || 0);
    }, 0);

  return (
    <div className="stats__item recent-stats">
      <h2 className="recent-stats__label">
        {type === "income" ? "Доходы" : "Расходы"} {Icons()[type]}
      </h2>
      <div className="recent-stats__content">
        {data.slice(-3).map((transaction) => (
          <div className="recent-stats__row" key={transaction.id}>
            <div className="recent-stats__category">{transaction.category}</div>
            <div className="recent-stats__subcat">
              {transaction.subcategory ? transaction.subcategory : "-/-"}
            </div>
            <div className="recent-stats__sum">{format(transaction.sum)}</div>
          </div>
        ))}
      </div>
      <div className="recent-stats__total">
        <div className="recent-stats__total-label">Итого:</div>
        <div className="recent-stats__total-sum">
          {format(getTotalSum(data))}
        </div>
      </div>
    </div>
  );
};

export default TransactionStats;
