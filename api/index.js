import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; //cant use an environmental variable inside the backend you need to install dotenv

import userRouter from './routes/user.route.js';

dotenv.config() 

mongoose
    .connect(process.env.MONGO)
    .then(()=> {
        console.log('Connected to MongoDB!'); //for feedback purpose using then catch
    })
    .catch((err) => {
    console.log(err);
});
const app = express();



app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});

app.use('/api/user', userRouter);


//create and run the server create api folder package.json file should be inside the root.
//  but we need to it in the root of our project not inside the api folder. 
// because acutally when we deploy our website. 
// render platform is going to check the root of our website. consider both backend and frontend.
// firstly in terminal npm init -y for package.json change "type": "module", 
// npm i express for installing express  in terminal 
// d:mernestate/api/index.js 
// for frequent running install nodemon npm i nodemon 
//mv .git../    .git current folder , ../ parent folder
//for .gitignore
