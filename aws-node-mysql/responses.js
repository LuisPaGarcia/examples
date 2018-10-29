exports.createErrorResponse = (statusCode, message) => ({
    statusCode: statusCode || 501,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
    },
    body: message || 'error',
});

exports.createSuccessResponse = (response) => ({
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(response)
});

