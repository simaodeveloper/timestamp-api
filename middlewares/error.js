module.exports = function errorHandler(err, req, res, next) {

  let stack = err.stack.split('\n')[1];

  console.log(`[${err.constructor.name}] ${err.statusCode} - ${err.message}\n${stack}`);

  res.status(500).json({
    success: false,
    error: err.message
  });
}
