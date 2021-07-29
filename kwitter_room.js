
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD5yhjGhtEVmGLVrbGSpLrN5RoBhU4Vut4",
      authDomain: "kwitter-2a45c.firebaseapp.com",
      databaseURL: "https://kwitter-2a45c-default-rtdb.firebaseio.com",
      projectId: "kwitter-2a45c",
      storageBucket: "kwitter-2a45c.appspot.com",
      messagingSenderId: "751100511843",
      appId: "1:751100511843:web:eded76e4d1337ebb455a56",
      measurementId: "G-L1X0EWNP7C"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name + "!";

  
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData()
 {
       firebase.database().ref("/").on('value', function(snapshot)
        {
      document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) 
        {
              childKey  = childSnapshot.key;
       Room_names = childKey;

      console.log("room name" + Room_names);
      row="<div class='room_name' id="+ Room_names +"onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});
}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
