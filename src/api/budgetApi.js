const budgetApi = {
  income: [
    { category: "Зарплата", subcategory: null, sum: 60000, id: 1 },
    { category: "Инвестиции", subcategory: "Недвижимость", sum: 80000, id: 2 },
    { category: "Инвестиции", subcategory: "Вино", sum: 40000, id: 3 },
  ],
  expense: [
    { category: "Зарплата", subcategory: null, sum: 60000, id: 1 },
    { category: "Инвестиции", subcategory: "Недвижимость", sum: 80000, id: 2 },
    { category: "Инвестиции", subcategory: "Вино", sum: 50000, id: 3 },
  ],
  accounts: [
    { name: "Наличные", balance: 90000, id: 1 },
    { name: "Депозит", balance: 50000, id: 2 },
    { name: "Metamask", balance: 7000, id: 3 },
  ],
};

// const fetchAll = () =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(JSON.parse(budgetApi));
//     }, 2000);
//   });

export default budgetApi;
