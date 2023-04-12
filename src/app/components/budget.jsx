import React from "react";
import TransactionStats from "./transactionStats";
import AccountStats from "./accountStats";
import PeriodStats from "./periodStats";
import budgetAPI from "../../api/budgetApi";

const Budget = () => {
  const getTypeTransactions = (type) => {
    return budgetAPI.transactions.filter(
      (transaction) => transaction.type === type
    );
  };
  const formatSum = (sum) => {
    if (sum.toString().length <= 3) {
      return sum;
    } else {
      return `₽ ${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }
  };

  return (
    <>
      <div className="stats__mini">
        <div className="stats__column">
          <TransactionStats
            type="income"
            format={formatSum}
            data={getTypeTransactions("income")}
          />
        </div>

        <div className="stats__column">
          <AccountStats format={formatSum} data={budgetAPI.accounts} />
        </div>

        <div className="stats__column">
          <TransactionStats
            type="expense"
            format={formatSum}
            data={getTypeTransactions("expense")}
          />
        </div>
      </div>

      <PeriodStats getData={getTypeTransactions} />
    </>
  );
};

export default Budget;
