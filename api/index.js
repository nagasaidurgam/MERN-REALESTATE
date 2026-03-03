import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; //cant use an environmental variable inside the backend you need to install dotenv

import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

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

app.use(express.json());

//for parsing json data from the client side to the server side. 

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);// we are using the userRouter and authRouter as middlewares for the urls /api/user and /api/auth respectively. 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message, });
})



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



//create signup api route :info like username, email,password our cliemnt side change sthe password,hash the password same it inside the db. for that we need to install bcryptjs npm i bcryptjs. for security reasons. because even if someone gets access to the database they cant see the actual password. and also we are going to use async await for handling asynchronous operations in the signup function. because saving a user to the database is an asynchronous operation. and we are going to use try catch block for handling errors in the signup function. because if there is an error while saving a user to the database we want to catch that error and send a response to the client side.