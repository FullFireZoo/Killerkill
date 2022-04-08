const {valideToken} = require('../firebase/index')



/**
 * If the request body is empty, it will return an error
 * @param {string} req - the request object
 * @param {string} res - The response object.
 * @param  next - This is a function that will be called when the middleware is
 * done.
 */
async function handleError(req, res, next){
  
 

 if(Object.keys(req.body).length === 0){
  res.status(500)
  res.json('body is empty, please add a valid body')
}

console.log('header',req.headers.hasOwnProperty('authorization'))

if(req.headers.hasOwnProperty('authorization')){
 
 
  const token = req.headers.authorization
  try{
   const validation = await valideToken(token)
    

   if(validation.hasOwnProperty('uid')){
    next()
   }
   

  }
  catch(err){
    res.status(403)
    res.json('Please provide a valid token')
  }

  



} else{
  res.status(403)
  res.json(token)
}
 
    
     
  }


  module.exports = {handleError}