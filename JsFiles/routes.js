const fs = require("fs");
const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

// this is the products page
function productsPage(path, response) {
  if (DEBUG) console.log(`products.html page was requested.`);
  displayFile(path, response);
}

//this is the about page
function aboutPage(path, response) {
  if (DEBUG) console.log(`about.html page was requested.`);
  displayFile(path, response);
}

function contactPage(path, response) {
  if (DEBUG) console.log(`contact.html page was requested.`);
  displayFile(path, response);
}

function subscribePage(path, response) {
  if (DEBUG) console.log(`subscribe.html page was requested.`);
  displayFile(path, response);
}

function homePage(path, response) {
  if (DEBUG) console.log(`home.html page was requested.`);
  eventEmitter.emit("homePageRequested");
  displayFile(path, response);
}

function displayFile(path, response) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log(err);
      response.end();
    } else {
      if (DEBUG) console.log("file was served.");
      response.writeHead(response.statusCode, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
}

module.exports = {
  productsPage,
  aboutPage,
  contactPage,
  subscribePage,
  homePage,
  eventEmitter,
};
