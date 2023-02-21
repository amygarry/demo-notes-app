import handler from "../util/handler"
import dynamodb from "../util/dynamodb"

export const main = handler (async (event)=>{
    const params = {
        TableName: process.env.TABLE_NAME,
        //'key' defines the partition key and sort key fo the item to be removed 
        Key: {
            userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId, //the id of the author 
            noteId: event.pathParameters.id, //the id of the note from the path
        },
    }

    await dynamodb.delete(params)
    return { status: true}
})