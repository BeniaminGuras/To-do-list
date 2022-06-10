import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store.js';

const Card = props => {

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(toggleFavorite(props.id));
    }


    return(
        <li className={styles.card}>{props.title} <button onClick={onClick}><i className={clsx('fa fa-star-o', props.isFavorite && styles.active)}></i></button></li>
    )
}



export default Card; 