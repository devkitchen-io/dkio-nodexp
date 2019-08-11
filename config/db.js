"use strict";

const mongoose = require('mongoose');
const host = 'localhost',
	port = 27017,
	db_name = '',
	db_user = '',
	db_pass = '';

module.exports = {
	connect: () => mongoose.connect(
		'mongodb://' +
			( db_user && db_user + ':' ) +
			( db_pass && db_pass + '@' ) +
			host + ':' + port + '/' +
			db_name,
		{
			useNewUrlParser: true,
			useCreateIndex: true
		}
	)
}



