// Create a server listening on specified port
const express = require("express"); // Require express
const app = express(); // Store express instance in app

app.get("/", function (request, response) {
  response.send("Hello");
});

const PORT = process.env.PORT | 3000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
