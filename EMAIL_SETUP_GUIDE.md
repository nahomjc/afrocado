# 📧 Email Form Setup Guide

## 🆓 Free Email Services for Contact Forms

I've set up your contact forms to work with **Formspree** (recommended), but here are all the free options:

### 1. **Formspree** (Currently Implemented)
- **Free Tier**: 50 submissions/month
- **Setup**: 
  1. Go to [formspree.io](https://formspree.io)
  2. Sign up for free account
  3. Create a new form
  4. Copy the form ID (e.g., `xrgkqyab`)
  5. Replace `YOUR_FORM_ID` in `/src/app/config/forms.ts`

### 2. **Web3Forms** (Unlimited Free)
- **Free Tier**: Unlimited submissions
- **Setup**:
  1. Go to [web3forms.com](https://web3forms.com)
  2. Get your access key
  3. Update the endpoint in forms config

### 3. **EmailJS** (200 emails/month)
- **Free Tier**: 200 emails/month
- **Setup**: More complex but very flexible

### 4. **Netlify Forms** (If hosting on Netlify)
- **Free Tier**: 100 submissions/month
- **Setup**: Automatic if hosting on Netlify

## 🔧 Setup Instructions

### Step 1: Choose Your Service
For **Formspree** (recommended):

1. **Sign up** at [formspree.io](https://formspree.io)
2. **Create a form** and get your form ID
3. **Update the config file**:

```typescript
// In /src/app/config/forms.ts
export const FORM_CONFIG = {
  CONTACT_FORM_ID: 'your_actual_form_id_here', // Replace this
  CATALOG_FORM_ID: 'your_actual_form_id_here', // Can be same or different
  SCHEDULE_FORM_ID: 'your_actual_form_id_here',
  SAMPLES_FORM_ID: 'your_actual_form_id_here',
};
```

### Step 2: Test Your Forms
1. **Deploy your site** or run locally
2. **Submit test messages** from each form
3. **Check your email** for submissions
4. **Verify all Quick Actions** work (Catalog, Schedule, Samples)

## 📋 What Each Form Sends

### Main Contact Form:
- Name, Email, Message
- Subject: "New Contact Form Submission - Afrocado Website"

### Quick Actions:
- **Catalog Request**: All form fields + action type
- **Schedule Call**: All fields + preferred date/time
- **Request Samples**: All fields + product interest + shipping address

## 🛠️ Alternative Setup (Web3Forms)

If you prefer unlimited free submissions:

1. Go to [web3forms.com](https://web3forms.com)
2. Get your access key
3. Update the config:

```typescript
// Alternative Web3Forms setup
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = 'your_access_key_here';
```

## ✅ Features Included

- ✅ **Form Validation**: Required fields and email format
- ✅ **Loading States**: Visual feedback during submission
- ✅ **Error Handling**: User-friendly error messages
- ✅ **Success Messages**: Confirmation after successful submission
- ✅ **Spam Protection**: Built-in with Formspree
- ✅ **Professional Emails**: Proper formatting and subjects

## 🎯 Next Steps

1. **Choose your email service**
2. **Update the form IDs** in the config file
3. **Test all forms**
4. **Set up email notifications** (automatic with Formspree)

Your contact forms are now ready to receive real submissions! 🚀
