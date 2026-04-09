import express from "express"
import authMiddleWare from "../middleware/auth.js"
<<<<<<< HEAD
import { placeOrder, verifyOrder } from "../controllers/orderController.js";

=======
import { placeOrder } from "../controllers/orderController.js";
>>>>>>> 75a5fe24430f34f5b77ac6c05b799ed437295f27

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleWare,placeOrder);
<<<<<<< HEAD
orderRouter.post("/verify",verifyOrder)
=======
>>>>>>> 75a5fe24430f34f5b77ac6c05b799ed437295f27

export default orderRouter;