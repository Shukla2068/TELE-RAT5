const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7474522118:AAGhemg618sgsg4O1oCA-UwRGj165zrvAw8',
  id: isNaN(parsedId) ? 7751838350 : parsedId // replace 12345.. with your telegram chat id
};
