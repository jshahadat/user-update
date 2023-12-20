import config from '../../config';
import { IOrders, IUser } from './user.interface';
import User from './user.model';
import bcrypt from 'bcrypt';

const createUserService = async (userData: IUser) => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { orders, ...userDataWithoutOrders } = userData;
  return await User.create(userDataWithoutOrders);
};

const getAllUsersService = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserService = async (userId: string) => {
  if (!(await User.isUserExists(userId))) {
    return new Error('User not found!');
  }
  const result = await User.find({ userId: Number(userId) });
  return result;
};

const updateUserService = async (userData: IUser) => {
  try {
    if (!(await User.isUserExists(String(userData.userId)))) {
      throw new Error('User not found!');
    }

    userData.password = await bcrypt.hash(
      userData.password,
      Number(config.bcrypt_salt_rounds),
    );

    const result = await User.findOneAndUpdate(
      {
        userId: Number(userData.userId),
      },
      { ...userData },
      {
        new: true,
      },
    );
    return result;
  } catch (error) {
    throw new Error('User not found!');
  }
};

const createUserOrderService = async (userId: string, order: IOrders) => {
  try {
    if (!(await User.isUserExists(String(userId)))) {
      throw new Error('User not found!');
    }

    const orderex = await User.isOrderExists(userId);
    if (!orderex) {
      await User.aggregate([
        {
          $match: { userId: Number(userId) },
        },
        {
          $addFields: { orders: [order] },
        },
        {
          $merge: { into: 'users' },
        },
      ]);
    } else {
      await User.updateOne(
        {
          userId: Number(userId),
        },
        {
          $push: { orders: order },
        },
      );
    }
  } catch (error) {
    throw new Error('User not found!');
  }
};

const getSungleUserOrderService = async (userId: string) => {
  try {
    if (!(await User.isUserExists(userId))) {
      throw new Error('User not found!');
    }

    if (!(await User.isOrderExists(userId))) {
      throw new Error('Not order yet!');
    }

    const result = await User.find({ userId: Number(userId) });
    return result;
  } catch (error) {
    throw new Error('User not found!');
  }
};

const deleteUserService = async (userId: string) => {
  try {
    if (!(await User.isUserExists(userId))) {
      throw new Error('User not found!');
    }

    await User.deleteOne({ userId: Number(userId) });
  } catch (error) {
    throw new Error('User not found!');
  }
};

const getTotalPriceOfOrderService = async (userId: string) => {
  try {
    if (!(await User.isUserExists(userId))) {
      throw new Error('User not found!');
    }

    if (!(await User.isOrderExists(userId))) {
      throw new Error('Not order yet!');
    }

    const result = await User.aggregate([
      {
        $match: { userId: Number(userId) },
      },
      {
        $unwind: '$orders',
      },
      {
        $group: {
          _id: null,
          totalPrice: {
            $sum: { $multiply: ['$orders.price', '$orders.quantity'] },
          },
        },
      },
      {
        $project: {
          totalPrice: 1,
        },
      },
    ]);

    return result;
  } catch (error) {
    throw new Error('User not found!');
  }
};

export const UserServices = {
  createUserService,
  getAllUsersService,
  getSingleUserService,
  getSungleUserOrderService,
  updateUserService,
  createUserOrderService,
  deleteUserService,
  getTotalPriceOfOrderService,
};
