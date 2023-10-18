function handleSubmit() {
    let firstName = document.getElementById("firstname").value.trim();
    let lastName = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
  
    let errorParagraph = document.getElementById("error");
    errorParagraph.textContent = "";
  
    if (firstName === "") {
      alert("First name must not be empty");
      errorParagraph.textContent = "First name must not be empty";
      return false;
    }
  
    if (lastName === "") {
      alert("Last name must not be empty");
      errorParagraph.textContent = "Last name must not be empty";
      return false;
    }
  
    if (!email.match(/^.+@.+\..+$/)) {
      alert("Email is badly formatted");
      errorParagraph.textContent = "Email is badly formatted";
      return false;
    }
  
    if (password.length < 8 || !password.match(/^(?=.*[0-9])(?=.*[a-zA-Z]).*$/)) {
      alert("Password must be at least 8 characters long and contain at least a letter and a number");
      errorParagraph.textContent = "Password must be at least 8 characters long and contain at least a letter and a number";
      return false;
    }
  
    return true; 
  }
  