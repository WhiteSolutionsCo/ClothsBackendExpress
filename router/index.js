const productsRoute = require("./productRouter");
const usersRoute = require("./userRouter");
const authRouter = require("./authRouter");
const mountRoutes = (app) => {
  app.use("/api/v1/products/", productsRoute);
  app.use("/api/v1/users/", usersRoute);
  app.use("/api/v1/auth/", authRouter);
};
module.exports = mountRoutes;
