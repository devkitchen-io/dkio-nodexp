"use strict";

module.exports =  (req,res) => {
	let roles = require('./roles')(req,res);
	return {

		'': ()=> true,

		'profile': ()=> roles.auth() || res.redirect('/signin'),

		'admin': ()=> roles.admin() || res.redirect('/signin'),

		'profile/sign/(in|up)': ()=> !roles.admin() ?
			( !roles.auth() || res.redirect('/profile') ) :
			res.redirect('/admin'),
	}

}
