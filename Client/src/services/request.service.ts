const { VITE_API_URL } = import.meta.env

export const getAllUsers = async () => {

    const response = await fetch(`${VITE_API_URL}/user`, {
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

    const response = await fetch(`${VITE_API_URL}/user/${email}`, {
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
        const response = await fetch(`${VITE_API_URL}/user`, {

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

export const createNewMovie = async (userId: number, data: any, getToken: any) => {

    const token = await getToken()

    try {
        const response = await fetch(`${VITE_API_URL}/movies/${userId}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: `Bearer ${token}`

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

export const deleteMovie = async (userId: number, movieId: number, getToken: any) => {

    const token = await getToken()

    const response = await fetch(`${VITE_API_URL}/movies/${userId}/${movieId}`,
        {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`
            }

        })

    const dataFetched = await response.json()
    return dataFetched

}


export const updateMovie = async (userId: number, movieId: number, data: any, getToken: any) => {

    const token = await getToken()

    try {
        const response = await fetch(`${VITE_API_URL}/movies/${userId}/${movieId}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: `Bearer ${token}`

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
