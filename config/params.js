module.exports = {

    'postId':(req,res,next,id)=>{
      const Model = require('../app/models/Post');

      if(!Model.findById(id))
        next(new Error('failed to load post'))
      else
        next();
    },
    'reviewId':(req,res,next,id)=>{
      const Model = require('../app/models/Review');

      if(!Model.findById(id))
        next(new Error('failed to load review'))
      else
        next();
    }
  
}