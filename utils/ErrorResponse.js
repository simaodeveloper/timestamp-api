
module.exports = class ErrorResponse extends Error {
  /**
   * Constructor to create a Custom Error Response
   * @param {String} message
   * @param {Number} statusCode
   */
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
