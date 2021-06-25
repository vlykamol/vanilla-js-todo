//signup

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = signupForm['first-name'].value;
  const lastName = signupForm['last-name'].value;
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  console.log(firstName, lastName, email, password);
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    signupForm.reset();
    signupdiv.style.display = "none";
  })
});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('signed out');
  })
});

//login
const signinForm = document.querySelector('#signin-form');
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signin_email = signinForm['signin-email'].value;
  const signin_password = signinForm['signin-password'].value;
  auth.signInWithEmailAndPassword(signin_email, signin_password).then(cred => {
    console.log(cred.user);
    signinForm.reset();
    signindiv.style.display = "none";
  })
})
