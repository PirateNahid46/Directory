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
  
// const fetchChat = db.ref("info/");
// fetchChat.on("child_added", function (snapshot) {
//   const messages = snapshot.val();
//     const msg = "<div class=\"cadetno\"> <a href=\"./Next/details.html?"+messages.cn+"\"> "+ messages.cn +" <a/></div>";
//     document.getElementById("list").innerHTML += msg;
// });


document.getElementById("authform").addEventListener("submit", getname);
  function getname(e){
    e.preventDefault();
    const name = document.getElementById("namebox");
    const chatTxt = document.getElementById("chat-txt");
    const batch = document.getElementById("batch");
    const house = document.getElementById("house");
    const contact = document.getElementById("contact");
    const work = document.getElementById("work");
    const home = document.getElementById("home");
    const district = document.getElementById("district");
    const username = name.value;
    const usercn = chatTxt.value;
    const userbatch = batch.value;
    const userhouse = house.value;
    const usercontact = contact.value;
    const userwork = work.value;
    const userhome = home.value;
    const userdistrict = district.value;
  name.value = "";
  chatTxt.value = "";
      db.ref("info/" + usercn).set({
        name: username,
        cn: usercn,
        batch: userbatch,
        house: userhouse,
        contact: usercontact,
        work: userwork,
        home: userhome,
        district: userdistrict,
      });
    
    
  }
