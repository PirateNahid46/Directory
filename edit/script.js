//var cn = location.search.substring(1);
let cn = prompt("Enter Cadet No");



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
    const name = document.getElementById("namebox");
    const cnEdit = document.getElementById("cn");
    const batch = document.getElementById("batch");
    const house = document.getElementById("house");
    const contact = document.getElementById("contact");
    const work = document.getElementById("work");
    const home = document.getElementById("home");
    const district = document.getElementById("district");
    const misc = document.getElementById("misc");
    const email = document.getElementById("email");
    const intake = document.getElementById("intake");
    const flName = document.getElementById("flName");
    const bdate = document.getElementById("bdate");
    const bgroup = document.getElementById("bgroup");
    
    
    getData(cn);
function getData(no){
  const fetchChat = db.ref("info/" +no);
  fetchChat.once("value").then( function (snapshot) {
  const Gname = snapshot.child("name").val();
  const name = document.getElementById("namebox");
  document.getElementById("cn").innerHTML = no;

  name.value = Gname;
  batch.value = snapshot.child("batch").val();
  contact.value=snapshot.child("contact").val();
  work.value=snapshot.child("work").val();
  intake.value = snapshot.child("intake").val();
  home.value=snapshot.child("work").val();
  district.value=snapshot.child("district").val();
  misc.value=snapshot.child("misc").val();
  email.value=snapshot.child("email").val();  
  flName.value = snapshot.child("flName").val();
  bdate.value = snapshot.child("bdate").val();
  bgroup.value = snapshot.child("bgroup").val();
  });
}
  


document.getElementById("authform").addEventListener("submit", getname);
  function getname(e){
    e.preventDefault();
    const name = document.getElementById("namebox");
    const batch = document.getElementById("batch");
    const house = document.getElementById("house");
    const contact = document.getElementById("contact");
    const work = document.getElementById("work");
    const home = document.getElementById("home");
    const district = document.getElementById("district");
    const misc = document.getElementById("misc");
    const email = document.getElementById("email");
    const intake = document.getElementById("intake");
    const flName = document.getElementById("flName");
    const bdate = document.getElementById("bdate");
    const bgroup = document.getElementById("bgroup");
    
    
    const username = name.value;
    const userintake = intake.value;
    const userbatch = batch.value;
    const userhouse = house.value;
    const usercontact = contact.value;
    const userwork = work.value;
    const userhome = home.value;
    const userdistrict = district.value;
    const usermisc = misc.value;
    const useremail = email.value;
    const userflName = flName.value;
    const userbdate = bdate.value;
    const userbgroup = bgroup.value;
    const usercn = cn;
  

  if (usercn != ""){
    db.ref("info/" + cn).set({
      name: username,
      cn: usercn,
      batch: userbatch,
      house: userhouse,
      contact: usercontact,
      intake: userintake,
      work: userwork,
      home: userhome,
      district: userdistrict,
      email: useremail,
      misc: usermisc,
      flName: userflName,
      bdate: userbdate,
      bgroup: userbgroup,
    });
    alert("Information added");


  }
  else{
    alert("null");
  }


      

      
    
    
  }
