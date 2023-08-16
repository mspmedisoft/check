const express = require('express');
const cookieParser = ('cookie-parser')
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();

dotenv.config()

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
 console.log("mongoDb Disconnected !")
})

// middleware 
app.use(cookieParser());
app.use(express.json());


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, ()=>{
    connect();
    console.log("Connected to backend!");

})