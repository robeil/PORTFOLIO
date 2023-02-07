

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
const tableName = "robeil-db";

exports.handler = async (event) => {
    const sns = new AWS.SNS();
   let content = JSON.parse(event.body);

    const saveParams = {
        TableName: tableName,
        Item: {
            "name": {
                S: content.name
            }, "subject": {
                S: content.subject
            }, "email": {
                S: content.email
            }, "message": {
                S: content.message
            }
        }
    }; const params = {
        TopicArn: 'arn:aws:sns:us-east-1:581178481532:portfolio-sns', Message: JSON.stringify(content) 
    };
    await sns.publish(params).promise();
    await dynamodb.putItem(saveParams).promise();
    
    const response = { 
        statusCode: 200, 
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(content),
     };
    return response;
};
