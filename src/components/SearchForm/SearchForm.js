import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/store';

const SearchForm = () => {

    const [filtr, setFiltr] = useState('');
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(changeFilter(''));
        // eslint-disable-next-line
      }, []);
   

    const clickHolder = event => {
        event.preventDefault();
        dispatch(changeFilter(filtr));
    };
    
    return (
        <form className={styles.searchForm} onSubmit={clickHolder}>
            <TextInput placeholder="Search..." onChange={e => {setFiltr(e.target.value)}} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;