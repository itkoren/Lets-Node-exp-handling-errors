// Include The 'util' Module
var util = require("util");

// Our custom Error constructor
function CustomError() {
    Error.call(this);

    // Adds a stack property to the given error object
    // that will yield the stack trace at the time
    // captureStackTrace was called
    Error.captureStackTrace(this, CustomError);

    this.name = "CustomError";
    this.message = util.format.apply(this, arguments);
}

// Give it a new instance of the Error prototype as a prototype
CustomError.prototype = Object.create(Error.prototype);

module.exports = CustomError;