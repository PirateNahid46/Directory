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
     const msg = "<div class=\"cn"+messages.house+"\"> <img id=\""+messages.cn+"\" height=\"50\" width=\"50\"/> <font onclick=\"load("+messages.cn+")\"> "+ messages.name +"<br>"+messages.cn+" <font/></div>";
     document.getElementById("list").innerHTML += msg;

     storageRef.child(messages.cn+ ".jpg").getDownloadURL().then(function(url) {
      var img = document.getElementById(messages.cn);
      img.src = url;
      }).catch(function(error) {
      });
 });

 function load(cn){
  const fetchChat = db.ref("info/" +cn);
  fetchChat.once("value").then( function (snapshot) {
    const name = snapshot.child("name").val();
    
    document.getElementById("name").innerHTML = "Name: "+ name;
    document.getElementById("cadetno").innerHTML = "Cadet no:"+ cn;
    document.getElementById("house").innerHTML = "House: "+ snapshot.child("house").val();
    document.getElementById("batch").innerHTML = "Batch: "+ snapshot.child("batch").val();
    document.getElementById("mobile").innerHTML = "Mobile: "+ snapshot.child("contact").val();
    document.getElementById("email").innerHTML = "Email: "+ snapshot.child("email").val();
    document.getElementById("work").innerHTML = "Work: "+ snapshot.child("work").val();
    document.getElementById("address").innerHTML = "Address: "+ snapshot.child("home").val()+", "+ snapshot.child("district").val();
    document.getElementById("misc").innerHTML = "Misc: "+ snapshot.child("misc").val();
    

    storageRef.child(cn+ ".jpg").getDownloadURL().then(function(url) {
      var imgMain = document.getElementById("profile");
      imgMain.src = url;
      }).catch(function(error) {
        var imgMain = document.getElementById("profile");
        imgMain.src = "";
      });

  });

 }
