import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMgAYheUc9WlAbzIcKku3u3To5F7LAna8",
  authDomain: "property-management-e2275.firebaseapp.com",
  databaseURL: "https://property-management-e2275.firebaseio.com",
  projectId: "property-management-e2275",
  storageBucket: "property-management-e2275.appspot.com",
  messagingSenderId: "15990638997",
  appId: "1:15990638997:web:0ba1b5bb881ae35ad3ce9c",
  measurementId: "G-ZXJXQ5JP7H",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
    this.auth = app.auth();
  }

  isLogged() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default Firebase;
