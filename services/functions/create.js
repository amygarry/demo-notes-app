import * as uuid from "uuid"
import AWS from "aws-sdk"

const dynamoDb = new AWS.DynamoDB.DocumentClient()

export async function main(event){
    //request body is passed in as a JSON encoded string in "event.body"
    // Parse the input from the event.body. This represents the HTTP request body.
    //It contains the contents of the note, as a string — content
    // It also contains an attachment, if one exists. It’s the filename of a file that will be uploaded to our S3 bucket.
    const data = JSON.parse(event.body)

    const params = {
        // We read the name of our DynamoDB table from the environment variable using process.env.TABLE_NAME. You’ll recall that we set this above while configuring our API.
        TableName: process.env.TABLE_NAME,
        Item: {
            //The attributes of the item to be created 
            // The userId is the id for the author of the note. For now we are hardcoding it to 123. Later we’ll be setting this based on the authenticated user.
            userId:"123",
            noteId: uuid.v1(),
            content: data.content, 
            attachment: data.attachment,
            createdAt: Date.now(),
        }
    }

    try {
        // Make a call to DynamoDB to put a new object with a generated noteId and the current date as the createdAt
        await dynamoDb.put(params).promise()

        return {
            statusCode: 200,
            body:JSON.stringify(params.Items)
        }
    } catch (e){
        // And if the DynamoDB call fails then return an error with the HTTP status code 500
        return {
            statusCode:500,
            body:JSON.stringify({error: e.message})
        }
    }
}