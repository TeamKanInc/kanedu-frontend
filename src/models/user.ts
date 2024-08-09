export interface User {
  uuid: string;
  name: string;
  phone?: string;
  password: string;
  rol?: string;
  photo?: string;
  university?: string;
  code_university?: string;
  city?: string;
  address?: string;
  email: string;
}

export type createUserDto = Omit<User, "uuid">;
export type updateUserDto = Partial<User>;
