
// var tableData = require("../data/tableData");
var friends = require('../data/friends');
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
 

  app.get("/api/friends", function(req, res) {
    res.json(usersArray);
  });

//   app.get("/api/waitlist", function(req, res) {
//     res.json(waitListData);
//   });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {


    var newFriend = req.body;

     let bestFriend = { dif: 100 };

    for (i = 0; i < friends.length; i++) {
            let dood = friends[i];
            let doodTotal = 0;
            let friendTotal = 0;
            let dif = 101;
            for (idx in dood.stats){

                doodTotal += parseInt(dood.stats[idx]);
                friendTotal += parseInt(newFriend.stats[idx]);
            };
            if (doodTotal === friendTotal && dood !== newFriend){
                bestFriend.dif = 0;
                bestFriend.obj = dood}
            else if (doodTotal>friendTotal){dif = doodTotal-friendTotal}
            else {dif = friendTotal - doodTotal};
            if (dif<bestFriend.dif) {
                bestFriend.dif = dif;
                bestFriend.obj = dood};
            };
            bestFriend = bestFriend.obj;
            res.json(bestFriend);
            friends.push(newFriend);
        
        })
    };


    

    //   tableData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
//     }
//   });


//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
// };
