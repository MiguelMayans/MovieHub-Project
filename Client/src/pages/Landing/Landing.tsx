import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css"
import { useForm, SubmitHandler } from 'react-hook-form';
import SingIn from "../SignIn/SignIn";


type Props = {}

type FormValues = {
    user: string
    password: string
}

const Landing = (props: Props) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
    console.log(errors);


    return (
        <>
            <header>
                <section>
                    <h1 className={styles.tittle}>IMMMMDb</h1>
                    <h2 className={styles.subtittle}>Internet Miguel Mayans Modest Movie Database</h2>
                </section>
            </header>
            <body>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <p className={styles.form__name}>User</p>
                    <input type="text" placeholder="Example123" {...register("user", { required: true, max: 20, min: 4 })} />
                    <p className={styles.form__name}>Password</p>
                    <input type="password" placeholder="********" {...register("password", { required: true, max: 30, min: 6 })} />

                    <input type="submit" value="Log In" />
                </form>
                <article className={styles.signin}>
                    <p>Don't have an account? <NavLink to={"/SignIn"}>Sign In</NavLink></p>
                </article>
            </body>

        </>
    )
}

export default Landing