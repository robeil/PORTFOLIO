 
# initialize the project first
* --> amplify init
you can give it a name or can leave it for default
then hit enter for the default configuration
then choose the AWS profile
at this point fron end is deployed completely
then enter no for not sending enprovement data it might affect your performance
# then add api and choose REST 
* ---> amplify add api
# then choose REST
# you can give it name or it will take default then you should give the path and parametets if it takes
* --> /contact
then enter n for advance setting
then enete n for edit lambda function 
ente n for restrict api access
choose to add or not additional api path 
at this point your backend Successfully added resource amplifyAPI locally

then do you backend code in the amplify -> backend -> function -> src -> index.js
# leave all the option as a defualt
# --> amplify push

enter y for continue
# then install thsi packege that frontend can call to backend
*--> npm install aws-amplify @aws-amplify/ui-react

# then add those line od code in index.js in your react
* import  Amplify  from "aws-amplify";
* import awsExports from "./aws-eAmplify.configure(awsExports);
# execute --->  amplify add hosting
# then select s3 with custome domain OR s3 with cloudFront
# then prduction https or http
# --> execute amplify publish
# then hit y for continues

then you will get a yourappname.cloudFront.net url where you are is published
# Contact.jsx

# const myAPI = "/amplify/backend/api/amplifyAPI";
# const path = '/contact';