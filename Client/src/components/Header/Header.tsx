import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <header className={styles.navbar}>
        <p className={styles.welcome}>Welcome back, {user?.given_name}</p>

        <NavBar />
      </header>
    )
  );
};

export default Header;
