const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    to: "+244946642126",
    from: process.env.TWILIO_NUMBER,
    body: "Testando o envio de mensagens com nodejs",
  })
  .then((message) => console.log(message))
  .catch((err) => console.error(err));
