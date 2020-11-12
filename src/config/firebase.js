import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

//userCreatedata
//export const mycreateData = async (myfirst, mylast, myborn, mydata) => {
//await db
//.collection('user')
//.doc(mydata)
//.set({
// name: myfirst,
//last: mylast,
//born: myborn
//})
//.then(function (docRef) {
//  console.log("Document successfully written!");
//})
//.catch(function (error) {
//   console.error("Error writing document: ", error);
//});
//}
export default firebase;