var friends = require("../data/friends");
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })
    app.post("/api/friends", function (req, res) {
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var newFriend = req.body;
        var friendName = newFriend.name;
        var friendScores = newFriend.scores;
        //The parseInt makes sure that the score is a number and not a string
        var scoreNumber = friendScores.map(function(item) {
            return parseInt(item, 10);
        }); 
        newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: scoreNumber
        };
        console.log("Name: ", friendName);
        console.log("User score: ", friendScores);

        var sum =scoreNumber.reduce((a, b)=> a + b, 0);
        console.log("Sum of friend score ", sum);
        console.log("Best match friend diff ", bestmatch.friendDifference)


        for (var i=0; i<friends.length; i++){
            var currentFriend =friends[i];
            //console.log(currentFriend.scores)
            for (var j=0; j<currentFriend.scores.length; j++) {
                console.log(newFriend.name, newFriend.scores[j])
                console.log(currentFriend.name,currentFriend.scores[j])
            }
        }


        res.send("Match Found")
    })
} 
