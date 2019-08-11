'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    validators = require('../helpers/validators.js');

const MainSchema = new Schema({

	page: {
		type: String,
		required : true,
		index:{
			unique: true,
		}
	},

	content: {
		type: Object,
		required : true,
	},

});

module.exports = mongoose.model('Main', MainSchema);
