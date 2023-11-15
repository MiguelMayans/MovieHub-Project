
import { useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal/Modal"
import MovieContainer from "../../components/MovieContainer/MovieContainer"
import styles from "./Homepage.module.css"
import AddMovieModal from "../../components/AddMovieModal/AddMovieModal";



const Homepage: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <header>
                <div className={styles.btn_container}>
                    <button onClick={handleOpenModal} className={styles.button}>Add Movie</button>
                    <AddMovieModal isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>

            </header>

            <body>
                <MovieContainer />
            </body>
        </>
    )
}

export default Homepage