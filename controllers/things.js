const Thing = require("../models/thing");
const thing = require("../models/thing");



function show(req, res) {
         res.render('things/show', {
           title: 'Activity Detail', thing: thing,
    });
}

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
  const thing = new Thing(req.body);
  thing.save(function (err) { 
    console.log(err, " this err");
    if (err) return res.redirect("/things/new");
    console.log(thing);

    res.redirect(`/things/${thing._id}`);
  });
}

module.exports = {
  new: newThing,
  create,
  index,
  show,
};