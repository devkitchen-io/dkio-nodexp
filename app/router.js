/**
 * Module dependencies.
 */
'use strict';

const routes = require('../config/routes');
const acl = require('./helpers/acl');
const params = require('../config/params');


module.exports = app => {
	let controllers = {};
	for (let param in params){
		app.param(param,params[param]);
	}
	for (let url in routes){
		let conf = routes[url];
		try{
			let raw = conf.executor.split('/');
			let executor = { controller: raw.slice(0,-1).join('/'), action: raw.slice(-1).join('/') || "fn"};
			let controllerPath = './controllers/' + executor.controller;

			let controller = controllers[controllerPath]||(controllers[controllerPath] = require(controllerPath));

			for (let i in conf.methods){
				app.route(url)[conf.methods[i]](
					(req,res,next)=>{
						(acl(req,res,next,conf.executor) === true) && next();
					},
					controller[executor.action]
				);
			}
		}catch(e){
			console.log(e);
		}
			

	}
};
