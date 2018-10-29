var responses = require("./responses");
var operations = require("./operations");

module.exports.get = (event, context, callback) => {

    operations.get()
        .then(response => {
            callback(null, responses.createSuccessResponse(response));
        })
        .catch(error => {
            callback(null, responses.createErrorResponse(error));
        });

}


module.exports.post = (event, context, callback) => {

    operations.post(name, age)
        .then(response => {
            callback(null, responses.createSuccessResponse(response));
        })
        .catch(error => {
            callback(null, responses.createErrorResponse(error));
        });

}

module.exports.put = (event, context, callback) => {

    operations.put(id, name, age)
        .then(response => {
            callback(null, responses.createSuccessResponse(response));
        })
        .catch(error => {
            callback(null, responses.createErrorResponse(error));
        });

}

module.exports.delete = (event, context, callback) => {

    operations.delete(id)
        .then(response => {
            callback(null, responses.createSuccessResponse(response));
        })
        .catch(error => {
            callback(null, responses.createErrorResponse(error));
        });

}