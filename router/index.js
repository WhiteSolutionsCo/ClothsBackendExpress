const productsRoute = require("./productRouter");

const mountRoutes = (app) => {
  // app.use("/api/v1/tests/", testRoute);
  app.use("/api/v1/products/", productsRoute);
};
module.exports = mountRoutes;
