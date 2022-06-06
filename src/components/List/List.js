import styles from './List.module.scss';
import Column from './../Columns/Columns';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById, getColumnsByList } from '../../redux/store';
import PageTitle from '../PageTitle/PageTitle';
import { useParams, Navigate } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';


const List = () => {

  let { listId } = useParams();

  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));

  if(!listData) return <Navigate to="/" />
	return (
    <div className={styles.list}>
      <header className={styles.header}>
        <PageTitle>{listData.title}</PageTitle>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column}  />
        )}
      </section>
      <ColumnForm listId={listId}/>
    </div>
  );
};

export default List;