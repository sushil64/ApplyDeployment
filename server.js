const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

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