const firebaseConfig = {
      apiKey: "AIzaSyCozMsNDjwYxPMv7_If5HICDr39O1YdzyM",
      authDomain: "kwitterapp-b37d2.firebaseapp.com",
      databaseURL: "https://kwitterapp-b37d2-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-b37d2",
      storageBucket: "kwitterapp-b37d2.appspot.com",
      messagingSenderId: "802848883865",
      appId: "1:802848883865:web:92cc4eb080fe94477ae408"
};

firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById(user_name).innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name: " + Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)> #" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}