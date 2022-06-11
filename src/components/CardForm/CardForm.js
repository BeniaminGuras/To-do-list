import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from "../CardForm/CardForm.module.scss";
import { useDispatch } from 'react-redux';
import { addCard } from "../../redux/cardsReducer.js";

const CardForm = props => {
    const [cardTitle, setCardTitle] = useState('');
    const dispatch = useDispatch();
    const columnId = props.columnId;
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({title: cardTitle, columnId}));
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