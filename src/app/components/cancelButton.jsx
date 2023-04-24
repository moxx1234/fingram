const CancelButton = ({ onCancel }) => {
	return (<button onClick={onCancel} className="cancel">
		Отменить
	</button>);
}

export default CancelButton;