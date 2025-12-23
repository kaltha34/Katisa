# EmailJS Setup Guide for Webinar Notifications with OTP Verification

## Overview

This webinar system uses **two separate email templates**:
1. **OTP Verification** - For email verification before registration
2. **Registration Confirmation** - For webinar details after successful registration

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" (100% FREE - 200 emails/month)
3. Sign up with your email or Google account

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or any email provider)
4. Connect your email account and grant "Send email on your behalf" permission
5. Copy the **Service ID**: `service_jnqvdcz`

## Step 3: Create OTP Verification Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set **Template Name**: "OTP Verification"

### Subject:
```
🔐 Your Verification Code
```

### Body:
```
Hi {{to_name}},

Your email verification code is:

{{otp_code}}

This code will expire in 5 minutes.

Please enter this code in the registration form to verify your email address.

If you didn't request this code, please ignore this email.

Best regards,
Katisa Technologies Team
```

4. Save the template
5. Copy the **Template ID**: `template_l14v6m1`

## Step 4: Create Registration Confirmation Template

1. Click **Create New Template** again
2. Set **Template Name**: "Webinar Registration Confirmation"

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
5. Copy the **Template ID**: `template_nq9ly35`

## Step 5: Get Public Key

## Step 6: Configuration Summary

All configurations are already set in the code:

- **Service ID**: `service_jnqvdcz`
- **OTP Template ID**: `template_l14v6m1`
- **Registration Template ID**: `template_nq9ly35`
- **Public Key**: `AjK9HQim3RbpwOLW9`

## How It Works

### Registration Flow

1. **User fills registration form** → Enters name, email, phone, university
2. **User clicks "Verify Email"** → System sends OTP to email
3. **OTP Email sent** → User receives 6-digit code (expires in 5 minutes)
4. **User enters OTP** → System verifies code
5. **Email verified ✅** → Button changes to green checkmark
6. **User completes registration** → System checks for duplicates
7. **Confirmation email sent** → User receives full webinar details

### Security Features

✅ **OTP Verification** - Only valid email addresses can register  
✅ **5-minute expiration** - OTP codes expire for security  
✅ **Duplicate prevention** - Same email/phone can't register twice for same webinar  
✅ **Email verification required** - Registration button disabled until verified  
✅ **Access control** - Only registered emails can join live sessions  

## Template Variables

### OTP Template (`template_l14v6m1`)
- `{{to_name}}` - User's name
- `{{to_email}}` - User's email
- `{{otp_code}}` - 6-digit verification code

### Registration Template (`template_nq9ly35`)
- `{{to_name}}` - User's name
- `{{to_email}}` - User's email
- `{{webinar_title}}` - Webinar title
- `{{webinar_date}}` - Formatted date
- `{{webinar_time}}` - Formatted time
- `{{webinar_description}}` - Webinar description
- `{{webinar_link}}` - Link to webinars page

## Step 7: Test It!

1. Go to your website's webinar page
2. Click "Register Now" for any webinar
3. Fill in your name and email
4. Click "Verify Email" button
5. Check your email inbox for OTP code
6. Enter the 6-digit code in the popup
7. Click "Verify Code"
8. Complete the registration form
9. Click "Complete Registration"
10. Check your email for confirmation with webinar details!

## Troubleshooting
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
