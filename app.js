const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const giftExchange = require("./routes/gift-exchange")
const {NotFoundError} = require("./utils/errors");

const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/gift-exchange', giftExchange);

app.get('/', (req, res) => {
    res.status(200).send({
        "ping": "pong"
    })
});

app.use((req, res, next) => {
    return next(new NotFoundError("Invalid route"));
});

app.use((error, req, res, next) => {
    const {status, message} = error;

    const errorObject = {
        status: status || 500,
        message: message || "Something went wrong in the application."
    }

    res.status(status).json({
        error: errorObject
    });
});

module.exports = app;