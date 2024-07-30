import iglogo from './threads-logo.png';
import styles from './header.module.css';
import home from './home.png';
import human from './human.png';
import like from './like.png';
import search from './search.png';
import post from './post.png';

export const Header = () => {
    return (
        <header>
    <nav className={styles.container}>
        <div className={styles.nav}>

        <img src={iglogo} alt="logo"></img>

            <ul>
                <button className={styles.btn} ><img src={home} alt="home"></img></button>
                <button className={styles.btn}><img src={search} alt="home"></img></button>
                <button className={styles.btn}><img src={post} alt="home"></img></button>
                <button className={styles.btn}><img src={like} alt="home"></img></button>
                <button className={styles.btn}><img src={human} alt="home"></img></button>
            </ul>

            <div className={styles.login}>
                Log in
            </div>
        </div>
    </nav>
    </header>
    )
}