import ConfirmButton from "../confirmButton";

const AddParameter = ({ data, onSubmit }) => {
	const dataType = Object.keys(data)[0]

	return (
		<form className="user__list-item list-item accounts-input" onSubmit={onSubmit}>
			<input required className="text-input list-input__input-field" placeholder={dataType === 'categories' ? 'Категория' : 'Имя Аккаунта'} />
			{dataType === 'categories' ?
				<input className="text-input list-input__input-field" placeholder="Подкатегория" />
				: <div className="list-item__middle">0</div>}
			<ConfirmButton />
		</form>
	);
};

export default AddParameter;