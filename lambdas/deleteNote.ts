module.exports.handler = async (event) => {
  try {
    const id = event.pathParameters.id;
    return {
      statusCode: 200,
      body: JSON.stringify("Note with id: " + id + " has been deleted"),
    };
  } catch (error) {
    console.log(error);
  }
};
