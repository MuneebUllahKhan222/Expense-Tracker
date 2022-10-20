



import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBhM3FA0CMMbWnhZr3gy3kzg_qN6qfMj4A",
  authDomain: "expense-tracker-8f263.firebaseapp.com",
  projectId: "expense-tracker-8f263",
  storageBucket: "expense-tracker-8f263.appspot.com",
  messagingSenderId: "169549909028",
  appId: "1:169549909028:web:3f6920e2e0c410cdb8dcb1"
};




const firebaseApp = firebase.initializeApp(firebaseConfig);
export  const db = firebaseApp.firestore();
export  const auth = firebase.auth();




