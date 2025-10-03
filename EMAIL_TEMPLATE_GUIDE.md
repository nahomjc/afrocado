# 📧 Email Template Customization Guide

## 🎨 How to Redesign Your Email Templates

There are several ways to customize the emails that get sent from your contact forms:

### **1. Formspree Dashboard Customization (Recommended)**

#### **Step 1: Access Your Formspree Dashboard**
1. Go to [formspree.io](https://formspree.io)
2. Log in to your account
3. Find your form (`movkwoyp`)
4. Click on **"Settings"** or **"Customize"**

#### **Step 2: Customize Email Templates**
In your Formspree dashboard, you can:

**A. Auto-Response Templates:**
- **Subject Line**: Customize what recipients see in their email subject
- **Message Content**: Write a personalized thank you message
- **Branding**: Add your logo and company colors

**B. Admin Notification Templates:**
- **Email Format**: Choose HTML or plain text
- **Subject Line**: Customize what you see when you receive submissions
- **Field Layout**: Reorganize how form data appears

### **2. Custom HTML Email Templates**

You can create custom HTML templates by updating your form configuration:

```typescript
// In your ContactSection.tsx, update the form submission:

body: JSON.stringify({
  name: formData.name,
  email: formData.email,
  message: formData.message,
  _subject: "🌱 New Inquiry - Afrocado Export Company",
  _replyto: formData.email,
  _template: "custom-template", // Custom template identifier
  _next: "https://your-website.com/thank-you", // Redirect after submission
}),
```

### **3. Professional Email Template Examples**

Here are some professional templates you can use:

#### **Template 1: Business Professional**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; background: #f9fafb; }
        .footer { background: #374151; color: white; padding: 20px; text-align: center; }
        .highlight { background: #ecfdf5; padding: 15px; border-left: 4px solid #10b981; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌱 AFROCADO EXPORT</h1>
            <p>Premium African Agricultural Products</p>
        </div>
        
        <div class="content">
            <h2>New Contact Form Submission</h2>
            
            <div class="highlight">
                <strong>From:</strong> {{name}}<br>
                <strong>Email:</strong> {{email}}<br>
                <strong>Date:</strong> {{_date}}
            </div>
            
            <h3>Message:</h3>
            <p>{{message}}</p>
            
            <hr style="margin: 30px 0;">
            
            <p><strong>Reply directly to this email to respond to the customer.</strong></p>
        </div>
        
        <div class="footer">
            <p>Afrocado Export Company | Premium African Agricultural Products</p>
            <p>Addis Ababa, Ethiopia | info@afrocado.com</p>
        </div>
    </div>
</body>
</html>
```

#### **Template 2: Modern Minimalist**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background: #f8fafc; }
        .email-container { max-width: 600px; margin: 20px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: #10b981; color: white; padding: 40px 30px; text-align: center; }
        .content { padding: 40px 30px; }
        .field { margin-bottom: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px; }
        .label { font-weight: 600; color: #475569; margin-bottom: 5px; }
        .value { color: #1e293b; }
        .message-box { background: #ecfdf5; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1 style="margin: 0; font-size: 28px;">🌱 Afrocado Export</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">New Customer Inquiry</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="label">Customer Name</div>
                <div class="value">{{name}}</div>
            </div>
            
            <div class="field">
                <div class="label">Email Address</div>
                <div class="value">{{email}}</div>
            </div>
            
            <div class="field">
                <div class="label">Submission Date</div>
                <div class="value">{{_date}}</div>
            </div>
            
            <div class="message-box">
                <div class="label">Message</div>
                <div class="value">{{message}}</div>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #fef3c7; border-radius: 8px; text-align: center;">
                <p style="margin: 0; color: #92400e;"><strong>💡 Reply directly to this email to respond to the customer</strong></p>
            </div>
        </div>
    </div>
</body>
</html>
```

### **4. Implementation Steps**

#### **Option A: Use Formspree's Built-in Editor**
1. Go to your Formspree dashboard
2. Navigate to **"Email Templates"**
3. Choose **"Custom HTML"**
4. Copy and paste one of the templates above
5. Customize the content and styling
6. Save and test

#### **Option B: Advanced Customization**
For more control, you can:

1. **Create Custom Templates** in Formspree
2. **Use Template Variables** like:
   - `{{name}}` - Customer's name
   - `{{email}}` - Customer's email
   - `{{message}}` - Customer's message
   - `{{_date}}` - Submission date
   - `{{_subject}}` - Form subject

### **5. Quick Action Templates**

You can also create specific templates for different form types:

#### **Product Catalog Request Template**
```html
<div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #065f46; margin-top: 0;">📋 Product Catalog Request</h3>
    <p><strong>Customer:</strong> {{name}}</p>
    <p><strong>Company:</strong> {{company}}</p>
    <p><strong>Business Interest:</strong> {{message}}</p>
</div>
```

#### **Call Scheduling Template**
```html
<div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #1e40af; margin-top: 0;">📞 Call Scheduling Request</h3>
    <p><strong>Customer:</strong> {{name}}</p>
    <p><strong>Preferred Date:</strong> {{preferredDate}}</p>
    <p><strong>Preferred Time:</strong> {{preferredTime}}</p>
    <p><strong>Discussion Topic:</strong> {{message}}</p>
</div>
```

### **6. Testing Your Templates**

1. **Preview** in Formspree dashboard
2. **Send test emails** to yourself
3. **Check mobile responsiveness**
4. **Verify all variables** are working

### **7. Best Practices**

- **Keep it professional** and on-brand
- **Make it mobile-friendly**
- **Include clear call-to-actions**
- **Use your brand colors** (#10b981 for green)
- **Test across different email clients**

Would you like me to help you implement any specific template or customize it further?
