const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const contactRoute = require("./routes/contactRoute");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// const corsOptions = {
//    origin: ["http://localhost:3000", "https://trinetra-inventory-management-software-d6pb.vercel.app"],
//   credentials: true 
// };

// app.use(cors(corsOptions));

// app.options("*", cors(corsOptions));

const allowedOrigins = ["https://trinetra-inventory-management-software-d6pb.vercel.app", "http://localhost:3000"];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is allowed or if it's a CORS preflight request
    console.log(allowedOrigins);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true // Include credentials in CORS requests (cookies, authorization headers, etc.)
};

// Use CORS middleware with options
app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options("*", cors(corsOptions));


app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/contactus", contactRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error Middleware
app.use(errorHandler);
// Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect("mongodb+srv://ankitraj980533:ankitraj@cluster0.z3lrqz0.mongodb.net/")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
