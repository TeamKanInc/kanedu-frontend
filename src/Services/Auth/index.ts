import { kanEduApi } from "../../api";
import { createUserDto, User } from "../../models";

interface LoginProps {
  email: string;
  password: string;
}

export const LoginApi = async ({ email, password }: LoginProps) => {
  const { data } = await kanEduApi.post("/signin", { email, password });
  localStorage.setItem("token", JSON.stringify(data.token));
  return data;
};

export const loginGoogleApi = async (token_id: string) => {
  const { data } = await kanEduApi.post("/login-google", token_id);
  const { token } = data;
  localStorage.setItem("token", JSON.stringify(token));
  return { data };
};

export const RegisterApi = async (user: createUserDto) => {
  const { data } = await kanEduApi.post("/signup", user);
  const { token } = data;
  localStorage.setItem("token", JSON.stringify(token));
  return token;
};

export const getCurrentUserApi = async (uuid: string) => {
  const token = JSON.parse(localStorage.getItem("token") || "");

  const { data } = await kanEduApi.get(`/users/info/${uuid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data as User;
};

export const getUserByTokenApi = async () => {
  console.log("ENTRO A GET");
  const token = JSON.parse(localStorage.getItem("token") || "");
  const { data } = await kanEduApi.get(`/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data as User;
};
