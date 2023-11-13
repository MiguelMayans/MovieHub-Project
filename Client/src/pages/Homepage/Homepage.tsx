import MovieContainer from "../../components/MovieContainer/MovieContainer"
import styles from "./Homepage.module.css"

type Props = {}

const Homepage = (props: Props) => {
    return (
        <>
            <header>
                <button className={styles.button}>Add Movie</button>
            </header>

            <body>
                <MovieContainer />
            </body>
        </>
    )
}

export default Homepage