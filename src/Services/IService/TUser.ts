export interface IUser {
  email: string;
  name: string;
  photo: string;
  _id: string;
}

export type TAvatar = Pick<IUser, "name" | "photo">;
