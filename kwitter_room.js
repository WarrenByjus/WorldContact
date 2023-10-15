var firebaseConfig = {
      apiKey: "AIzaSyBQ22KSS7JZ-E4ki68vPoOAL6VEl6ZLv5M",
      authDomain: "kwitter-507e4.firebaseapp.com",
      databaseURL: "https://kwitter-507e4-default-rtdb.firebaseio.com",
      projectId: "kwitter-507e4",
      storageBucket: "kwitter-507e4.appspot.com",
      messagingSenderId: "562069746466",
      appId: "1:562069746466:web:4705385d4e3ef476566b7b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) >#"+ Room_names +"<div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}