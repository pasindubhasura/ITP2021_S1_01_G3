export const setUserSession = (id,token) => {
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("token", token)
}

export const getUser = () => {
    return sessionStorage.getItem("id") || null;
}

export const getToken = () => {
    return sessionStorage.getItem("token") || null;
}

export const removeUser = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("token")
}