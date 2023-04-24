const Pagination = ({ pagination }) => {
	const totalPagesArray = []
	for (let i = 0; i < pagination.totalPages; i++) {
		totalPagesArray.push(i + 1)
	}

	return <nav className="user__pagination pagination">
		{totalPagesArray.map(number => (
			<button key={number} onClick={() => pagination.setCurrentPage(number)} className={pagination.currentPage === number ? 'active' : ''}>{number}</button>
		))}
	</nav>
};

export default Pagination;
