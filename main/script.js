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
  main();

  function main(){
    const fetchChat = db.ref("info/");
    fetchChat.on("child_added", function (snapshot) {
      const messages = snapshot.val();
        const msg = "<div onclick=\"load("+messages.cn+")\" class=\"cn"+messages.house+"\"> <img id=\""+messages.cn+"\" height=\"50\" width=\"50\"/> <font> "+ messages.name +"'"+messages.cn+" <font/></div>";
        document.getElementById("list").innerHTML += msg;
   
        storageRef.child(messages.cn+ ".jpg").getDownloadURL().then(function(url) {
         var img = document.getElementById(messages.cn);
         img.src = url;
         }).catch(function(error) {
           var img = document.getElementById(messages.cn);
           img.src = "./src/profile.png";
         });
    });

  }
  


 function load(cn){
  const fetchChat = db.ref("info/" +cn);
  fetchChat.once("value").then( function (snapshot) {
    const name = snapshot.child("name").val();
    
    document.getElementById("name").innerHTML = "Cadet "+ name;
    document.getElementById("cadetno").innerHTML = "Cadet no: "+ cn;
    document.getElementById("houseD").innerHTML = "House: "+ snapshot.child("house").val();
    document.getElementById("batch").innerHTML = "Batch: "+ snapshot.child("batch").val();
    document.getElementById("mobile").innerHTML = "Mobile: "+ snapshot.child("contact").val();
    document.getElementById("email").innerHTML = "Email: "+ snapshot.child("email").val() ;
    document.getElementById("work").innerHTML = snapshot.child("work").val();
    document.getElementById("intake").innerHTML = "Intake " + snapshot.child("intake").val();
    document.getElementById("address").innerHTML = "Address: "+ snapshot.child("home").val()+", "+ snapshot.child("district").val(); 
    document.getElementById("misc").innerHTML ="<br>"+ snapshot.child("flName").val() + "<br><br>Birthday:  "+ snapshot.child("bdate").val() + "<br><br> Blood Group: "+ snapshot.child("bgroup").val() + "<br><br> Misc. "+ snapshot.child("misc").val();
    const ele = document.getElementById("infoHC");
    const eleQ = document.getElementById("infoHCQ");
    const eleK = document.getElementById("infoHCK");
    

    switch (snapshot.child("house").val()){
      case "Qasim":
        ele.style.display = "none";
        eleK.style.display = "none";
        eleQ.style.display = "inline";
        
      
        
        break;
      case "Khalid":
        ele.style.display = "none";
        eleQ.style.display = "none";
        eleK.style.display = "inline";
        break;

      default:
        ele.style.display = "inline";
        eleK.style.display = "none";
        eleQ.style.display = "none";



    }
    

    storageRef.child(cn+ ".jpg").getDownloadURL().then(function(url) {
      var imgMain = document.getElementById("profile");
      imgMain.src = url;
      }).catch(function(error) {
        var imgMain = document.getElementById("profile");
        imgMain.src = "./src/profile.png";
      });

  });

 }

 function more(){
   document.getElementById("misc").style.display = "inline";
   document.getElementById("cont").style.textDecoration = "none";
   document.getElementById("more").style.textDecoration ="underline #f5b401 3px";
   document.getElementById("address").style.display = "none";
   document.getElementById("email").style.display = "none";
   document.getElementById("mobile").style.display = "none";
 }

 function cont(){
  document.getElementById("misc").style.display = "none";
  document.getElementById("cont").style.textDecoration = "underline #f5b401 3px";
  document.getElementById("more").style.textDecoration ="none";
  document.getElementById("address").style.display = "block";
  document.getElementById("email").style.display = "block";
  document.getElementById("mobile").style.display = "block";

 }

 function search(){
   var name = document.getElementById("search").value;
   if(name != ""){
    if(isNaN(name)){
      const refD = db.ref("info/");
      refD.orderByChild('name').equalTo(name).on("value", function(snapshot) {
          var title = document.getElementById("tcadet");
          var list = document.getElementById("list");
            while (list.hasChildNodes()) {
               list.removeChild(list.firstChild);
            }

            snapshot.forEach(function(data){
              const messages = data.val();
          const msg = "<div onclick=\"load("+messages.cn+")\" class=\"cn"+messages.house+"\"> <img id=\""+messages.cn+"\" height=\"50\" width=\"50\"/> <font> "+ messages.name +"'"+messages.cn+" <font/></div>";
          document.getElementById("list").innerHTML += msg;
     
          storageRef.child(messages.cn+ ".jpg").getDownloadURL().then(function(url) {
           var img = document.getElementById(messages.cn);
           img.src = url;
           }).catch(function(error) {
             var img = document.getElementById(messages.cn);
             img.src = "./src/profile.png";
           });

            });
            
          
        
          
        
    });
    refD.orderByChild('name').equalTo(name).on("value", function(snapshot) {
      if(snapshot.val()== null){
        alert("No Result");
      }else{}
  
    });
  
      
     }
     else{
       load(name);
     }

    }else{
      var list = document.getElementById("list");
            while (list.hasChildNodes()) {
               list.removeChild(list.firstChild);
            }
      main();
    }
  
 }
 function filter(){
   var batch = document.getElementById("flbatch").value;
   var housefl = document.getElementById("house").value;
   if(batch!=""){
     if(housefl == "All"){
      const refD = db.ref("info/");
      refD.orderByChild('batch').equalTo(batch).on("value", function(snapshot) {
        var title = document.getElementById("tcadet");
        var list = document.getElementById("list");
          while (list.hasChildNodes()) {
             list.removeChild(list.firstChild);
          }

          snapshot.forEach(function(data){
            const messages = data.val();
            const msg = "<div onclick=\"load("+messages.cn+")\" class=\"cn"+messages.house+"\"> <img id=\""+messages.cn+"\" height=\"50\" width=\"50\"/> <font> "+ messages.name +"'"+messages.cn+" <font/></div>";
            document.getElementById("list").innerHTML += msg;
      
            storageRef.child(messages.cn+ ".jpg").getDownloadURL().then(function(url) {
            var img = document.getElementById(messages.cn);
            img.src = url;
            }).catch(function(error) {
              var img = document.getElementById(messages.cn);
              img.src = "./src/profile.png";
            });
            

          });
      
  });
  refD.orderByChild('batch').equalTo(batch).on("value", function(snapshot) {
    if(snapshot.val()== null){
      alert("No Result");
    }

  });
      

     }
     else{
      const refD = db.ref("info/");
      refD.orderByChild('batch').equalTo(batch).on("value", function(snapshot) {
        var title = document.getElementById("tcadet");
        var list = document.getElementById("list");
          while (list.hasChildNodes()) {
             list.removeChild(list.firstChild);
          }
          snapshot.forEach(function(data){
            const messages = data.val();
            if(messages.house == housefl){
              const msg = "<div onclick=\"load("+messages.cn+")\" class=\"cn"+messages.house+"\"> <img id=\""+messages.cn+"\" height=\"50\" width=\"50\"/> <font> "+ messages.name +"'"+messages.cn+" <font/></div>";
            document.getElementById("list").innerHTML += msg;
      
            storageRef.child(messages.cn+ ".jpg").getDownloadURL().then(function(url) {
            var img = document.getElementById(messages.cn);
            img.src = url;
            }).catch(function(error) {
              var img = document.getElementById(messages.cn);
              img.src = "./src/profile.png";
            });

            }
            
            

          });


  });
  refD.orderByChild('batch').equalTo(batch).on("value", function(snapshot) {
    if(snapshot.val()== null){
      alert("No Result");
    }

  });

     }
   }else{
    const refD = db.ref("info/");
    refD.orderByChild('house').equalTo(housefl).on("value", function(snapshot) {
      var title = document.getElementById("tcadet");
      var list = document.getElementById("list");
        while (list.hasChildNodes()) {
           list.removeChild(list.firstChild);
        }

        snapshot.forEach(function(data){
          const messages = data.val();
          const msg = "<div onclick=\"load("+messages.cn+")\" class=\"cn"+messages.house+"\"> <img id=\""+messages.cn+"\" height=\"50\" width=\"50\"/> <font> "+ messages.name +"'"+messages.cn+" <font/></div>";
          document.getElementById("list").innerHTML += msg;
    
          storageRef.child(messages.cn+ ".jpg").getDownloadURL().then(function(url) {
          var img = document.getElementById(messages.cn);
          img.src = url;
          }).catch(function(error) {
            var img = document.getElementById(messages.cn);
            img.src = "./src/profile.png";
          });
          

        });
    
});
refD.orderByChild('house').equalTo(housefl).on("value", function(snapshot) {
  if(snapshot.val()== null){
    alert("No Result");
  }

});

   }
 }
