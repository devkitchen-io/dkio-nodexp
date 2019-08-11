'use strict';



module.exports = (res,req,next,action) => {
	const policies = require('../../config/policies.js')(res,req,next);
	for(let i = action.split('/').length; i>=0; i--){
		action = action.split('/',i).join('/');

		for(let route in policies){

			if(action.match(new RegExp('^'+route+'$')))
				return policies[route]();

		}
	}
	return false;
}
