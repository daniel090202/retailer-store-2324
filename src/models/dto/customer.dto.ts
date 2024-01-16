import { ICustomer } from "../interfaces";

class Customer implements ICustomer {
  public email: string;
  public gender: number;
  public age: number;
  public phone: string;
  public address: string;
  public customerName: string;
  public accountLevel: number;
  public active: boolean = false;
  public block: boolean = false;
  public verified: boolean = false;

  constructor(
    email: string,
    gender: number,
    age: number,
    phone: string,
    address: string,
    customerName: string,
    accountLevel: number,
    active: boolean = false,
    block: boolean = false,
    verified: boolean = false
  ) {
    this.email = email;
    this.gender = gender;
    this.age = age;
    this.phone = phone;
    this.address = address;
    this.customerName = customerName;
    this.accountLevel = accountLevel;
    this.active = active;
    this.block = block;
    this.verified = verified;
  }
}

export { Customer };
