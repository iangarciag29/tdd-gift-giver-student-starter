const controller = {}

const GiftExchange = require("../../models/gift-exchange");

/**
 * POST | Pair method.
 * @param {*} req HTTP Request
 * @param {*} res HTTP Response
 */
controller.pairs = (req, res) => {
    const {names} = req.body;
    res.status(200).send(GiftExchange.pairs(names));
}

/**
 * POST | Traditional method.
 * @param {*} req HTTP Request
 * @param {*} res HTTP Response
 */
controller.traditional = (req, res) => {
    const {names} = req.body;
    res.status(200).send(GiftExchange.traditional(names));
}

module.exports = controller;
