
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
  var storageRef = storage.ref("mentors/");
  main();

function main(){
    const fetchChat = db.ref("mentors/");
    fetchChat.on("child_added", function (snapshot) {
      const messages = snapshot.val();
        const msg = "<div><img id=\""+messages.id+"\" class=\"menimg\" height=\"120px\" width=\"120px\" src=\"./src/profile.png\"><div class=\"mentors\"> Name: "+ messages.name +"<br>Email: "+messages.email+"<br>Department: "+messages.depart+"<br>Designation: "+messages.desig+"<br>Mobile: "+messages.mobile+" </div></div>";
        document.getElementById("list").innerHTML += msg;
   
        storageRef.child(messages.id+ ".jpg").getDownloadURL().then(function(url) {
         var img = document.getElementById(messages.id);
         img.src = url;
         }).catch(function(error) {
           var img = document.getElementById(messages.id);
           img.src = "./src/profile.png";
         });
    });

  }