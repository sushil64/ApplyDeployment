const express = require("express");
const cors = require("cors");
const app = express();
// 1. Import path
const path = require("path");

app.use(cors());
// express.static in here or handleUser file??
app.use("/uploads", express.static("uploads"));
// 2. join module & dirname
app.use(express.static(path.join(__dirname, "./client/build")));

const handleUser = require("./routes/HandleUser");
app.use("/", handleUser);


// let authoriseToken = (req, res, next) => {
//     console.log(req.headers["Authorisation"]);
//     next();
// };
// app.use(authoriseToken);


app.listen(6677, () => {
    console.log("Listening to port 6677");
});