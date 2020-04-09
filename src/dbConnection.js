import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBgaeJGSQtU6uXjDaaKGjDuK46u9qWEXNQ",
    authDomain: "meuapp-2d985.firebaseapp.com",
    databaseURL: "https://meuapp-2d985.firebaseio.com",
    projectId: "meuapp-2d985",
    storageBucket: "meuapp-2d985.appspot.com",
    messagingSenderId: "818945985520",
    appId: "1:818945985520:web:97bd8e9cc61decfdc22b35",
    measurementId: "G-VDVW0ZP5YJ"
};

firebase.initializeApp(config);

export default firebase;