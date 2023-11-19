
import { useContext, useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal/Modal"
import MovieContainer from "../../components/MovieContainer/MovieContainer"
import styles from "./Homepage.module.css"
import AddMovieModal from "../../components/AddMovieModal/AddMovieModal";
import { useAuth0 } from "@auth0/auth0-react"
import { userContext } from "../../context/userContext";
import { getAllUsers, createNewUser } from "../../services/request.service";

export function useUserContext() {
    return useContext(userContext)
}

const Homepage: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    const { setCurrentLoggedUser, currentUser } = useUserContext()
    const { isAuthenticated, user, getAccessTokenSilently, isLoading } = useAuth0()

    const findLoggedUser = async () => {
        if (user) {
            const allUsers = await getAllUsers();
            const foundUser = await allUsers.find((foundUser: any) => foundUser.email === user.email)

            if (!foundUser) {
                const newUser = {
                    name: user.name,
                    email: user.email,

                };
                const userCreated = await createNewUser(newUser)
                setCurrentLoggedUser(userCreated)
            } else {
                setCurrentLoggedUser(foundUser)
            }
        }

    }

    useEffect(() => {

        findLoggedUser();

    }, [isAuthenticated])

    if (isLoading) {
        return <div>Loading...</div>;

    }


    return (
        <>

            <section className={styles.btn_container}>
                <button onClick={handleOpenModal} className={styles.button}>Add Movie</button>
                <AddMovieModal isOpen={isModalOpen} onClose={handleCloseModal} />
            </section>


            <main>
                <MovieContainer />
            </main>
        </>
    )
}

export default Homepage