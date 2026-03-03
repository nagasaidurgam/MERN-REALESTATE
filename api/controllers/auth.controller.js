import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'; //for security reasons
import { errorHandler } from '../utills/error.js';


export const signup = async(req, res) => {

    const { username, email, password } = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);
    // so that even if someone gets access to the database they cant see the actual password.

    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save(); 
        //saving the user to the database

        res.status(201).json('User created successfully');
}
    catch (error) {
        next(error); 

            // if there is an error while saving a user to the database we want to catch that error and send a response to the client side.


    }
}