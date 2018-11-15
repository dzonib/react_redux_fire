import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBN8kPghgly56TKJEcpjAzirjizBB17778",
    authDomain: "mario-react.firebaseapp.com",
    databaseURL: "https://mario-react.firebaseio.com",
    projectId: "mario-react",
    storageBucket: "mario-react.appspot.com",
    messagingSenderId: "736598432280"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})


  export default firebase