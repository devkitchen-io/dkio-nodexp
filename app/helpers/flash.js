var format = require('util').format;
var isArray = require('util').isArray;

module.exports = (options) => {
  options = options || {};
  var safe = (options.unsafe === undefined) ? true : !options.unsafe;
  
  return function(req, res, next) {
    if (req.flash && safe) { return next(); }
    req.flash = _flash;
    var render = res.render;
    res.render = function () {
        res.locals.messages = req.flash();
        render.apply(res, arguments);
    }
    next();
  }
}
function _flash(type,msg){
	if (this.session === undefined) throw Error('req.flash() requires sessions');
	var msgs = this.session.flash = this.session.flash || {};
	if (type && msg) {

	    if (arguments.length > 2 && format) {
	      	var args = Array.prototype.slice.call(arguments, 1);
	      	msg = format.apply(undefined, args);
	    } else if (isArray(msg)) {
	      	msg.forEach(function(val){
	       	 	(msgs[type] = msgs[type] || []).push(val);
	     	});
	      	return msgs[type].length;
	    }
	    return (msgs[type] = msgs[type] || []).push(msg);
	} else if (type) {
	    var arr = msgs[type];
	    delete msgs[type];
	    return arr || [];
	} else {
	    this.session.flash = {};
	    return msgs;
	}
}
