import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css"
import { useForm, SubmitHandler } from 'react-hook-form';
import LoginButton from "../../components/LoginButton/LoginButton";


type Props = {}

// type FormValues = {
//     user: string
//     password: string
// }

const Landing = (props: Props) => {

    // const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    // const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
    // console.log(errors);

    return (
        <>
            <header>
                <section>
                    <h1 className={styles.tittle}>IMMMMDb</h1>
                    <h2 className={styles.subtittle}>Internet Miguel Mayans Modest Movie Database</h2>
                </section>
            </header>

            <body>
                <LoginButton />
                <article className={styles.signin}>
                    <p>Don't have an account? <NavLink to={"/SignIn"}>Sign In</NavLink></p>
                </article>
            </body>

        </>
    )
}

export default Landing