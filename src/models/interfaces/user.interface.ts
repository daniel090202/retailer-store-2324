interface IUser {
  email: string;
  gender: number;
  age: number;
  phone: string;
  address: string;
  position: number;
  userName: string;
  firstName: string;
  lastName: string;
  middleName: string;
  admin: boolean;
  active: boolean;
}

interface IUserConstructor {
  new (): void;
  new (
    email: string,
    gender: number,
    age: number,
    phone: string,
    address: string,
    position: number,
    userName: string,
    firstName: string,
    lastName: string,
    middleName: string,
    admin: boolean,
    active: boolean
  ): IUser;
}

export type { IUser, IUserConstructor };
