import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDpgkcU_VcTdAoD1L6kBvzRKm6gWpAlJ9I",
  authDomain: "bank-of-trust-73d21.firebaseapp.com",
  databaseURL: "https://bank-of-trust-73d21.firebaseio.com",
  projectId: "bank-of-trust-73d21",
  storageBucket: "bank-of-trust-73d21.appspot.com",
  messagingSenderId: "734046320122",
  appId: "1:734046320122:web:6343de38e5d3202bd66043",
  measurementId: "G-XM4QBK9JG1"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
