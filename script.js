document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const formElement = event.target;
    const formData = new FormData(formElement);
    formData.append("access_key", "88eeb5d1-5c86-48bf-bf34-b255452947af");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (res.ok) {
        const data = await res.json();
        formElement.reset();
        document.getElementById("successMessage").classList.remove("hidden");
      } else {
        console.error("Error:", res.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });

// Input Validation
const inputFields = document.querySelectorAll(".input-value");

inputFields.forEach((inputField) => {
  inputField.addEventListener("input", function () {
    if (this.checkValidity()) {
      this.classList.remove("invalidInput");
      this.classList.add("validInput");
    } else {
      this.classList.remove("validInput");
      this.classList.add("invalidInput");
    }
  });
});
