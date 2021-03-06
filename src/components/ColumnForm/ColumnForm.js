import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from'./../Button/Button.js';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsReducer.js';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    
    const listId = props.listId;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({title, icon, listId}));
        setTitle('');
        setIcon('');
     };

    const dispatch = useDispatch();
    
	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.desc}>Title: </span>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.desc}>Icon: </span>
            <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add Column</Button>
        </form>
	);
};

export default ColumnForm;