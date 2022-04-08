const express = require('express')
const cors = require('cors')
const {setData, getData, deleteData, updateData} = require('./firebase/index')
const {handleError} = require('./middleware/errors')
const app = express()

const port = 3002

const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(cors());






/* This is a middleware that will catch any error that occurs in get endpoint */
app.get('/', (req, res) => {
  
  res.status(500)
  res.json('Collection not found')

})


app.get('/:collection', async (req, res) => {
  
  const data = await getData(req.params.collection)

  res.json(data)


})




/* This is a middleware that will catch any error that occurs in the app. */
app.post('/', (req, res) => {
  res.status(500)
  res.json('Please add some collection')

})

/* This is a endpoint for creating a new collection*/
app.post('/:collection', handleError,  (req, res) => {
  
  try{
   
   setData(req.params.collection , req.body)
   res.json(req.body)
  }
  catch{
    res.status(500)
    res.json('internal error, please try again')
  }
   
})

/* This is a middleware that will catch any error that occurs in the app. */
app.delete('/', handleError, (req, res) => {
  res.status(500)
  res.json('Please select available collection')

})

app.delete('/:collection/:doc', handleError, async (req, res) => {

  const data = deleteData(req.params.collection, req.params.doc)

  res.json(data)

})

/* This is a middleware that will catch any error that occurs in the app. */
app.put('/',  (req, res) => {
  res.status(500)
  res.json('Please select available collection / id')

})

app.put('/:collection/:doc', handleError,  async (req, res) => {

  const data = await updateData(req.params.collection, req.params.doc, req.body)

  res.json(req.body)

})

 


// app.get('/collection/:collection/:doc', async(req, res) => {
//     const cityRef = db.collection(req.params.collection).doc(req.params.doc);
// const doc = await cityRef.get();
// if (!doc.exists) {
//   res.json('No such document!');
// } else {
//   res.json(doc.data());
// }

// console.log(req.params.doc);
// console.log(req.params.collection);
// })


/* A callback function that will be executed when the server is listening on the
port. */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})