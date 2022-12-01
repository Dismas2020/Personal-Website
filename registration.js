

function pass() {

  
    const email = document.getElementById("emails");
    const password = document.getElementById("passwords");
    const userName = document.getElementById("usernames");
   
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
    
    if (userName.value == "") {
        userName.classList.add("alert");
      }
      else {
      
        userName.classList.remove("alert");
        
      }
    if (email.value !== "" && password.value !== ""){
      window.location.href = "Dashboard.html";
    }
    if (userName.value && email.value && password.value) {
      localStorage.setItem(userName.value, email.value, password.value);
    }
  }
  // function pass(){

  //   const email = document.getElementById("emails").value;
  //   const password = document.getElementById("passwords").value;
  //   const userName = document.getElementById("usernames").value;
  //   let user = {
  //       email: email,
  //       userName: userName,
  //       password: password,
  //   };
  //   for()
  //   let json = JSON.stringify(user);
  //   localStorage.setItem(userName,json);
  //   console.log("value added");
  // }
  