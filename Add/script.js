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
  


document.getElementById("authform").addEventListener("submit", getname);
  function getname(e){
    e.preventDefault();
    const name = document.getElementById("namebox");
    const cn = document.getElementById("cn");
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
    const usercn = cn.value;
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
  name.value = "";
  cn.value = "";
  contact.value="";
  work.value="";
  home.value="";
  district.value="";
  misc.value="";
  email.value="";  
  flName.value = "";
  bdate.value = "";
  bgroup.value = "";

  if (usercn != ""){
    db.ref("info/" + usercn).set({
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
