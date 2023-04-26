import { transactions } from "./transactions";
import { v4 as uuidv4 } from "uuid";

const accounts = [
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
	accounts.find((account) => account.name === accName).balance = transactions
		.filter((transaction) => transaction.account === accName)
		.reduce((total, transaction) => (total += transaction.sum), 0);
};

const deleteAcc = (id) => {
	const searchedIndex = accounts.findIndex((account) => account.id === id);
	accounts.splice(searchedIndex, 1);
};

const addAcc = (element) => {
	let doesExist = false;

	const { id, ...newInfo } = element;
	const newContent = { ...newInfo };

	accounts.forEach((account) => {
		const { id, ...oldInfo } = account;
		const oldContent = { ...oldInfo };
		if (JSON.stringify(oldContent) === JSON.stringify(newContent)) {
			doesExist = true;
		}
	});

	if (!doesExist) {
		accounts.unshift(element);
	}
};

const getTotalBalance = () => {
	return accounts.reduce((total, account) => total += account.balance, 0)
}

const fetchAll = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(accounts);
		}, 500);
	});

export default {
	addAcc,
	deleteAcc,
	updateBalance,
	fetchAll,
	getTotalBalance,
};
