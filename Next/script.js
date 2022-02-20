var cadetno = location.search.substring(1);
const firebaseConfig = {
    apiKey: "AIzaSyCEAh8NxC793m1yyo88KpvxtO5CCaoSaRA",
    authDomain: "directory-74c53.firebaseapp.com",
    projectId: "directory-74c53",
    storageBucket: "directory-74c53.appspot.com",
    messagingSenderId: "213214606363",
    appId: "1:213214606363:web:e049496d965b472303f4be",
    measurementId: "G-WZQEWYNZWB"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  const fetchChat = db.ref("info/" +cadetno);
fetchChat.once("value").then( function (snapshot) {
  const name = snapshot.child("name").val();
  const cn = snapshot.child("cn").val();

    const msg = "<div class=\"cadetno\"> Name: "+ name +"<br> Cadet no: "+ cn+" </div>";
    document.getElementById("list").innerHTML += msg;
  });
