import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css"
import LoginButton from "../../components/LoginButton/LoginButton";


const Landing = () => {

    return (
        <>
            <header>
                <section>
                    <h1 className={styles.tittle}>IMMMMDb</h1>
                    <h2 className={styles.subtittle}>Internet Miguel Mayans Modest Movie Database</h2>
                </section>
            </header>

            <main>
                <LoginButton />
                <article className={styles.signin}>
                    <p>Don't have an account? <NavLink to={"/SignIn"}>Sign In</NavLink></p>
                </article>
            </main>

        </>
    )
}

export default Landing