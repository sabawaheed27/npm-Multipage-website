import express from "express";
import { americaArray } from "../data/data.js";

const americaRouter = express.Router();


americaRouter.get("/", (req, res) => {
    res.render("pages/home.ejs", {
        head_Title: "home",
        bodyClass: "home",
        main_content_description: "America",
        title: "Welcome to America Page",
        welcome_text: "Explore destinations in America",
        destination_name: americaArray

    });
});

//  New York 
americaRouter.get("/New_York", (req, res) => {
    let newYork = americaArray[0];
    res.render("pages/home.ejs", {
        head_Title: "home",
        bodyClass: "america",
        title: "Welcome to New York",
        main_content_description: "Travel",
        welcome_text: "America - New York",
        travel: newYork,
        destination_name: americaArray
    });
});

//  Rio de Janeiro
americaRouter.get("/Rio_De_Janeiro", (req, res) => {
    let rio = americaArray[1];
    res.render("pages/home.ejs", {
        head_Title: "home",
        bodyClass: "america",
        title: "Welcome to Rio de Janeiro",
        main_content_description: "Travel",
        welcome_text: "America - Rio de Janeiro",
        travel: rio,
        destination_name: americaArray
    });
});

//  Toronto
americaRouter.get("/toronto", (req, res) => {
    let toronto = americaArray[2];
    res.render("pages/home.ejs", {
        head_Title: "home",
        bodyClass: "america",
        title: "Welcome to Toronto",
        main_content_description: "Travel",
        welcome_text: "America - Toronto",
        travel: toronto,
        destination_name: americaArray
    });
});

export default americaRouter;



