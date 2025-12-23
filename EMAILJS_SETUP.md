# EmailJS Setup Guide for Webinar Notifications

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" (100% FREE - 200 emails/month)
3. Sign up with your email or Google account

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or any email provider)
4. Connect your email account (the one that will send confirmations)
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set **Template Name**: "Webinar Registration Confirmation"
4. Use this template content:

### Subject:
```
✅ You're Registered for {{webinar_title}}!
```

### Body:
```html
Hi {{to_name}},

Great news! You've successfully registered for our upcoming webinar:

📚 Webinar: {{webinar_title}}
📅 Date: {{webinar_date}}
🕐 Time: {{webinar_time}}

Description:
{{webinar_description}}

What's Next?
- Check your email 5 minutes before the webinar starts
- Visit our webinar page to join: {{webinar_link}}
- When the session goes live, click "Join Live" and enter your registered email

Important Notes:
✅ Sessions are limited to 20 participants - you've secured your spot!
✅ Registration closes when the webinar starts
✅ Make sure to join on time to not miss out

Need help? Reply to this email or contact us at katisatechnologies@gmail.com

Best regards,
Katisa Technologies Team
Building tomorrow's AI solutions today.
```

4. Save the template
5. Copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find **Public Key**
3. Copy it (e.g., `abcd1234efgh5678`)

## Step 5: Update WebinarsPage.jsx

Open `src/pages/WebinarsPage.jsx` and update these values around line 115:

```javascript
await emailjs.send(
  'service_abc123', // ← Replace with your Service ID from Step 2
  'template_xyz789', // ← Replace with your Template ID from Step 3
  { /* template variables */ },
  'abcd1234efgh5678' // ← Replace with your Public Key from Step 4
);
```

## Step 6: Test It!

1. Register for a webinar on your website
2. Check the email inbox you provided
3. You should receive the confirmation email within seconds!

## Troubleshooting

### Email not received?
- Check spam/junk folder
- Verify Service ID, Template ID, and Public Key are correct
- Make sure EmailJS service is connected to your email
- Check browser console for error messages

### Rate Limit?
- Free tier: 200 emails/month
- Upgrade for more: $10/month for 1,000 emails

## Template Variables Available

These are automatically filled when sending:
- `{{to_name}}` - Registrant's name
- `{{to_email}}` - Registrant's email
- `{{webinar_title}}` - Webinar title
- `{{webinar_date}}` - Formatted date
- `{{webinar_time}}` - Formatted time
- `{{webinar_description}}` - Webinar description
- `{{webinar_link}}` - Link to webinars page

## Security Note

The Public Key is safe to expose in frontend code - it only allows sending emails, not reading or accessing your account.

---

**Need Help?** Email support@emailjs.com or check [EmailJS Documentation](https://www.emailjs.com/docs/)
