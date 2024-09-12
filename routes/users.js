import express from "express";

import { v4 as uuidv4} from 'uuid';

const router = express.Router();



// const users =[
//     {
//         first_name: 'john',
//         last_name: 'doe',
//         email: ' johndoe@example.com'
//     },
//     {
//         first_name: 'alice',
//         last_name: 'smith',
//         email: 'alicesmith@example.com'
//     },
// ]

const users= [];

router.get('/', (req, res) => {
    res.send(users);
})

router.post('/', (req,res) =>{
    const user= req.body;

    users.push({ ...user, id: uuidv4()});

    res.send(` ${user.first_name} has been added to the database`)
})

export default router