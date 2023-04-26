import categories from "./fake.api/categories";
import transactions from "./fake.api/transactions";
import accounts from "./fake.api/accounts";

const budgetAPI = {
	categories: categories,
	transactions: transactions,
	accounts: accounts,
	format: function (sum) {
		if (sum.toString().length <= 3) {
			return `₽ ${sum}`;
		} else {
			return `₽ ${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
		}
	},
};

const formatSum = (sum) => {
	if (sum.toString().length <= 3) {
		return `₽ ${sum}`;
	} else {
		return `₽ ${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
	}
};

export default budgetAPI;
