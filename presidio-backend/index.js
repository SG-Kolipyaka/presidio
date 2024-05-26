const express = require("express");
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());


app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("connected to DB");
    } catch (er) {
        console.log(er);
    }
    console.log(`server running at ${process.env.PORT}`);
});
