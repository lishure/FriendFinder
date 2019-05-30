
var path = require("path");

module.exports = function(app){

	// Home page- default on entry
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// Survey page
	app.use("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
}
