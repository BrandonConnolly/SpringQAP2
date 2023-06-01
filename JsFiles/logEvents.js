const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const logEvents = async (event, level, message) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${level}\t${event}\t${message}\t${uuid()}`;
  console.log(logItem);
};

module.exports = logEvents;

//So I tried to set up so that the event would log and date only
//the "home" page link being selected but I couldn't figure it out
//the console does log and date any request to a page made.
