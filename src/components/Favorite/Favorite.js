import PageTitle from "../PageTitle/PageTitle";
import styles from './Favorite.module.scss';
import { getFavorites } from '../../redux/cardsReducer.js';
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorite = () => {

    const favorites = useSelector(state => getFavorites(state));
    console.log(favorites);
    
    return(
        <main>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {favorites.map(favorite => <Card key={favorite.id} title={favorite.title} isFavorite={favorite.isFavorite} id={favorite.id}/>)}
                </ul>
            </article>
        </main>
        );
} 

export default Favorite;