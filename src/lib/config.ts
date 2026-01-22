// Configuration constants
export const CONFIG = {
  // Payment configuration
  PAYMENT_URL: "https://paystack.com/pay/PLACEHOLDER",

  // Callback form endpoint
  CALL_REQUEST_ENDPOINT: "https://example.com/submit",

  // Event details
  EVENT: {
    NAME: "Ghana Valentine's Experience 2026",
    START_DATE: "2026-02-13",
    END_DATE: "2026-02-15",
    PRICE: 1000000,
    CURRENCY: "₦",
    MAX_SLOTS: 30,
    LOCATIONS: ["Accra", "Aburi", "Cape Coast"],
  },

  // Contact information
  CONTACT: {
    PHONE: "08153675215",
    EMAIL: "rootedrootsafrica@ourheritagebranding.com",
    ORGANIZER: "Rooted Routes Africa",
    HOST: "Wilson Chibututu",
  },
} as const;

export default CONFIG;
