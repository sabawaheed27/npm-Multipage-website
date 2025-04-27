import express from "express";
import { europeArray } from "../data/data.js";

const euroRouter = express.Router();


euroRouter.get("/", (req, res) => {
    res.render("pages/home.ejs", {
        head_Title: "home",
        bodyClass: "home",
        main_content_description: "Europe",
        title: "Welcome to Europe Page",
        welcome_text: "Explore destinations in Europe",
        destination_name: europeArray
    });
});

// Paris
euroRouter.get("/paris", (req, res) => {
    let paris = europeArray[0];
    res.render("pages/home.ejs", {
        head_Title: "home",
        bodyClass: "europe",
        title: "Welcome to Paris",
        main_content_description: "Travel",
        welcome_text: "Europe - Paris",
        travel: paris,
        destination_name: europeArray
    });
});

// Rome
euroRouter.get("/rome", (req, res) => {
    let rome = europeArray[1];
    res.render("pages/home.ejs", {
        head_Title: "home",
        bodyClass: "europe",
        title: "Welcome to Rome",
        main_content_description: "Travel",
        welcome_text: "Europe - Rome",
        travel: rome,
        destination_name: europeArray
    });
});

//  Barcelona
euroRouter.get("/barcelona", (req, res) => {
    let barcelona = europeArray[2];
    res.render("pages/home.ejs", {
        head_Title: "home",
        bodyClass: "europe",
        title: "Welcome to Barcelona",
        main_content_description: "Travel",
        welcome_text: "Europe - Barcelona",
        travel: barcelona,
        destination_name: europeArray
    });
});

export default euroRouter;
