document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("nameError").innerText = "";
  document.getElementById("messageError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("emailError").innerText = "";

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  if (!name) {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  const message = document.getElementById("message").value.trim();
  if (message.length < 5) {
    document.getElementById("messageError").innerText = "Message must be at least 5 characters";
    isValid = false;
  }

  const phone = document.getElementById("phone").value.trim();
  const phonePattern = /^\+380\d{9}$/;
  if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").innerText = "Phone number must start with +380 and be followed by 9 digits";
    isValid = false;
  }

  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Email must be valid";
    isValid = false;
  }

  if (isValid) {
    console.log({
      name: name,
      message: message,
      phone: phone,
      email: email,
    });
    alert("Message sent successfully!");
  }
});
