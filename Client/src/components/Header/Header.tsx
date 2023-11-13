import NavBar from "../NavBar/NavBar"
import styles from "./Header.module.css"

type Props = {}

const Header = (props: Props) => {
    return (
        <header className={styles.navbar}>
            <p className={styles.welcome}>Welcome back, User</p>
            <h2>IMMMDB</h2>
            <NavBar />
        </header>
    )
}

export default Header