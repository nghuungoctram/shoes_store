const route = require("express").Router();
const ProductController = require("../Controller/ProductController");
route.post("/",ProductController.createProductController);
route.get("/",ProductController.showProductController);
// route.get("/:idCate",ProductController.showProductByCateController);
route.get("/searchFood",ProductController.searchProductController);
module.exports = route;