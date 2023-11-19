import { NavLink } from "react-router-dom"
import styles from "./Profile.module.css"
import { useAuth0 } from "@auth0/auth0-react"

type Props = {}

const Profile = (props: Props) => {

    const { user, isAuthenticated, isLoading } = useAuth0()

    console.log(user)
    return (
        isAuthenticated && (

            <main>
                <section className={styles.profile}>
                    <h2 className={styles.tittle}>My Profile</h2>
                    <img className={styles.img} src={user?.picture} alt={user?.picture} />
                    <article className={styles.data__wrapper}>
                        <section className={styles.data__tittle}>
                            <h4>User</h4>
                            <h4>Email</h4>
                            <h4>Password</h4>
                        </section>
                        <section className={styles.data__data}>
                            <h4>{user?.name}</h4>
                            <h4>{user?.email}</h4>
                            <h4>*********</h4>
                        </section>
                    </article>
                    <section className={styles.data__btn}>
                        <NavLink to={"/homepage"}><button>Edit Profile</button></NavLink>
                        <NavLink to={"/homepage"}><button>Go Back</button></NavLink>
                    </section>
                </section>

            </main>
        )
    )
}

export default Profile