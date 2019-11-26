var surveyData = require("../data/friends");


module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(surveyData);
  });

  app.post("/api/friends", function (req, res) {
    let newData = req.body;
    let friendScores = [];
    //loop through and hold all user input into 1 array
    for (var i = 0; i < newData.scores.length; i++) {
      friendScores.push(parseInt(newData.scores[i]));
    }
    newData.scores = friendScores;
    //console.log(newData.scores);
    //console.log(typeof newData.scores);

    let scoreValuation = [];
    //loop through data set
    for (i = 0; i < friends.length; i++) {
      let scoreHolder = 0;
      //find scores for each person in data set
      for (x = 0; x < friends[i].scores.length; x++) {
        scoreHolder += Math.abs(friends[i].scores[x] - newData.scores[x]);
      }
      //stores the absolute difference of data set scores and user score
      //pushes onto array
      scoreValuation.push(scoreHolder);
    }
    let matchMade = 0;
    //search array for closest match
    for (i = 0; i < scoreValuation.length; i++) {
      if (scoreValuation[i] < scoreValuation(matchMade)) {
        matchMade = i;
      }
    }
    //add user to data set
    friends.push(newData);
    //send closest match to page
    res.json(friends[matchMade])
  });
};
