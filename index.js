import express from "express";
import * as path from "path";
import americaRouter from "./routes/americaRouter.js";
import europeRouter from "./routes/europeRouter.js";
import asiaRouter from "./routes/asiaRouter.js";
import * as dotenv from "dotenv";
import { travelArray } from "./data/data.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3031;
const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
    res.render("pages/home.ejs", {
        head_Title: "home",
        title: "Travel Guide Website",
        main_content_description: "home",
        body_class_name: "home",
        welcome_text: "Travel Guide Website",
        destination_name: travelArray
    });
});


app.use("/america", americaRouter);
app.use("/europe", europeRouter);
app.use("/asia", asiaRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
