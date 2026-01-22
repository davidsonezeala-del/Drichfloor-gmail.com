"use client";

import { useState, FormEvent } from "react";
import { track } from "@/lib/analytics";
import CONFIG from "@/lib/config";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  preferredTime: string;
}

export default function CallbackFormSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    preferredTime: "Morning",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }

    const phoneRegex = /^[\d\s\-+()]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage("Please enter a valid phone number");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(CONFIG.CALL_REQUEST_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        track("callback_requested", { call_time: formData.preferredTime });

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          preferredTime: "Morning",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        "We couldn't submit your request right now. Please try calling us directly at " +
          CONFIG.CONTACT.PHONE,
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="callback-form" className="section">
      <div className="container" style={{ maxWidth: "48rem" }}>
        <div className="sectionHeading">
          <h2 className="sectionHeading__title">
            Prefer to Speak With Someone First?
          </h2>
          <p className="sectionHeading__subtitle">
            Request a callback and we'll reach out to answer all your questions.
          </p>
        </div>

        <div className="formCard">
          {submitStatus === "success" ? (
            <div className="formCard__success">
              <div className="formCard__successIcon">✓</div>
              <h3 className="formCard__successTitle">Request Received!</h3>
              <p className="formCard__successMessage">
                We'll call you during your preferred time. Talk soon!
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="formCard__successBtn"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="formCard__form">
              <div className="field">
                <label htmlFor="fullName" className="field__label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="field__input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email" className="field__label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="field__input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="phone" className="field__label">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="field__input"
                  placeholder="+234 XXX XXX XXXX"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="preferredTime" className="field__label">
                  Preferred Time for Call *
                </label>
                <select
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredTime: e.target.value })
                  }
                  className="field__input"
                  required
                >
                  <option value="Morning">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening">Evening (4 PM - 7 PM)</option>
                </select>
              </div>

              {errorMessage && (
                <div className="formCard__error">
                  <p>{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn--primary btn--full"
              >
                {isSubmitting ? "Submitting..." : "Request a Call"}
              </button>

              <p className="formCard__note">
                We'll reach out within 24 hours during business days.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
