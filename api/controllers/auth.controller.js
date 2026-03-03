import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'; //for security reasons


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
        res.status(500).json('error.message');
    }
}