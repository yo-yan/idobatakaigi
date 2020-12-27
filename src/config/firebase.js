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

export const sendMessage = async (name, message) => {
    await // Add a new document with a generated id.
        db.collection("messages")
            .add({
                name,
                message,
                createAt: new Date()
            })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
}

export const comment = async () => {
    let tempArray = []
    await db.collection("messages")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                tempArray.push(doc.data())
                console.log(`name:${doc.data().name}`);
                console.log(`message: ${doc.data().message}`);

            });
            return tempArray;
        });
}

//delete
export const deleteDate = async () => {
    await db
        .collection("messages")
        .doc("MWq0s5v5owAf9x0ngSNd")
        .delete()
        .then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
}
export default firebase;