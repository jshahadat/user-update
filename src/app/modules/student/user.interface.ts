import { Model } from 'mongoose';

export type IUserFullName = {
  firstName: string;
  lastName: string;
};

export type IAddress = {
  street: string;
  city: string;
  country: string;
};

export type IOrders = {
  productName: string;
  price: number;
  quantity: number;
};

export type IUser = {
  userId: number;
  username: string;
  password: string;
  fullName: IUserFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: IAddress;
  orders?: IOrders[] | string;
};

export type UserModel = Model<IUser> & {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<IUser | null>;
  // eslint-disable-next-line no-unused-vars
  isOrderExists(id: string): Promise<IUser | null>;
};
//
