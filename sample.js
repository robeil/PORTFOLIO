// const AWS = require("aws-sdk");
// const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
// const tableName = "robeil-db";

// exports.handler = async (event) => {
//     const sns = new AWS.SNS();
//    let content = JSON.parse(event.body);

//     const saveParams = {
//         TableName: tableName,
//         Item: {
//             "name": {
//                 S: content.name
//             }, "subject": {
//                 S: content.subject
//             }, "email": {
//                 S: content.email
//             }, "message": {
//                 S: content.message
//             }
//         }
//     }; const params = {
//         TopicArn: 'arn:aws:sns:us-east-1:581178481532:portfolio-sns', Message: JSON.stringify(content) 
//     };
//     await sns.publish(params).promise();
//     await dynamodb.putItem(saveParams).promise();
    
//     const response = { 
//         statusCode: 200, 
//         body: JSON.stringify(content),
//      };
//     return response;
// };

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("https://6kyta3utpf.execute-api.us-east-1.amazonaws.com/v1/contact", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            subject: subject,
            email: email,
            message: message
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setName("");
          setSubject("");
          setEmail("");
          setMessage("");
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    }