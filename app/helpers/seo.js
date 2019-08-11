const tags = require('../../config/seo-tags')

module.exports = (req, res, next) => {
	let seo = tags[req.path] || tags.default
	let desc_tag = `<meta name="description" content="${seo.description}">`
	let key_tag = `<meta name="keywords" content="${seo.keywords}">`
	res.locals.title = seo.title
	res.locals.seo =  desc_tag + key_tag
	next()
}
