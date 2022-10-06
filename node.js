const firebaseConfig = {
    apiKey: "AIzaSyCNBQFWZs5aHRUdMddKF2JJ8jFJjUI10Vs",
    authDomain: "form-1adae.firebaseapp.com",
    databaseURL: "https://form-1adae-default-rtdb.firebaseio.com",
    projectId: "form-1adae",
    storageBucket: "form-1adae.appspot.com",
    messagingSenderId: "216175815740",
    appId: "1:216175815740:web:d4622574989eb66d4a2739"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.database().ref("loginform")
  
  var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "bl ock";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
