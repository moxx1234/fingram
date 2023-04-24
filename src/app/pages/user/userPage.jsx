import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import UserLayout from "./userPageLayout";
import EditUser from "../../components/user/editUser";
import UserAccounts from "../../components/user/userAccounts";
import UserCategories from "../../components/user/userCategories";
import budgetAPI from "../../../api/budgetApi";

const UserPage = () => {
	const [accounts, setAccounts] = useState();

	budgetAPI.accounts.fetchAll().then((response) => setAccounts(response));

	const handleDelete = (accId) => {
		setAccounts((accounts) => {
			const result = [...accounts];
			const searchedIndex = result.findIndex((account) => account.id === accId);
			result.splice(searchedIndex, 1);

			budgetAPI.accounts.deleteAcc(accId);

			return result;
		});
	};
	const handleAdd = (accName) => {
		const newAccount = { name: accName, balance: 0, id: uuidv4() }
		budgetAPI.accounts.addAcc(newAccount)
	}


	return (
		<Routes>
			<Route path="/" element={<UserLayout />}>
				<Route index element={<EditUser accounts={accounts} />} />
				<Route
					path="accounts"
					element={accounts ? <UserAccounts data={accounts} onDelete={handleDelete} onAdd={handleAdd} /> : 'Загрузка...'}
				/>
				<Route path="categories" element={<UserCategories />} />
			</Route>
		</Routes>
	);
};

export default UserPage;
