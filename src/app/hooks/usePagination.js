import { useState } from "react";

const usePagination = (itemsOnPage, data, extraItem = false) => {
	const [currentPage, setCurrentPage] = useState(1)

	const itemsCount = extraItem ? itemsOnPage - 1 : itemsOnPage
	const firstIndex = currentPage * itemsCount - itemsCount
	const lastIndex = currentPage * itemsCount
	const renderedItems = data.slice(firstIndex, lastIndex)
	const totalPages = Math.ceil(data.length / itemsCount)
	return {
		currentPage,
		renderedItems,
		setCurrentPage: function (pageNum) {
			setCurrentPage(pageNum)
		},
		totalPages,
	};
}

export default usePagination;