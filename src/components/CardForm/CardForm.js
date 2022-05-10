import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from "../CardForm/CardForm.module.scss";

const CardForm = props => {
    const [cardTitle, setCardTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: cardTitle }, props.columnId);
        setCardTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput type="text" value={cardTitle} onChange={e => setCardTitle(e.target.value)} />
            <Button>Add Column</Button>
        </form>
	);
};

export default CardForm;