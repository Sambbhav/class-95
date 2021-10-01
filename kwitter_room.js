function adduser(){
  username=document.getElementById("logout").value;
  localStorage.setItem("logout",logout)
  window.location = "index.html";
}

function adduser(){
  username=document.getElementById("addroom").value;
  localStorage.setItem("addroom",addroom);
  window.location = "kwitter_added.html";
}

const firebaseConfig = {
    apiKey: "AIzaSyCb_TARtBRcJHtB8R6Y3o6uLFK0GX23aOE",
    authDomain: "lets-chat-web-app-99248.firebaseapp.com",
    projectId: "lets-chat-web-app-99248",
    storageBucket: "lets-chat-web-app-99248.appspot.com",
    messagingSenderId: "995617825401",
    appId: "1:995617825401:web:2f1f3ac2c03b149b6caaa8",
    measurementId: "G-6KSV05BGGZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row; 
 
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}