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
  var storage = firebase.storage();
  var storageRef = storage.ref();
  
 const fetchChat = db.ref("info/");
 fetchChat.on("child_added", function (snapshot) {
   const messages = snapshot.val();
     const msg = "<div class=\"cn"+messages.house+"\"> <img id=\""+messages.cn+"\" height=\"50\" width=\"50\"/> <a href=\"./Next/details.html?"+messages.cn+"\"> "+ messages.name +"<br>"+messages.cn+" <a/></div>";
     document.getElementById("list").innerHTML += msg;

     storageRef.child(messages.cn+ ".jpg").getDownloadURL().then(function(url) {
      var img = document.getElementById(messages.cn);
      img.src = url;
      }).catch(function(error) {
      });
 });
