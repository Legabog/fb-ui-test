import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB6fVPBle0emEYn8Jg-tqAQ4fCSC-JTeFI",
  authDomain: "social-network-legabog.firebaseapp.com",
  databaseURL: "https://social-network-legabog.firebaseio.com",
  projectId: "social-network-legabog",
  storageBucket: "social-network-legabog.appspot.com",
  messagingSenderId: "986401708469",
  appId: "1:986401708469:web:a4c15563ed443cc149a1fc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db;