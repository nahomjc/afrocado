// Form configuration for email handling
// Replace 'YOUR_FORM_ID' with your actual Formspree form ID

export const FORM_CONFIG = {
  // Main contact form
  CONTACT_FORM_ID: "movkwoyp",

  // Quick actions forms (using same form ID for simplicity)
  CATALOG_FORM_ID: "movkwoyp",
  SCHEDULE_FORM_ID: "movkwoyp",
  SAMPLES_FORM_ID: "movkwoyp",
};

// Formspree endpoints
export const FORMPREE_ENDPOINTS = {
  CONTACT: `https://formspree.io/f/${FORM_CONFIG.CONTACT_FORM_ID}`,
  CATALOG: `https://formspree.io/f/${FORM_CONFIG.CATALOG_FORM_ID}`,
  SCHEDULE: `https://formspree.io/f/${FORM_CONFIG.SCHEDULE_FORM_ID}`,
  SAMPLES: `https://formspree.io/f/${FORM_CONFIG.SAMPLES_FORM_ID}`,
};

// Alternative free email services (if you want to switch)
export const EMAIL_SERVICES = {
  // Formspree - 50 free submissions/month
  FORMPREE: "https://formspree.io",

  // Web3Forms - Unlimited free submissions
  WEB3FORMS: "https://web3forms.com",

  // EmailJS - 200 free emails/month
  EMAILJS: "https://www.emailjs.com",

  // Netlify Forms - 100 free submissions/month (if hosting on Netlify)
  NETLIFY_FORMS: "https://docs.netlify.com/forms/setup/",
};
