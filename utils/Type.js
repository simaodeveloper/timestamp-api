/**
 * Return prototype toString for all objects
 * @param {Object} object
 */
const toString = object => Object.prototype.toString.call(object);

/**
 * Capitalizes the first character
 * @param {String} type
 */
const transformResponse = type => `[object ${type[0].toUpperCase() + type.slice(1)}]`;

module.exports = class Type {
  static is(object, type) {
    return toString(object) === transformResponse(type);
  }
}
