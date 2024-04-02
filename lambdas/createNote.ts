import { APIGatewayProxyEvent, Handler } from "aws-lambda";
import documentClient from "../resources/dynamoDB";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  ctx,
  cb
) => {
  try {
    const data = JSON.parse(event.body as string);
    const params: DocumentClient.PutItemInput = {
      TableName: "notes",
      Item: {
        noteId: data.id,
        title: data.title,
        description: data.description,
      },
      ConditionExpression: "attribute_not_exists(noteId)",
    };

    documentClient.put(params).promise;

    return {
      statusCode: 201,
      body: JSON.stringify("new Note has been created successfully"),
    };
  } catch (error) {
    console.log(error);
  }
};
