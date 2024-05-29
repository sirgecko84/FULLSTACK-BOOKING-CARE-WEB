import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();
// Khai báo các đường link
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage)

    router.get('/hoidanit', (req, res) => {
        return res.send('khanhdz')
    });

    return app.use("/", router);
}

module.exports = initWebRoutes