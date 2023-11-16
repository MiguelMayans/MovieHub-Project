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