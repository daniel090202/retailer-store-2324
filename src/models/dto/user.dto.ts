import { IUser } from "../interfaces";

class User implements IUser {
  public email: string;
  public gender: number;
  public age: number;
  public phone: string;
  public address: string;
  public position: number;
  public userName: string;
  public firstName: string;
  public lastName: string;
  public middleName: string;

  public admin: boolean;
  public active: boolean;

  public createdAt: string;
  public updatedAt: string;

  constructor();
  constructor(
    email?: string,
    gender?: number,
    age?: number,
    phone?: string,
    address?: string,
    position?: number,
    userName?: string,
    firstName?: string,
    lastName?: string,
    middleName?: string,
    admin?: boolean,
    active?: boolean,
    createdAt?: string,
    updatedAt?: string
  ) {
    this.email = email ?? "";
    this.gender = gender ?? 0;
    this.age = age ?? 0;
    this.phone = phone ?? "";
    this.address = address ?? "";
    this.position = position ?? 0;
    this.userName = userName ?? "";
    this.firstName = firstName ?? "";
    this.lastName = lastName ?? "";
    this.middleName = middleName ?? "";
    this.admin = admin ?? false;
    this.active = active ?? false;
    this.createdAt = createdAt ?? "";
    this.updatedAt = updatedAt ?? "";
  }
}

export { User };
