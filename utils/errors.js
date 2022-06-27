/**
 * App error blueprint.
 */
class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

/**
 * Bad request error class.
 */
class BadRequestError extends ExpressError {
    constructor(message = "Bad request") {
        super(message, 400);
    }
}

/**
 * Not found error class.
 */
class NotFoundError extends ExpressError {
    constructor(message = "Not found") {
        super(message, 404);
    }
}

module.exports = {
    ExpressError, BadRequestError, NotFoundError
}
