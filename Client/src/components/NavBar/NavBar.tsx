import { NavLink } from 'react-router-dom'
import styles from "./NavBar.module.css"

type Props = {}

const NavBar = (props: Props) => {
    return (
        <header>
            <ul className={styles.nav}>
                <li>
                    <NavLink to={"/Profile"}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to={"/"}>Log Out</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default NavBar