import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/:userId', UserController.getSingleUser);
router.get('/:userId/orders', UserController.getSingleUserOrders);
router.put('/:userId/orders', UserController.createUserOrder);
router.put('/:userId', UserController.updateUser);
router.get('/', UserController.getAllUsers);
router.delete('/:userId', UserController.deleteUser);
router.get('/:userId/orders/total-price', UserController.getTotalPriceOrders);

export const UserRoute = router;
