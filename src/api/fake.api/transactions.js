import { v4 as uuidv4 } from "uuid";
import accounts from "./accounts";

export const transactions = [
  {
    category: "Зарплата",
    subcategory: null,
    type: "income",
    sum: 90000,
    account: "Наличныееееееее",
    id: uuidv4(),
  },
  {
    category: "Питание",
    subcategory: "Продукты",
    type: "expense",
    sum: 20000,
    account: "Наличные",
    id: uuidv4(),
  },
  {
    category: "Питание",
    subcategory: "Кафе / Рестораны",
    type: "expense",
    sum: 5000,
    account: "Наличные",
    id: uuidv4(),
  },
  {
    category: "Транспорт",
    subcategory: "Авто",
    type: "expense",
    sum: 300,
    account: "Наличные",
    id: uuidv4(),
  },
  {
    category: "Транспорт",
    subcategory: "Такси",
    type: "expense",
    sum: 1000,
    account: "Наличные",
    id: uuidv4(),
  },
  {
    category: "Транспорт",
    subcategory: "Такси",
    type: "expense",
    sum: 1500,
    account: "Наличные",
    id: uuidv4(),
  },
  {
    category: "Инвестиции",
    subcategory: "Недвижимость",
    type: "income",
    sum: 70000,
    account: "Депозит",
    id: uuidv4(),
  },
];

const addTransaction = (
  type,
  account,
  sum,
  category,
  subcategory = null,
  comment = null
) => {
  const newTransaction = {
    category: category,
    subcategory: subcategory,
    type: type,
    sum: sum,
    account: account,
    id: uuidv4(),
    comment: comment,
  };

  transactions.push(newTransaction);

  accounts.updateBalance(account);
};

const deleteTransaction = (id) => {
  const searchedIndex = transactions.findIndex(
    (transaction) => transaction.id === id
  );

  transactions.splice(searchedIndex, 1);
};

const getCategoryTotal = (category, /*period,*/ subcategory = null) => {
  const categoryTransactions = transactions.filter(
    (transaction) => transaction.category === category
  );
  if (!subcategory) {
    return categoryTransactions.reduce(
      (total, transaction) => (total += transaction.sum),
      0
    );
  } else {
    return categoryTransactions
      .filter((transaction) => transaction.subcategory === subcategory)
      .reduce((total, transaction) => (total += transaction.sum), 0);
  }
};

const fetchAll = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactions);
    }, 1500);
  });

export default {
  addTransaction,
  deleteTransaction,
  getCategoryTotal,
  fetchAll,
};
