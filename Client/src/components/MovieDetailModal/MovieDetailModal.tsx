import { Navigate, redirect, useNavigate, useParams } from "react-router-dom"
import { useUserContext } from "../../pages/Homepage/Homepage"
import styles from "./MovieDetailModal.module.css"
import { deleteMovie } from "../../services/request.service"
import { useAuth0 } from "@auth0/auth0-react"
import EditMovieModal from "../EditMovieModal/EditMovieModal"
import { useState } from "react"



type Props = {

}

const MovieDetailModal = () => {

    const { user } = useAuth0()

    const { setCurrentLoggedUser, currentUser } = useUserContext()

    const { name: nameParam } = useParams()

    const movieDetail = currentUser ? currentUser?.movies.find((movie) => {
        return movie.name === nameParam
    }) : undefined

    if (!movieDetail) return null

    const navigate = useNavigate()

    const { name, posterImage, score, genre } = movieDetail

    const handleDeleteMovie = () => {

        if (!movieDetail || !currentUser) {
            navigate("/homepage")
            return
        }

        deleteMovie(currentUser.id, movieDetail.id)
        navigate("/homepage")
        location.reload()
    }

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <main className={styles.modalWrapper}>
                <section className={styles.modalWrapper__wrapper}>
                    <article>
                        <div className={styles.emptyMovieCard}>
                            <img src={posterImage} alt={name} />
                        </div>
                    </article>
                    <article className={styles.form}>

                        <p className={styles.form__text}>Name</p>
                        <p className={styles.form__text__movie}>{name}</p>

                        <p className={styles.form__text}>Score</p>
                        <p className={styles.form__text__movie}>{score} out of 10</p>

                        <p className={styles.form__text}>Genre</p>
                        <p className={styles.form__text__movie}>Action</p>

                    </article>
                </section>
                <div className={styles.data}>
                    <section className={styles.btn} >
                        <button onClick={handleOpenModal} >Edit Movie</button>
                        <EditMovieModal isOpen={isModalOpen} onClose={handleCloseModal} />
                        <button onClick={handleDeleteMovie}>Delete Movie</button>
                    </section>
                </div>
            </main>

        </>
    )
}

export default MovieDetailModal