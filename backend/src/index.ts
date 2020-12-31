import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("It works! Yup it's working");
});

app.listen(PORT, () => {
    console.log(`Node Express Server is listening on PORT ${PORT}`);
})