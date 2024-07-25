import { kanEduApi } from "../../api";

interface LoginProps {
    email: string;
    password: string;
}

export const LoginApi = async ({email, password}:LoginProps) => {
    const {data} = await kanEduApi.post("/signin", {email, password});
    const {token} = data;
    localStorage.setItem('token', JSON.stringify(token));

    return data;
}