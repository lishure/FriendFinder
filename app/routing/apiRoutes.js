var friends = require("../data/friends");
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body
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
