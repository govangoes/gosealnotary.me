(() => {
  const form = document.getElementById("appointment-form");
  const status = document.getElementById("form-status");
  const submitButton = form?.querySelector('button[type="submit"]');

  if (!form || !status) {
    return;
  }

  const setStatus = (message, isError = false) => {
    status.textContent = message;
    status.classList.toggle("error", isError);
  };

  form.addEventListener("submit", (event) => {
    setStatus("");

    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      setStatus("Please complete required fields before sending your request.", true);
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.setAttribute("aria-disabled", "true");
      submitButton.textContent = "Sending...";
    }

    setStatus("Sending request...");
  });
})();
