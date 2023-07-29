const express = require("express");
const cors = require("cors");
const app = express();
// 1. Import path
const path = require("path");

// http://localhost:6677  <- no need of base url
// npm Build and to access index.html use Express.Static
// In Cyclic give dbString -> value: (environment Variables)

app.use(cors());
// express.static in here 
app.use("/uploads", express.static("uploads"));

// 2. join is a module & dirname -> give folder build to server access
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