import styles from "./Logout.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <li>
      <p
        className={styles.logout}
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </p>
    </li>
  );
};

export default Logout;
