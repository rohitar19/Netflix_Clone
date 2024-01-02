const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors({
   
      origin: [],
      methods:["POST" , "GET"],
      credentials:true
      
}));
app.use(express.json());

mongoose
  .connect("mongodb+srv://rohit960211:Rohit123@cluster0.qfbl9nq.mongodb.net/Netflix_Clone?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
