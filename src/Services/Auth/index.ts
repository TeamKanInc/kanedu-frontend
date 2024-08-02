import { kanEduApi } from "../../api";
import { createUserDto, User } from "../../models";

export const LoginApi = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data } = await kanEduApi.post("/signin", { email, password });
  const { token } = data;
  localStorage.setItem("token", JSON.stringify(token));
  return data;
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
  const token = JSON.parse(localStorage.getItem("token") || "");
  const { data } = await kanEduApi.get(`/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data as User;
};
