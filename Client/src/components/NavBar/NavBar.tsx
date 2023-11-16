import { NavLink } from 'react-router-dom'
import styles from "./NavBar.module.css"
import Logout from '../Logout/Logout'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <header>
            <ul className={styles.nav}>
                <li>
                    <NavLink to={"/Profile"}>Profile</NavLink>
                </li>
                <Logout />
            </ul>
        </header>
    )
}

export default NavBar