const http = require("http");
const routes = require("./routes.js");
const logEvents = require("./logEvents.js");
const { format } = require("date-fns");
global.DEBUG = true;

const server = http.createServer((request, response) => {
  if (DEBUG) console.log(request.url, request.method);
  let path = "./views/";
  switch (request.url) {
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      routes.aboutPage(path, response);
      break;

    case "/contact":
      path += "contact.html";
      response.statusCode = 200;
      routes.contactPage(path, response);
      break;

    case "/products":
      path += "products.html";
      response.statusCode = 200;
      routes.productsPage(path, response);
      break;

    case "/subscribe":
      path += "subscribe.html";
      response.setHeader("Set-cookie", "subscription=New");
      response.statusCode = 200;
      routes.subscribePage(path, response);
      break;

    default:
      path += "home.html";
      response.statusCode = 200;
      routes.homePage(path, response);
      break;
  }
});

routes.eventEmitter.on("homePageRequested", () => {
  const dateTime = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  logEvents("homePageRequested", "INFO", "Home page requested"); // Log the event
});
// const port = 3000;
server.listen(3000, "localhost", () => {
  console.log("Server is running on port 3000.");
});
