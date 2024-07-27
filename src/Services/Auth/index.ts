import { kanEduApi } from "../../api";
import { createUserDto } from "../../models";

export const LoginApi = async ({ email, password }: {email: string; password: string; }) => {
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
