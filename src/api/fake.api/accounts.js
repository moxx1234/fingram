import { transactions } from "./transactions";

const fetchAll = () => {
  new Promise((resolve) => window.setTimeout(() => resolve(accountsObject)));
};

const accounts = (inputData) => {
  const data = [];
  const res = {};
  inputData.forEach((transaction) => {
    if (transaction.type === "income") {
      res[transaction.account]
        ? (res[transaction.account] += transaction.sum)
        : (res[transaction.account] = transaction.sum);
    } else {
      res[transaction.account]
        ? (res[transaction.account] -= transaction.sum)
        : (res[transaction.account] = transaction.sum);
    }
  });
  const names = Object.keys(res);
  const values = Object.values(res);
  for (let i = 0; i < names.length; i++) {
    data[i] = { name: names[i], balance: values[i], id: i + 1 };
  }
  return data;
};

export const accountsObject = accounts(transactions);
export default fetchAll;
