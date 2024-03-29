// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use(express.static('app'));
// app.use(express.static(__dirname + 'app'));
app.use(express.static('app'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER pointing our server to a series of route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER to "start" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
