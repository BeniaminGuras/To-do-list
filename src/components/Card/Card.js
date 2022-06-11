import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite, deleteCard } from '../../redux/cardsReducer.js';

const Card = props => {

    const dispatch = useDispatch();

    const onClickFavorite = () => {
        dispatch(toggleFavorite(props.id));
    }

    const onClickDelete = () => {
        dispatch(deleteCard(props.id));
    }


    return(
        <li className={styles.card}>{props.title} 
            <div className="card-icons">
                <button onClick={onClickFavorite}><i className={clsx('fa fa-star-o', props.isFavorite && styles.active)}></i></button>
                <button onClick={onClickDelete}><i className={clsx('fa fa-trash')}></i></button>
            </div>
        </li>
    )
}



export default Card; 