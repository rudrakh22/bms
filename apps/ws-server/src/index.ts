import {client} from '@repo/db/client';
import {WebSocketServer} from 'ws';

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', (ws) => {
    ws.on('message', async (message) => {
        console.log('Received message:', message);
        // const res=await client.user.create({
        //     data: {
        //         email: "testuser.@example1.com",
        //         password: "password123"
        //     }
        // })
        // console.log('User created:', res);
        ws.send('User created successfully');
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
