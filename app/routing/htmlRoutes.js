
var path = require("path");

module.exports = function(app){

	// Home page- defaul on entry
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// Survey page
	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
}