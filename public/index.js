// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.

     
//     var user = firebase.auth().currentUser;

//     if(user != null){

//       var email_id = user.email;
//       document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

//     }

//   } else {
//     // No user is signed in.

    

//   }
// });

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  // window.alert("Error : " );
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Welcome" );

    // ...
  });
  window.open("chat1.html","_self");
}

function logout(){
  firebase.auth().signOut();
}
