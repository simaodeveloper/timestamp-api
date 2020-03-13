const ErrorResponse = require('./ErrorResponse');
const Type = require('./Type');

module.exports = {
  /**
   *  Verify if is a invalid date
   * @param {Date} object A Date object
   */
  isInvalidDate(object) {
    return !Type.is(object, 'date') || isNaN(object.getTime());
  }
}
