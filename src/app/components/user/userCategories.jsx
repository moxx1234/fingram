import { useState } from "react"
import Pagination from "../pagination"
import usePagination from "../../hooks/usePagination"
import DeleteButton from "../deleteButton"
import TotalBalance from "./totalBalance"
import AddButton from "../addButton"
import CancelButton from "../cancelButton"
import AddParameter from "./addParameter"
import TypeSetter from "../typeSetter"

const UserCategories = ({ data, onDelete, onAdd }) => {
	const [isAdding, setIsAdding] = useState(false)
	const [currentType, setCurrentType] = useState('income')

	const filteredData = data.filter(category => category.type === currentType)

	const pagination = usePagination(3, filteredData, isAdding)

	const handleAdd = () => {
		setIsAdding(true)
		pagination.setCurrentPage(1)
	}
	const handleSubmit = (e) => {
		e.preventDefault()

		setIsAdding(false)

		pagination.setCurrentPage(1)

		const newCategory = { category: e.target[0].value, subcategory: e.target[1].value ? e.target[1].value : null, type: currentType }
		onAdd(data, newCategory)
	}
	const handleTypeChange = (type) => {
		setIsAdding(false)
		pagination.setCurrentPage(1)
		setCurrentType(() => type)
	}


	return (
		<div className='user__content'>
			<TypeSetter currentType={currentType} onTypeChange={handleTypeChange} parent={'user'} />
			<ul className="user__list">
				{isAdding && <AddParameter data={{ categories: data }} onSubmit={handleSubmit} />}
				{pagination.renderedItems.map((category) => {
					return (
						<li
							key={category.id}
							className="user__list-item list-item"
						>
							<div className="list-item__left">{category.category}</div>
							<div className="list-item__middle list-item__middle_gray">{category.subcategory ? category.subcategory : '-/-'}</div>
							<DeleteButton onDelete={() => onDelete(data, category.id)} />
						</li>
					)
				})}
			</ul>
			{pagination.totalPages > 1 ? <Pagination pagination={pagination} /> : ""}
			<div className="user__bottom">
				{isAdding ? <CancelButton onCancel={() => setIsAdding(false)} /> : <AddButton onAdd={handleAdd} />}
				<TotalBalance />
			</div>
		</div>
	)
}

export default UserCategories
