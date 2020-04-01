import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const apiKey = process.env.REACT_APP_API_KEY

const config = {
    apiKey,
    authDomain: "crwn-db-3a9f1.firebaseapp.com",
    databaseURL: "https://crwn-db-3a9f1.firebaseio.com",
    projectId: "crwn-db-3a9f1",
    storageBucket: "crwn-db-3a9f1.appspot.com",
    messagingSenderId: "223643355926",
    appId: "1:223643355926:web:01cca8920d201b4bf61e37"
};

export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            );
        } catch (error) {
            console.error(error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;