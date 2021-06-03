class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // Add a "message" proprty
    this.code = errorCode; // Add a "code" property
  }
}

module.exports = HttpError;
