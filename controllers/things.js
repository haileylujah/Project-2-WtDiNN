const Thing = require("../models/thing");



// function show(req, res) {
//     Thing.findById(req.params.id)
//     .populate('flightsTickets').exec(function(err, flight) {
//       Ticket.find(
//        {_id: {$nin: flight.flightsTickets}}, 
//        function(err, tickets) {
//          console.log(tickets);
//          res.render('flights/show', {
//            title: 'Flight Detail', flight: flight, tickets: tickets
//          });
//        }
//      );
//     });
//   }

function newThing(req, res) {
  res.render("things/new", { title: "Add Activity" });
}


function index(req, res) {

  Thing.find({}, function (err, things) {
      res.render("things/index", {

        things,
        title: "All Activities",
      });
  });
}

function create(req, res) {
    // console.log(req.body);

  const thing = new Thing(req.body);
  thing.save(function (err) { 
    console.log(err, " this err");
    if (err) return res.redirect("/things/new");
    console.log(thing);

    res.redirect(`/things`);
  });
}

module.exports = {
  new: newThing,
  create,
  index,
//   show,
};
