
// We are creating a handler function that we’ll use as a wrapper around our Lambda functions.
// It takes our Lambda function as the argument.
export default function handler (lambda){
    return async function (event, context){
        let body, statusCode;

        // We then run the Lambda function in a try/catch block.

        try {
            //run the lamda 
            body = await lambda (event, context);
            // On success, we JSON.stringify the result and return it with a 200 status code.
            statusCode = 200;
        } catch (e) {
            // If there is an error then we return the error message with a 500 status code.
            console.error(e);
            body = {error: e.message};
            statusCode=500
        }

        //return HTTP request 
        return {
            statusCode, 
            body: JSON.stringify(body)
        }
    }
}