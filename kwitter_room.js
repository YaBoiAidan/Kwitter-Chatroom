// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDCNHnRVYVW0jc11jfthNdCRliYp3vamiQ",
      authDomain: "classtest-3bf53.firebaseapp.com",
      databaseURL: "https://classtest-3bf53-default-rtdb.firebaseio.com",
      projectId: "classtest-3bf53",
      storageBucket: "classtest-3bf53.appspot.com",
      messagingSenderId: "668346439116",
      appId: "1:668346439116:web:8260f9956a64f741537969"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

      function addRoom()
      {
            room_name =  document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({purpose:"Adding Room Name"});
            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";
      }

function getData()
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
            console.log("Room name -" + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomname('this.id')'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML +=row;
      //End code
      });});}

getData();

function redirectToRoomname(name)
{
console.log(name);
localStorage.setItem("Room_name", name);
window.location = "kwitter_room.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "login.html";
}

