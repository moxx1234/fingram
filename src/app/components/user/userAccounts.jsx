import { useState } from "react"
import DeleteButton from "../deleteButton"
import AddButton from "../addButton"
import TotalBalance from "./totalBalance"
import AddParameter from "./addParameter"
import Pagination from "../pagination"
import usePagination from "../../hooks/usePagination"
import CancelButton from "../cancelButton"


const UserAccounts = ({ data, onDelete, onAdd }) => {

	const [isAdding, setIsAdding] = useState(false)
	const pagination = usePagination(4, data, isAdding)

	const handleAdd = () => {
		setIsAdding(true)
		pagination.setCurrentPage(1)
	}
	const handleSubmit = (e) => {
		e.preventDefault()

		setIsAdding(false)

		pagination.setCurrentPage(1)

		const newAccount = { name: e.target[0].value, balance: 0 }
		onAdd(data, newAccount)
	}

	return (
		<div className="user__content">
			<div>
				<ul className="user__list">
					{isAdding && <AddParameter data={{ accounts: data }} onSubmit={handleSubmit} />}
					{pagination.renderedItems.map((account) => {
						return (
							<li
								key={account.id}
								className="user__list-item list-item"
							>
								<div className="list-item__left">{account.name}</div>
								<div className="list-item__middle">{account.balance}</div>
								<DeleteButton onDelete={() => onDelete(data, account.id)} />
							</li>
						)
					})}
				</ul>
				{pagination.totalPages > 1 ? <Pagination pagination={pagination} /> : ""}
			</div>
			<div className="user__bottom">
				{isAdding ? <CancelButton onCancel={() => setIsAdding(false)} /> : <AddButton onAdd={handleAdd} />}
				<TotalBalance />
			</div>
		</div>
	)
}

export default UserAccounts
