import express  from 'express';

import {client} from "@repo/db/client"

const app = express();
const PORT = 3002;
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const user= await client.user.create({
            data:{
                email:"testuser.@example.com",
                password:"password123"
            }
        })
        console.log('User created:', user);
        res.json(user);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`HTTP Server is running on http://localhost:${PORT}`);
});
