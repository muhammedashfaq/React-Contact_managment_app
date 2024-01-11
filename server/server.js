const express = require("express");

const app = express();

const mongoose = require("./auth/mongo");
mongoose.mongoDB();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

const userrout = require("./routes/userroutes");
app.use("/", userrout);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`serve listening port no ${PORT}`);
});
