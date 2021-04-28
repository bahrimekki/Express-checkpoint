const express = require("express");
const app = express();
const port = 4000;
app.set("view engine", "pug");
app.set("views", "./views");

//-------------working hours-------------
const navbar = (req, res, next) => {
    var date = new Date();
    /* [0] = "Sunday" ,[1] = "Monday" ,[2] = "Tuesday" ,[3] = "Wednesday" ,[4] = "Thursday" ,[5] = "Friday" ,[6] = "Saturday" */
    var jour = date.getDay();
    var heur = date.getHours();
    var minute = date.getMinutes();
    if (
        jour < 6 &&
        jour > 0 &&
        heur < 17 &&
        heur > 9 &&
        minute < 59 &&
        minute > 0
    ) {
        next();
    } else
        res.end(
            "is only available during working hours (Monday to Friday,  from 9 to 17)"
        );
};
app.use(navbar);
//--------------Home------------
app.get("/", function (req, res) {
    res.render("Home/Home");
});
app.get("/style.css", function (req, res) {
    res.sendFile(__dirname + "/views/Home/style.css");
});
//--------------OusServices------------
app.get("/OurServices", function (req, res) {
    res.render("OurServices/OurServices");
});
app.get("/style.css", function (req, res) {
    res.sendFile(__dirname + "/views/OusServices/style.css");
});
//--------------ContactUs---------------
app.get("/ContactUs", function (req, res) {
    res.render("ContactUs/ContactUs");
});
app.get("/style.css", function (req, res) {
    res.sendFile(__dirname + "/views/ContactUs/style.css");
});

app.listen(port, function () {
    console.log(`The server is running, at http://localhost:${port}`);
});
