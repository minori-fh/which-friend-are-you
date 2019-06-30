var friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/surveyResults", function(req, res){
        res.json(friendsData)
    });

    app.post("/api/surveyResults", function(req, res){
        friendsData.push(req.body)
    });
}