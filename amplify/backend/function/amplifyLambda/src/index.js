const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json"
    };
    const tableName = process.env.TABLE;
    try {
        if (event.httpMethod === "POST") {
            let requestJSON = JSON.parse(event.body);
            await dynamo
                .put({
                    TableName: tableName,
                    Item: {
                        guestId: requestJSON.guestId,
                        fullName: requestJSON.fullName,
                        subject: requestJSON.subject,
                        email: requestJSON.email,
                        message: requestJSON.message
                    }
                })
                .promise();
            body = `Message sent Successfully ${requestJSON.guestId}`;
        } else {
            throw new Error(`Unsupported route: "${event.httpMethod}"`);
        }
    } catch (err) {
        statusCode = 400;
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers
    };
};
