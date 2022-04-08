const admin = require("firebase-admin");
const serviceAccount = require("./firebaseIn.json");


/* This is the initialization of the firebase app. */
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
/*  initialization of dataBase (Firestore)  */
const db = admin.firestore(); 


/**
 *  Function that allows to save the data in firebase 
 * @param {string} collection - The name of the collection you want to access.
 * @param {Object} obj - The object you want to save to the database.
 * @param {string} id - The id of the document you want to update.
 */

 async function setData (collection,obj ,id ){
    const usersDb = db.collection(collection); 
    
    /* This is a way to create a unique id for the document. */
    const document = id ? usersDb.doc(id): usersDb.doc(Math.random().toString())

   /* Saving the data in the database. */
    await document.set(obj);
}

async function deleteData (collection, id){
 
  const res = await db.collection(collection).doc(id).delete();
}


async function updateData (collection , id, content){

  const data = db.collection(collection).doc(id);

// Set the 'capital' field of the city
  const res = await data.update(content);
  return res
}



/**
 * This function takes in a collection name and returns a list of documents from
 * that collection
 * @param {string} collection - The name of the collection you want to access.
 * @returns {Array<Object>} An array of documents objects. Each object has an id and data property. The data
 * property is an object.
 */
async function getData (collection){
const citiesRef = db.collection(collection);
const snapshot = await citiesRef.get();
let data = []
 snapshot.forEach(doc => {
  data.push( {id :doc.id, 
          data: doc.data()})
});

return data 
}






module.exports = {setData, getData, deleteData, updateData}