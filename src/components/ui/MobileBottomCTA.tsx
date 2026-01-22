"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import CONFIG from "@/lib/config";

export default function MobileBottomCTA() {
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <>
      <div className="stickyCta">
        <div className="stickyCta__inner">
          <Button
            href={CONFIG.PAYMENT_URL}
            variant="primary"
            trackLocation="sticky"
            className="stickyCta__btn stickyCta__btn--primary"
          >
            Pay ₦1,000,000 Now
          </Button>
          <button
            onClick={() => setShowCallModal(true)}
            className="stickyCta__btn stickyCta__btn--secondary"
          >
            Request Call
          </button>
        </div>
      </div>

      {/* Call Modal */}
      {showCallModal && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h3 className="modalContent__title">Request a Call</h3>
            <p className="modalContent__text">
              Scroll down to the callback form to request a call from our team.
            </p>
            <div className="modalContent__actions">
              <button
                onClick={() => {
                  setShowCallModal(false);
                  const form = document.getElementById("callback-form");
                  if (form) {
                    form.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
                className="btn btn--dark btn--full"
              >
                Go to Form
              </button>
              <button
                onClick={() => setShowCallModal(false)}
                className="btn btn--secondary btn--full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
