
function validateForm() {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const number = document.getElementById("number").value.trim();
  const mail = document.getElementById("mail").value.trim();
  const mailRegex=/^[a-z0-9-_]+@[a-z0-9.-]+\.[a-z]{2,}/
  if (fname === "") {
    alert("First Name is required.");
    return false;
  }
  if (lname === "") {
    alert("Last Name is required.");
    return false;
  }
  if (number === "" || number.length != 10) {
    alert("Enter Valid Mobile Number");
    return false;
  }
  if(mail==="")
  {
    alert("Enter valid Mail");
  }
  if(mailRegex.test(mail)===false)
  {
    alert("Enter Valid Mail");
  }
document.getElementById("form").innerHTML="<h1> Thanks for contacting.</h1>"
}

