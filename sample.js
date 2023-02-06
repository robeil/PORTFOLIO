// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = async (event) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     return {
//         statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  }, 
//         body: JSON.stringify('Hello from Lambda!'),
//     };
// };
const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const uuidv1 = require("uuid/v1");

exports.handler = async (event, context) => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json"
    };
    const tableName = process.env.TABLE;
    const id = uuidv1();
    try {
        switch (event.httpMethod) {
            case "DELETE":
                await dynamo
                    .delete({
                        TableName: tableName,
                        Key: {
                            guestId: event.pathParameters.guestId
                        }
                    })
                    .promise();
                body = `Deleted contact ${event.pathParameters.guestId}`;
                break;
            case "GET":
                if (event.pathParameters != null) {
                    body = await dynamo
                        .get({
                            TableName: tableName,
                            Key: {
                                guestId: event.pathParameters.guestId
                            }
                        })
                        .promise();
                } else {
                    body = await dynamo.scan({ TableName: tableName }).promise();
                }
                break;
            case "POST":
                let requestJSON = JSON.parse(event.body);
                await dynamo
                    .put({
                        TableName: tableName,
                        Item: {
                            guestId: id,
                            fullName: requestJSON.fullName,
                            subject: requestJSON.subject,
                            email: requestJSON.email,
                            message: requestJSON.message
                        }
                    })
                    .promise();
                body = `Message sent Successfully ${requestJSON.guestId}`;
                break;
            default:
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