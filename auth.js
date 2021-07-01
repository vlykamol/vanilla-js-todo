//get data
db.collection('todos').get().then(snapshot => {
  // console.log(snapshot.docs);
})

var logindivs = document.getElementsByClassName('logged-in');
var logoutdivs = document.getElementsByClassName('logged-out');
//listen for auth status changes
auth.onAuthStateChanged(user => {
  if(user){
    console.log("user logged in", user);
    for (var i = 0; i < logindivs.length; i++) {
      logindivs[i].style.display = 'block';
    }
    for (var i = 0; i < logoutdivs.length; i++) {
      logoutdivs[i].style.display = 'none';
    }
  }else{
    console.log("user logged out");
    for (var i = 0; i < logoutdivs.length; i++) {
      logoutdivs[i].style.display = 'block';
    }
    for (var i = 0; i < logindivs.length; i++) {
      logindivs[i].style.display = 'none';
    }
  }
})

//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = signupForm['first-name'].value;
  const lastName = signupForm['last-name'].value;
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // console.log(firstName, lastName, email, password);
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    signupForm.reset();
    signupdiv.style.display = "none";
  })
});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

//login
const signinForm = document.querySelector('#signin-form');
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signin_email = signinForm['signin-email'].value;
  const signin_password = signinForm['signin-password'].value;
  auth.signInWithEmailAndPassword(signin_email, signin_password).then(cred => {
    signinForm.reset();
    signindiv.style.display = "none";
  })
})

