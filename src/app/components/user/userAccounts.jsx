import { useState } from "react";
import DeleteButton from "../deleteButton";
import AddButton from "../addButton";
import TotalBalance from "./totalBalance";
import AddAcc from "./addAcc";
import Pagination from "../pagination";
import usePagination from "../../hooks/usePagination";
import CancelButton from "../cancelButton";

const UserAccounts = ({ data, onDelete, onAdd }) => {

	const [isAdding, setIsAdding] = useState(false)
	const pagination = usePagination(3, data, isAdding)

	const handleAdd = () => {
		setIsAdding(true);
		pagination.setCurrentPage(1)
	};
	const handleSubmit = (e) => {
		e.preventDefault()
		setIsAdding(false)
		onAdd(e.target[0].value)
	}

	return (
		<>
			<ul className="user__accounts">
				{isAdding && <AddAcc onSubmit={handleSubmit} />}
				{pagination.renderedItems.map((account) => {
					return (
						<li
							key={account.id}
							className="user__accounts-item accounts-item"
						>
							<div className="accounts-item__label">{account.name}</div>
							<div className="accounts-item__sum">{account.balance}</div>
							<DeleteButton onDelete={() => onDelete(account.id)} />
						</li>
					);
				})}
			</ul>
			{pagination.totalPages > 1 ? <Pagination pagination={pagination} /> : ""}
			<div className="user__bottom">
				{isAdding ? <CancelButton onCancel={() => setIsAdding(false)} /> : <AddButton onAdd={handleAdd} />}
				<TotalBalance data={data} />
			</div>
		</>
	);
};

export default UserAccounts;
