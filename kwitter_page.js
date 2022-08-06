//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDcP53-o2vhQJLOocequ8rclU_d92jCE00",
      authDomain: "kwitter-f47b4.firebaseapp.com",
      databaseURL: "https://kwitter-f47b4-default-rtdb.firebaseio.com",
      projectId: "kwitter-f47b4",
      storageBucket: "kwitter-f47b4.appspot.com",
      messagingSenderId: "471886162640",
      appId: "1:471886162640:web:dc3fca54bd18b222f54cd5",
      measurementId: "G-QKLL0RCDEC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      massage:msg,
      like:0
});
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log("firebase_message_id");
console.log("message_data");

name = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_with_tag = "<h4>"+name+"</h4>"
message_with_tag = "<h4>"+message+"</h4>"
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes :"+ like +"</button>";

row = name_with_tag + message_with_tag + like_button;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updateLike(message_id){
console.log("click on lika button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updates_likes = Number(likes) + 1;
console.log(updates_likes);


firebase.database().ref(room_name).child(message_id).update({
like : updates_likes
});






}