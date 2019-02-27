import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";

let firebaseApp = null;

var config = {
  apiKey: "AIzaSyBSkzQMGsvxX0BmhDNRuC5kSVFhCKcoE6g",
  authDomain: "askalfredto.firebaseapp.com",
  databaseURL: "https://askalfredto.firebaseio.com",
  projectId: "askalfredto",
  storageBucket: "askalfredto.appspot.com",
  messagingSenderId: "785835639035"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();

export { firebase, db };
