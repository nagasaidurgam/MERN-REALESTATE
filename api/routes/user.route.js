import express from 'express';
import { test } from '../controllers/user.controller.js';
// we are importing the test function from the user.controller.js file. because we want to use that function as a callback function for the get request. 



const router = express.Router();

router.get('/test', test ); // we are defining a get route for the url /test. 



export default router;