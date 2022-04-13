const Thing = require("../models/thing");



function show(req, res) {
  console.log(req.params.id, "<- req, params") 
  
  Thing.find({_id:req.params.id}, function (err, thing) {
    console.log(thing, "<- thing")
         res.render('things/show', {
           title: 'Activity Detail', 
           thing: thing,
           reviews: thing.reviews,
          });
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
    if (err) return res.redirect("/things/new");
    console.log(thing);
    res.redirect(`/things`);
  });
}

module.exports = {
  new: newThing,
  create,
  index,
  show,
};