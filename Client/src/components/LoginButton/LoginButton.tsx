import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LoginButton.module.css"

type Props = {}

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0()

    return (

        <button className={styles.btn} onClick={() => loginWithRedirect()}>Log In</button>
    )
}

export default LoginButton