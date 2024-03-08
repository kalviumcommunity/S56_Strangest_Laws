const express = require('express');
const Router = require('./routes.js'); 
const { isConnected, connected } = require('./db.js'); 
const cors=require('cors')
const app = express();
const port = 3000;

app.use(cors())

app.use(express.json())
app.get('/', (req, res) => {
    try {
        res.json({
            database: isConnected() ? 'connected' : 'disconnected'
        });
    } catch (err) {
        console.log(err);
    }
});

app.use(Router);

app.get('/ping', (req, res) => {
    try {
        res.send("Pong");
    } catch (err) {
        console.log(err);
    }x1
});

if (require.main === module) {
    connected()
    app.listen(port, async () => {
        console.log(`🚀 server running on PORT: ${port}`);
    });
}