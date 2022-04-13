
const Thing = require('../models/thing')

module.exports = {
	create,
	delete: deleteReview
}


function deleteReview(req, res, next){

	Thing.findOne({'reviews._id': req.params.id}, function(err, thingDocument){
		const review = thingDocument.reviews.id(req.params.id);
		if(!review.user.equals(req.user._id)) return res.redirect(`/things/${thingDocument._id}`);

		review.remove()

		thingDocument.save(function(err){
			if(err) next(err); 
			res.redirect(`/things/${thingDocument._id}`)
		})


	})


}

function create(req, res){

	Thing.findById(req.params.id, function(err, thingFromTheDatabase) {


    	req.body.user = req.user._id;
    	req.body.userName = req.user.name;
    	req.body.userAvatar = req.user.avatar;
		console.log(req.body, "<- req.body")
		console.log(thingFromTheDatabase, "<- 41132423")
		thingFromTheDatabase.reviews.push(req.body);
	
		thingFromTheDatabase.save(function(err){
			console.log(thingFromTheDatabase, "<- req.body")

			res.redirect(`/things/${thingFromTheDatabase._id}`)	
		})

	})


}