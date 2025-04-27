import express from "express";
import { asiaArray } from "../data/data.js";

const asiaRouter = express.Router();


asiaRouter.get("/", (req, res) => {
    res.render("pages/home.ejs", {
        head_Title: "home",
        bodyClass: "home",
        main_content_description: "Asia",
        title: "Welcome to Asia Page",
        welcome_text: "Explore destinations in Asia",
        destination_name: asiaArray
    });
});

//  Tokyo
asiaRouter.get("/tokyo", (req, res) => {
    let tokyo = asiaArray[0];
    res.render("pages/home.ejs", {
        head_Title: "home",
        bodyClass: "asia",
        title: "Welcome to Tokyo",
        main_content_description: "Travel",
        welcome_text: "Asia - Tokyo",
        travel: tokyo,
        destination_name: asiaArray
    });
});

//  Bangkok
asiaRouter.get("/bangkok", (req, res) => {
    let bangkok = asiaArray[1];
    res.render("pages/home.ejs", {
        head_Title: "home",
        bodyClass: "asia",
        title: "Welcome to Bangkok",
        main_content_description: "Travel",
        welcome_text: "Asia - Bangkok",
        travel: bangkok,
        destination_name: asiaArray
    });
});

// bali
asiaRouter.get("/bali", (req, res) => {
    let bali = asiaArray[2];
    res.render("pages/home.ejs", {
        head_Title: "home",
        bodyClass: "asia",
        title: "Welcome to Bali",
        main_content_description: "Travel",
        welcome_text: "Asia - bali",
        travel: bali,
        destination_name: asiaArray
    });
});

export default asiaRouter;
