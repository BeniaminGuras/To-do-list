import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from './ListForm.module.scss';
import { useDispatch } from "react-redux";
import { addList } from "../../redux/store";

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description}));
        setTitle('');
        setDescription('');
    }


    return(
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.desc}>Title: </span>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.desc}>Icon: </span>
            <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add Column</Button>
        </form>
    )
}

export default ListForm;