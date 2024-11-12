const HttpError = require('./HttpError');
const handleMongooseError = require('./handleMongooseError');
const moments = require('./moment');
const validators = require('./validators');
const generateId = require('./generateId');
const parseJsonBody = require('./parseJsonBody');
const sendEmail = require('./sendEmail');
const errorHandler = require('./errorHandler');

module.exports = {
  HttpError,
  handleMongooseError,
  moments,
  validators,
  generateId,
  parseJsonBody,
  sendEmail,
  errorHandler,
};

// import -> exports helpers
// const { HttpError, handleMongooseError, moment, validators, generateId, parseJsonBody, sendEmail, errorHandler } = require('./helpers');