"use strict";
module.exports =  (req,res) => {

	const roles = {
		auth: ()=>{
			try{
				return req.session.user?true:false;
			}catch(e){
				return false;
			}
		},
		admin: ()=>{
			try{
				return req.session.user.admin?true:false;
			}catch(e){
				return false;
			}
			
		}
		
	}
	return roles;
}
