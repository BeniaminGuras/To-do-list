import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => 

<div className={styles.navBar}>
    <Container>
        <div className={styles.navBarElements}>
            <div className={styles.iconSection}>
                <a href="/"><i className="fa fa-tasks"></i></a>
            </div>
            <div className={styles.navMenu}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/favorite">Favorites</a></li>
                </ul>
            </div>
        </div>
    </Container>
</div>

export default NavBar;