document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const messageBox = document.getElementById("form-message");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const surname = document.getElementById("surname").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      let errors = [];
  
      if (name === "") errors.push("Lūdzu, ievadiet vārdu.");
      if (surname === "") errors.push("Lūdzu, ievadiet uzvārdu.");
      if (!validateEmail(email)) errors.push("Lūdzu, ievadiet derīgu e-pastu.");
      if (message === "") errors.push("Lūdzu, ievadiet ziņojumu.");
  
      if (errors.length > 0) {
        messageBox.innerHTML = errors.map(e => `<p>${e}</p>`).join("");
        messageBox.style.color = "red";
      } else {
        messageBox.innerHTML = "Nosūtīts veiksmīgi!";
        messageBox.style.color = "green";
        form.reset();
      }
    });
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  