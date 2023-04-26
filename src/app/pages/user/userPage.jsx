import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import UserLayout from "./userPageLayout"
import EditUser from "../../components/user/editUser"
import UserAccounts from "../../components/user/userAccounts"
import UserCategories from "../../components/user/userCategories"
import budgetAPI from "../../../api/budgetApi"

const UserPage = () => {
	const [accounts, setAccounts] = useState()
	const [categories, setCategories] = useState()

	budgetAPI.accounts.fetchAll().then((response) => setAccounts(response))
	budgetAPI.categories.fetchAll().then((response) => setCategories(response))

	const handleDelete = (data, id) => {
		if (data === accounts) {
			setAccounts((accounts) => {
				const result = [...accounts]
				const searchedIndex = result.findIndex((account) => account.id === id)
				result.splice(searchedIndex, 1)

				budgetAPI.accounts.deleteAcc(id)

				return result
			})
		} else if (data === categories) {
			setCategories((categories) => {
				const result = [...categories]
				const searchedIndex = result.findIndex((category) => category.id === id)
				result.splice(searchedIndex, 1)

				budgetAPI.categories.deleteCategory(id)

				return result
			})
		}
	}
	const handleAdd = (data, element) => {
		element.id = uuidv4()
		if (data === accounts) {
			budgetAPI.accounts.addAcc(element)
		} else if (data === categories) {
			budgetAPI.categories.addCategory(element)
		}
	}

	return (
		<Routes>
			<Route path="/" element={<UserLayout />}>
				<Route index element={<EditUser accounts={accounts} />} />
				<Route
					path="accounts"
					element={accounts ?
						<UserAccounts data={accounts} onDelete={handleDelete} onAdd={handleAdd} />
						: 'Загрузка...'}
				/>
				<Route path="categories"
					element={categories ?
						<UserCategories data={categories} onDelete={handleDelete} onAdd={handleAdd} />
						: 'Загрузка...'} />
			</Route>
		</Routes>
	)
}

export default UserPage

// onDelete props drilling!