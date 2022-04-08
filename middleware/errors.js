/**
 * If the request body is empty, it will return an error
 * @param {string} req - the request object
 * @param {string} res - The response object.
 * @param  next - This is a function that will be called when the middleware is
 * done.
 */
function handleError(req, res, next){
  
     /* This is checking if the request body is empty. If it is empty, it will return
 an error. */
 if(Object.keys(req.body).length === 0){
  res.status(500)
  res.json('body is empty, please add a valid body')
}

    next()
     
  }


  module.exports = {handleError}