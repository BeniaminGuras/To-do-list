import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => 

<div className={styles.navBar}>
    <Container>
        <div className={styles.navBarElements}>
            <div className={styles.iconSection}>
                <a href="/"><i className="fa fa-tasks"></i></a>
            </div>
            <div className={styles.navMenu}>
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/Favorite">Favorite</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/About">About</NavLink></li>
            </ul>
            </div>
        </div>
    </Container>
</div>

export default NavBar;