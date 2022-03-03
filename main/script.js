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
  
 const fetchChat = db.ref("info/");
 fetchChat.on("child_added", function (snapshot) {
   const messages = snapshot.val();
     const msg = "<div class=\"cadetno\"> <a href=\"./Next/details.html?"+messages.cn+"\"> "+ messages.cn +" <a/></div>";
     document.getElementById("list").innerHTML += msg;
 });
