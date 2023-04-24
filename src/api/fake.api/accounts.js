import { transactions } from "./transactions";
import { v4 as uuidv4 } from "uuid";

const accs = [
	{
		name: "Наличные",
		balance: 9000,
		id: uuidv4(),
	},
	{
		name: "Депозит",
		balance: 0,
		id: uuidv4(),
	},
	{
		name: "Крипта",
		balance: 80600,
		id: uuidv4(),
	},
	{
		name: "Сбербанк",
		balance: 7000,
		id: uuidv4(),
	},
];

const updateBalance = (accName) => {
	accs.find((account) => account.name === accName).balance = transactions
		.filter((transaction) => transaction.account === accName)
		.reduce((total, transaction) => (total += transaction.sum), 0);
};

const deleteAcc = (id) => {
	const searchedIndex = accs.findIndex((account) => account.id === id);
	accs.splice(searchedIndex, 1);
};

const addAcc = (account) => {
	accs.unshift(account);
};

const fetchAll = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(accs);
		}, 500);
	});

export default {
	addAcc,
	deleteAcc,
	updateBalance,
	fetchAll,
};
