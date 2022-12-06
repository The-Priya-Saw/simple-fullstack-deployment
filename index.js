import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from "cors";
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import UserModel from "./models/UserModel.js";
// import {registerUser} from "./controllers/AuthController.js";
import AuthRoutes from "./routes/AuthRoute.js";
import EventRoutes from "./routes/EventRoute.js";
import CareersRoute from "./routes/CareersRoute.js";
import CommunityRoutes from "./routes/CommunityRoutes.js"; 
import cookieParser from "cookie-parser";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var whitelist = ['http://localhost:3000', /** other domains if any */ ]
var corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

dotenv.config({path:__dirname+"/.env"});

const app = express();
app.use("/public",express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());
// app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api",AuthRoutes);
app.use("/api/events",EventRoutes);
app.use("/api/careers",CareersRoute);
app.use("/api/community",CommunityRoutes);

app.get("*", (req, res) => {
  let url = path.join(__dirname, '/public/', 'index.html');
  res.sendFile(url);
});

const MONGO_URI="mongodb+srv://loki:kilo@cluster0.oczklsm.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(MONGO_URI).then(() => {
    console.log("then")
    app.listen(process.env.PORT,()=>{
        console.log("Server started at " + process.env.PORT)
    })
}).catch(e => console.log(e.message));
