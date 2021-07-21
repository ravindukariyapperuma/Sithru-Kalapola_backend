const express = require("express");

const app = express();
const cors = require("cors");

//Initialize DB
require("./DbConnection/dbCon")();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//User Details
const UserRoute = require("./Routes/User.route");
app.use("/users", UserRoute);

//Authenticate User
const AuthRoute = require("./Routes/Auth.route");
app.use("/auth", AuthRoute);

//Product Details
const ProductRoute = require("./Routes/Product.route");
app.use("/product", ProductRoute);

app.use("/uploads", express.static("uploads"));

//Category Details
const CategoryRoute = require("./Routes/Category.route");
app.use("/category", CategoryRoute);

//Cart Details
const CartRoute = require("./Routes/Cart.route");
app.use("/cart", CartRoute);

//Orders Details
const OrdersRoute = require("./Routes/Orders.route");
app.use("/orders", OrdersRoute);

//Admin
const AdminRoute = require("./Routes/Admin.route");
app.use("/admin",AdminRoute);

//Payment
const PaymentRoute = require("./Routes/Payment.route");
app.use("/payment", PaymentRoute);

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});
