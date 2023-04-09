import React, { useState } from "react";
import TransactionStats from "./transactionStats";
import budgetApi from "../../api/budgetApi";
import AccountStats from "./accountStats";
import PeriodStats from "./periodStats";

const Budget = () => {
  const getTotalSum = (budgetType) =>
    budgetType.reduce(
      (total, transaction) => (total += transaction.sum || transaction.balance),
      0
    );
  const formatSum = (sum) => {
    if (sum.toString().length <= 3) {
      return sum;
    } else {
      return `₽ ${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }
  };

  const [periodIncome, setPeriodIncome] = useState(
    getTotalSum(budgetApi.income)
  );
  const [periodExpense, setPeriodExpense] = useState(
    getTotalSum(budgetApi.expense)
  );
  const [accountTotal, setAccountTotal] = useState(
    getTotalSum(budgetApi.accounts)
  );

  return (
    <>
      <div className="stats__mini">
        <TransactionStats
          type="income"
          total={periodIncome}
          format={formatSum}
        />

        <AccountStats total={accountTotal} format={formatSum} />

        <TransactionStats
          type="expense"
          total={periodExpense}
          format={formatSum}
   />
      </div>
      <PeriodStats />
    </>
  );
};

export default Budget;
