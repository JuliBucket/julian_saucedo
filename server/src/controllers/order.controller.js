import { createOrder, getOrders } from "../models/order.model.js";

export const createOrderCtrl = (req, res) => {
  const userId = req.user.id;
  const { coffee } = req.body;

  const order = createOrder(coffee, userId);

  res.status(201).json(order);
};

export const getOrdersCtrl = (req, res) => {
  const orders = getOrders();

  res.status(200).json(orders);
};

export const getOrderById = (req, res) => {
  const { userId } = req.user.id
  const { id } = req.params.id
  try{

  } catch{
    
  }
}
