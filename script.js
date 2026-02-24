(() => {
  const trackEvent = (name, params = {}) => {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) {
      return;
    }

    const href = link.getAttribute("href") || "";
    if (href.startsWith("tel:")) {
      trackEvent("call_click", { phone: href.replace("tel:", "") });
    }

    if (href.startsWith("mailto:")) {
      trackEvent("email_click", { email: href.replace("mailto:", "") });
    }
  });

  document.addEventListener("submit", (event) => {
    const formElement = event.target;
    if (!(formElement instanceof HTMLFormElement)) {
      return;
    }

    const action = (formElement.getAttribute("action") || "").toLowerCase();
    if (action.includes("formsubmit.co")) {
      trackEvent("form_submit", { method: "formsubmit" });
    }
  });

  if (window.location.pathname.endsWith("/thanks.html")) {
    trackEvent("lead_thanks_view", { page: "/thanks.html" });
  }

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
