import { User } from "@auth0/auth0-react";

export const publicRequest = async () => {
    const { VITE_API_URL } = import.meta.env
    const response = await fetch(`${VITE_API_URL}/user`)
    const data = await response.json()
    console.log("public request:", data)
}

export const protectedRequest = async (getToken: any) => {

    const { VITE_API_URL } = import.meta.env
    const token = getToken()
    const response = await fetch(`${VITE_API_URL}/dondesea`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await response.json()
    console.log("protected data:", data)

}


export const getAllUsers = async () => {

    // const token = await getToken()

    const response = await fetch("http://localhost:8080/user", {
        method: "GET",
        headers: {

            "Content-Type": "application/json"
        }
    })

    const allUsers = await response.json()
    return allUsers

}

export const getUserByEmail = async (email: string, getToken: any) => {

    const token = await getToken();

    const response = await fetch(`http://localhost:8080/user/${email}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });

    const userByEmail = await response.json();
    return userByEmail;
}

export const createNewUser = async (userObject: {}) => {

    try {
        const response = await fetch(`http://localhost:8080/user/`, {

            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(userObject)
        });

        const dataFetched = await response.json();
        return dataFetched;
    }
    catch (error) {
        console.error('Error creating user:', error);
        return null;
    }

}


export const createNewMovie = async (userId: number, data: any) => {

    try {
        const response = await fetch(`http://localhost:8080/movies/${userId}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"

            },
            body: JSON.stringify({
                name: data.name,
                score: data.score,
                genre: data.genre,
                posterImage: data.posterImage
            })
        })
        const dataFetched = await response.json();
        return dataFetched;
    } catch (error) {
        console.error('Error creating movie:', error);
        return null;
    }
}

export const deleteMovie = async (userId: number, movieId: number) => {

    const response = await fetch(`http://localhost:8080/movies/${userId}/${movieId}`,
        {
            method: "DELETE",

        })

    const dataFetched = await response.json()
    return dataFetched

}


export const updateMovie = async (userId: number, movieId: number, data: any) => {

    try {
        const response = await fetch(`http://localhost:8080/movies/${userId}/${movieId}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json; charset=UTF-8"

            },
            body: JSON.stringify({
                name: data.name,
                score: data.score,
                genre: data.genre,
                posterImage: data.posterImage
            })
        })
        const dataFetched = await response.json();
        return dataFetched;
    } catch (error) {
        console.error('Error creating movie:', error);
        return null;
    }
}
// Cuando onClick => protectedRequest(GetAcessTokenSilenty) que nos lo importtamos de Auth0