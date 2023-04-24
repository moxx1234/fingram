import React from "react";
import budgetAPI from "../../../api/budgetApi";

const TotalBalance = ({ data }) => {
  const getTotalBalance = () => {
    return data.reduce((total, account) => (total += account.balance), 0);
  };

  return (
    <p className="user__total">
      Баланс:
      {data ? (
        <span className={getTotalBalance() >= 0 ? "positive" : "negative"}>
          {` ${budgetAPI.format(getTotalBalance())}`}
        </span>
      ) : (
        " Загрузка..."
      )}
    </p>
  );
};

export default TotalBalance;
