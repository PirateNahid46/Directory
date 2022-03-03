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

  var storage = firebase.storage();
  var storageRef = storage.ref();
  

  const fetchChat = db.ref("info/" +cadetno);
fetchChat.once("value").then( function (snapshot) {
  const name = snapshot.child("name").val();
  const cn = snapshot.child("cn").val();
  const mobile = snapshot.child("contact").val();
  const district = snapshot.child("district").val();

    const msg = "<div class=\"cadetno\"> Name: "+ name +"<br> Cadet no: "+ cn+" <br> Mobile: "+ mobile +" </div>";
    document.getElementById("list").innerHTML += msg;

    storageRef.child(cn+ ".jpg").getDownloadURL().then(function(url) {
      var img = document.getElementById('myImgId');
      img.src = url;
      }).catch(function(error) {
      });
  });
