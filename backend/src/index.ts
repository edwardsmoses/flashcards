import express from 'express';

const app = express();
const PORT = 4000;

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/flashcards_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});

app.get('/', (req, res) => {
    res.send("It works! Yup it's working");
});

app.listen(PORT, () => {
    console.log(`Node Express Server is listening on PORT ${PORT}`);
})