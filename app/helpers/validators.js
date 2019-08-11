module.exports = {
	notEmpty:{
		validator: value => value && value.length,
		message: field => "The field can't be empty"
	},
}
