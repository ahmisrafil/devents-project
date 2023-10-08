// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYff_MZ6Nr4epZrDvtB8JjvIT-JZdMW4U",
  authDomain: "tech-event-management-22ab1.firebaseapp.com",
  projectId: "tech-event-management-22ab1",
  storageBucket: "tech-event-management-22ab1.appspot.com",
  messagingSenderId: "458913848892",
  appId: "1:458913848892:web:7aeeb8a1204a1a16242d39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
