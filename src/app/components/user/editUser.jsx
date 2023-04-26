import React from "react";
import TotalBalance from "./totalBalance";

const EditUser = ({ accounts }) => {
	return (
		<>
			<form className="user__form user-form">
				<div className="user-form__label">
					<label htmlFor="nameInput">Имя пользователя:</label>
					<p>username</p>
				</div>
				<div className="user-form__input-row">
					<input className="text-input" type="text" id="nameInput" />
					<button>Изменить</button>
				</div>

				<div className="user-form__label">
					<label htmlFor="mailInput">Email:</label>
					<p>usermale</p>
				</div>
				<div className="user-form__input-row">
					<input className="text-input" type="email" id="mailInput" />
					<button>Изменить</button>
				</div>
			</form>

			<div className="user__bottom">
				<TotalBalance data={accounts} />
			</div>
		</>
	);
};

export default EditUser;
