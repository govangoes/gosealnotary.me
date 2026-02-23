(() => {
  const form = document.getElementById("appointment-form");
  const status = document.getElementById("form-status");

  if (!form || !status) {
    return;
  }

  const getField = (name) => {
    const value = new FormData(form).get(name);
    return typeof value === "string" ? value.trim() : "";
  };

  const setStatus = (message, isError = false) => {
    status.textContent = message;
    status.classList.toggle("error", isError);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    setStatus("");

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Please complete required fields before sending your request.", true);
      return;
    }

    const name = getField("name");
    const preferredContact = getField("preferred_contact");
    const serviceType = getField("service_type");
    const preferredDate = getField("preferred_date") || "Not specified";
    const preferredTime = getField("preferred_time") || "Not specified";
    const message = getField("message");

    const subject = `Appointment Request - ${name || "GoSeal Notary"}`;
    const body = [
      "New appointment request from gosealnotary.me",
      "",
      `Name: ${name}`,
      `Preferred Contact: ${preferredContact}`,
      `Service Type: ${serviceType}`,
      `Preferred Date: ${preferredDate}`,
      `Preferred Time: ${preferredTime}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailtoUrl = `mailto:info@gosealnotary.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus("Opening your email app...");
    window.location.href = mailtoUrl;

    window.setTimeout(() => {
      setStatus(
        "If no email app opens, call/text (407) 000-0000 or email info@gosealnotary.me.",
      );
    }, 1800);
  });
})();
