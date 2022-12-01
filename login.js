

function pass() {
  const email = document.getElementById("emails");
  const password = document.getElementById("passwords");
 
  if (email.value == "") {
    email.classList.add("alert");
  }
  else {
    email.classList.remove("alert");
  }

  if (password.value == "") {
    password.classList.add("alert");
  }
  else {
  
    password.classList.remove("alert");
    
  }
  if (email.value !== "" && password.value !== ""){
    window.location.href = "Dashboard.html";
  }


}

// function pass(e) {
//   event.preventDefault();
//   const email = document.getElementById("emails").value;
//   const password = document.getElementById("passwords").value;
 

//   const user = localStorage.getItem(email);
//   const data = JSON.parse(user);
//   console.log(data);
// }