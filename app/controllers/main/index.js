module.exports = {
	fn: async (req, res) => {
		res.render('templates/main/index', { layout:'layouts/main', reviews: await require('app/models/Review').find({})});
	}
	
}
