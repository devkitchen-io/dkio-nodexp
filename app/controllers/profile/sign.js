const User = require("app/models/User");
module.exports = {
	in: async (req, res) => {
		if(req.method === "POST"){

			try{
				user = await User.findOne({
					username: req.body.username,
					password: req.body.password,
					admin: true /*req.body.admin*/
				});

				if(!user)
					req.flash('error', 'Invalid password or username.');
				else{
					req.session.user = user;
					return res.redirect(req.originalUrl);
				}
			}catch (err){
				req.flash('error', err.message);
			}


		}
		res.render('templates/profile/auth/login', { layout:'layouts/auth' });
	},
	up: async (req, res) => {
		
		if(req.method === "POST"){
			try{
				let newUser = new User({
					username: req.body.username,
					password: req.body.password,
					admin: true /*req.body.admin*/
				});
				
				await newUser.save();
				res.redirect(req.originalUrl);
			}catch (err){
				req.flash('error', err.message);
			}
		}

		res.render('templates/profile/auth/registration', { layout:'layouts/auth' });
		
	},
	out: (req, res) => {
		delete req.session.user;
		res.redirect(req.originalUrl);
	}
}
