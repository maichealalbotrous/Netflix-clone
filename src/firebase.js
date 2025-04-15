import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAxWZqNvajrLh71BPhtk3ccngRntMOGBSs",
  authDomain: "michael-netflix.firebaseapp.com",
  projectId: "michael-netflix",
  storageBucket: "michael-netflix.firebasestorage.app",
  messagingSenderId: "694555925872",
  appId: "1:694555925872:web:1617b5ffa13fa18cd743b5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert("UserNotFound");
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, logout, signup };
