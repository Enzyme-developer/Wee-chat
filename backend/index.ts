import express from 'express';
import dotenv from 'dotenv'

dotenv.config()
const app = express();

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Well done!');
})

app.listen(5000, () => {
    console.log(`The application is listening on port ${PORT}`);
})