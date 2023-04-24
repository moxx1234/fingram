import ConfirmButton from "../confirmButton";

const AddAcc = ({ onSubmit }) => {
	return (
		<form className="user__accounts-item accounts-item" onSubmit={onSubmit}>
			<input className="accounts-item__label" placeholder="Имя счета" />
			<div className="accounts-item__sum">0</div>
			<ConfirmButton />
		</form>
	);
};

export default AddAcc;
