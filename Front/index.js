import {easyFire} from 'https://cdn.jsdelivr.net/gh/DocteurSEO/easyfire@master/easyfirev0.5.1.js'

const firebaseConfig = {
    apiKey: "AIzaSyD2osd-022uX-pBvhlYwgGMIFMc_CxV8ho",
    authDomain: "testkiller-6d583.firebaseapp.com",
    projectId: "testkiller-6d583",
    storageBucket: "testkiller-6d583.appspot.com",
    messagingSenderId: "197755803820",
    appId: "1:197755803820:web:f9f984034aea35aafc2709"
  };

  const {login, getToken, createUser, saveContent} = easyFire(firebaseConfig)
// createUser("adminroro@gmail.com",'lolcestroro')
// login('adminroro@gmail.com','lolcestroro')
// getToken.then(async token =>{
//     const response = 
//     await fetch('http://localhost:3002/users/',{
// method: 'POST', 
// headers:{"authorization":token, "Content-Type":"application/json"},
// body: JSON.stringify({"test002":"premier test"})
// })
//     const data = await response.json()
//     console.log(data);
// })


// async function usersUid(){
//     const uid = await createUser("users1quatre@gmail.com",'test123')
//     console.log(uid);
//     saveContent("users", {uid, "niveau":1})
// } 
// usersUid()
