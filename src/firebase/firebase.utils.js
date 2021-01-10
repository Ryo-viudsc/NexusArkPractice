import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBXXI5LJ4Tq8DPxSkkDrbaMPR5o4ymutnQ",
  authDomain: "clothesec-60551.firebaseapp.com",
  projectId: "clothesec-60551",
  storageBucket: "clothesec-60551.appspot.com",
  messagingSenderId: "908735053209",
  appId: "1:908735053209:web:48bb42d8ff7761b9776708",
  measurementId: "G-K59NZCY2WX"
};

//take the user auth  object and take it into the database 

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth){
    return; 
  }
  
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  //checking if the userRef (with userAUthid's data) exists
  if(!snapShot.exists){
    //snapshot simply represents the data 
    const {displayName, email} = userAuth;
    const createdAt = new Date();
  
    //if not using ref data and desconstruct the displayname and 
    //email
    try {

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });

    } catch (error){
      console.log(error.message);
    }
  }

  return userRef;

 //getting the snapshopshot using documentReference object and its methods 

}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
