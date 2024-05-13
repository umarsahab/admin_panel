import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore, doc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAVFmVjB2PA9tKdUrPhxqg2EBXqn81meJM",
  authDomain: "fir-rnseries-27ed1.firebaseapp.com",
  projectId: "fir-rnseries-27ed1",
  storageBucket: "fir-rnseries-27ed1.appspot.com",
  messagingSenderId: "695005480936",
  appId: "1:695005480936:web:5af7cae2c8880da5a6865d",
  measurementId: "G-6PG13FRMEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export const createUserAccount = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const setUserObjData = async (obj) => {
  const ref = doc(db, 'users', obj.uid)
  return await setDoc(ref, obj)
}