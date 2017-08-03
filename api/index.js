var fb = require("firebase");
var config = {
  apiKey: "AIzaSyD7SAHtwHAUv-24w6ww30l82qLu0wMjxmM",
  authDomain: "tf-upc.firebaseapp.com",
  databaseURL: "https://tf-upc.firebaseio.com",
  projectId: "tf-upc",
  storageBucket: "tf-upc.appspot.com",
  messagingSenderId: "293713595531"
};
var firebase = fb.initializeApp(config);
var database = firebase.database();

var loadQuestions = () => {
    var url = '/rutasMo';
    return database.ref(url).once('value').then(function(snapshot) {
      return snapshot.val();
    });
};
var loadRutasSis = () => {
    var url = '/rutasSis';
    return database.ref(url).once('value').then(function(snapshot) {
      return snapshot.val();
    });
};
var loadUpcMonterrico = () => {
    var url = '/upcMonterrico';
    return database.ref(url).once('value').then(function(snapshot) {
      return snapshot.val();
    });
};
var loadUpcSanMiguel = () => {
    var url = '/upcSanMiguel';
    return database.ref(url).once('value').then(function(snapshot) {
      return snapshot.val();
    });
};
var loadUpcSis = () => {
    var url = '/upcSis';
    return database.ref(url).once('value').then(function(snapshot) {
      return snapshot.val();
    });
};
var loadUpcVilla = () => {
    var url = '/upcMonterrico';
    return database.ref(url).once('value').then(function(snapshot) {
      return snapshot.val();
    });
};


module.exports = {
    questions : loadQuestions,
    rutasSis: loadRutasSis,
    upcMonterrico: loadUpcMonterrico,
    upcSanMiguel: loadUpcSanMiguel,
    upcSis: loadUpcSis,
    upcVilla: loadUpcVilla,
};
