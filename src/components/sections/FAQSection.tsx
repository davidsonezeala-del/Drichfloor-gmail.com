"use client";

import { faqData } from "@/data/content";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="sectionHeading">
          <h2 className="sectionHeading__title">Frequently Asked Questions</h2>
          <p className="sectionHeading__subtitle">
            Everything you need to know about the experience.
          </p>
        </div>

        <div className="faqList">
          {faqData.map((faq, index) => (
            <div key={index} className="faqItem">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="faqItem__question"
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span
                  className="faqItem__icon"
                  style={{
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ↓
                </span>
              </button>

              <div
                className="faqItem__answer"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0px",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
