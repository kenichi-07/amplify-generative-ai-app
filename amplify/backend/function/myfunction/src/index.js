const AWS = require('aws-sdk');
const bedrock = new AWS.Bedrock();

exports.handler = async (event) => {
  const params = {
    prompt: event.arguments.input,
    model: 'Claude-3-Sonnet', // Example of a Claude model
  };

  try {
    const response = await bedrock.generate(params).promise();
    return { result: response.text };
  } catch (error) {
    return { error: error.message };
  }
};
