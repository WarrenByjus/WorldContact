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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4> "+ name +"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value"+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();


function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_like = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id),update({
    like : updated_likes
  });
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}