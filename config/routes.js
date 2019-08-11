"use strict";

/*
    ____              __
   / __ \____  __  __/ /____  _____
  / /_/ / __ \/ / / / __/ _ \/ ___/
 / _, _/ /_/ / /_/ / /_/  __/ /
/_/ |_|\____/\__,_/\__/\___/_/

*/

module.exports = {

/*
   __  ___     _
  /  |/  /__ _(_)__
 / /|_/ / _ `/ / _ \
/_/  /_/\_,_/_/_//_/

*/

	"/": {
		methods: ['get'],
		executor: 'main/index/',
	},

/*
   ___           ____ __
  / _ \_______  / _(_) /__
 / ___/ __/ _ \/ _/ / / -_)
/_/  /_/  \___/_//_/_/\__/

*/

	"/profile":{
		methods: ['get'],
		executor: 'profile/index/'
	},

/*
   ___     __      _
  / _ |___/ /_ _  (_)__
 / __ / _  /  ' \/ / _ \
/_/ |_\_,_/_/_/_/_/_//_/
*/

	"/admin":{
		methods: ['get'],
		executor: 'admin/index/'
	},

	"/admin/reviews/:reviewId/remove":{
		methods: ['get','post'],
		executor: 'admin/reviews/delete'
	},

/*
   ___       __  __
  / _ |__ __/ /_/ /
 / __ / // / __/ _ \
/_/ |_\_,_/\__/_//_/

*/

	"/signup":{
		methods: ['get','post'],
		executor: 'profile/sign/up'
	},

	"/signin":{
		methods: ['get','post'],
		executor: 'profile/sign/in'
	},
	
	"/signout":{
		methods: ['get'],
		executor: 'profile/sign/out'
	}

}
