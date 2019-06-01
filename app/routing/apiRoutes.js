var friends = require("../data/friends");

module.exports = function(app) {
    //get data from friends file
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
//post data to friends file
  app.post("/api/friends", function(req, res) {

  //set totalDifference to 0
    var totalDifference = 0;
//storing bestmatch in a variable using empty strings
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
//store user data in variable
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;
//uses .map for userScores array accepting callback function- used in place of for loop
    var b = userScores.map(function(item) {
      //returns as an integer
      return parseInt(item, 10);
    });
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    console.log("Name: " + userName);
    console.log("User Score " + userScores);
//sum of score differences, reduce it down to one number
    var sum = b.reduce((a, b) => a + b, 0);

    console.log("Sum of users score " + sum);
    console.log("Best match friend diff " + bestMatch.friendDifference);
    console.log("+++++++=================++++++++++");
//for loop for friends array for friend score difference
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;
      console.log("Total Diff " + totalDifference);
      console.log("Best match friend diff " + bestMatch.friendDifference);
//best friend match score difference
      var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total friend score " + bfriendScore);
      totalDifference += Math.abs(sum - bfriendScore);
      console.log("-------------------------> " + totalDifference);
//if statement for best friend match  to show
      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
      console.log(totalDifference + " Total Difference");
    }
    console.log(bestMatch);
//user data to push to friends array
    friends.push(userData);
    console.log("New user added");
    console.log(userData);
    res.json(bestMatch);
  });
};