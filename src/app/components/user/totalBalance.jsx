import budgetAPI from "../../../api/budgetApi";

const TotalBalance = () => {
	const total = budgetAPI.accounts.getTotalBalance()

	return (
		<p className="user__total">
			Баланс:
			<span className={total >= 0 ? "positive" : "negative"}>
				{` ${budgetAPI.format(total)}`}
			</span>
		</p>
	);
};

export default TotalBalance;
