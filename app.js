import express from 'express';
import bodyParser from 'body-parser';

import usersRoute from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoute);

app.get('/', (req, res) => {
    res.send('Hello world!');
});


app.listen(PORT, () => {
    console.log(`Server rungging on port: http://localhost:${PORT}`);
})