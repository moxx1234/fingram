import { categories } from "./fake.api/categories";
import { transactions } from "./fake.api/transactions";
import { accountsObject } from "./fake.api/accounts";

const budgetAPI = {
  categories: categories,
  transactions: transactions,
  accounts: accountsObject,
};

if (!localStorage.getItem("budgetAPI")) {
  localStorage.setItem("budgetAPI", JSON.stringify(budgetAPI));
}

export default budgetAPI;
