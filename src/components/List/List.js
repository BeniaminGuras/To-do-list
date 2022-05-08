import styles from './List.module.scss';
import Columns from '../Columns/Columns';

const List = () => {
    return(
      <div className='styles.list'>
        <header className={styles.header}>
          <h1 className={styles.title}>Things to do <span>soon!</span></h1>
          <p className={styles.description}>Interesting things I want to check out</p>
        </header>
        <section className={styles.columns}>
          <Columns title="Books" icon="book" />
          <Columns title="Movies" icon="gamepad" />
          <Columns title="Games" icon="film" />
        </section>
      </div>
  );
};

export default List;