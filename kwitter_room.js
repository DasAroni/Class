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
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name

function addRoom() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();


function redirectToRoomName(name) {

      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}




