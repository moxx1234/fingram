const TypeSetter = ({ currentType, onTypeChange, parent = null }) => {

	const setClass = (parent) => {
		switch (parent) {
			case ('user'):
				return 'user__type-setter'
			case ('header'):
				return 'period-stats__type-setter'
			case ('transaction'):
				return 'transaction__type-setter'
		}
	}

	return (
		<div className={`type-setter ${setClass(parent)}`}>
			<button
				onClick={() => onTypeChange("income")}
				className={`${currentType === "income" ? " active" : ""}`}
			>
				Доходы
			</button>
			<button
				onClick={() => onTypeChange("expense")}
				className={`${currentType === "expense" ? " active" : ""}`}
			>
				Расходы
			</button>
		</div>);
}

export default TypeSetter;