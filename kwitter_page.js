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
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        

                        //End code
                  }
            });
      });
}
getData();

function log_out() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html"
}


function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            room: room_name,
      });
}
