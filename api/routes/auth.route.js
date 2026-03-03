import express from 'express'; 
import { signup } from '../controllers/auth.controller.js';

const router = express.Router(); // we are creating a router object using the express.Router() method. this router object will be used to define the routes for the authentication related operations. 


router.post("/signup", signup); // we are defining a post route for the url /signup. when the client side sends a post request to the server side with the url /signup then the signup function will be executed. 


export default router; // we are exporting the router object so that we can use it in the index.js file. in the index.js file we will import this router and use it as a middleware for the url /api/auth. 




// we are importing the signup function from the auth.controller.js file. because we want to use that function as a callback function for the post request. when the client side sends a post request to the server side with the url /signup then the signup function will be executed. and that function will handle the logic for signing up a user.