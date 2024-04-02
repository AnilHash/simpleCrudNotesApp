module.exports.handler = async (_event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify("Here are all notes"),
    };
  } catch (error) {
    console.log(error);
  }
};
