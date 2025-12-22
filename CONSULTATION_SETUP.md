# Consultation Booking Setup Guide

## ✅ How It Works

**When a user books from your website:**

1. They select a time slot from YOUR available calendar
2. Appointment is **automatically added to katisatechnologies@gmail.com calendar**
3. You get an email notification
4. User gets confirmation email
5. Both parties get reminders

**You manage everything from one place - your Google Calendar!**

---

## Quick Setup with Calendly (5 minutes)

### Step 1: Create Calendly Account with Your Business Email

1. Go to [https://calendly.com/signup](https://calendly.com/signup)
2. **Sign up with: katisatechnologies@gmail.com** ⚠️ Important!
3. Click "Continue with Google" and select katisatechnologies@gmail.com
4. This connects your Google Calendar automatically

### Step 2: Set Up Your Availability

1. In Calendly dashboard, go to "Event Types"
2. Click "Create New Event Type"
3. Choose "One-on-One"
4. Configure:
   - **Name:** "Free Consultation"
   - **Duration:** 30 minutes (or 60 minutes)
   - **Location:** Google Meet (automatically creates meeting link)
   - **Your availability:** Set when you're free (e.g., Mon-Fri, 9 AM - 6 PM)

### Step 3: Copy Your Scheduling Link

1. Click on your event type
2. Click "Copy Link"
3. Your link will look like: `https://calendly.com/katisatechnologies/30min`

### Step 4: Update the Website Code

1. Open `src/components/ui/ConsultationBooking.jsx`
2. Find line 69: `data-url="https://calendly.com/YOUR_CALENDLY_USERNAME/30min`
3. Replace with your actual link:
   ```javascript
   data-url="https://calendly.com/katisatechnologies/30min?hide_event_type_details=1&hide_gdpr_banner=1"
   ```
4. Save the file
5. Commit and push changes

---

## What Happens When Someone Books

### For the User (Visitor):

1. Visits your website's `/book-consultation` page
2. Sees YOUR real-time availability
3. Selects a date/time
4. Enters their name and email
5. Clicks "Schedule Event"
6. ✅ Receives confirmation email with Google Meet link

### For You (katisatechnologies@gmail.com):

1. 📧 Instant email notification: "New event scheduled"
2. 📅 Event automatically added to your Google Calendar
3. 🔗 Google Meet link automatically created
4. ⏰ Reminder notifications before the meeting
5. 📊 View all bookings in Calendly dashboard

**No manual work needed!** Everything is automatic.

## Alternative Options

### Option 2: Google Calendar Appointment Schedules (Free)

1. Open Google Calendar
2. Click "+" next to "Other calendars"
3. Select "Appointment schedule"
4. Set your availability and booking page
5. Share the booking page link

### Option 3: Cal.com (Open Source Alternative)

- Similar to Calendly but open source
- More customization options
- Self-hosted option available
- Visit [https://cal.com](https://cal.com)

## Benefits of This Approach

✅ **Automatic sync** - Meetings added to both calendars
✅ **No double-booking** - System checks your availability
✅ **Email reminders** - Automatic reminders to both parties  
✅ **Time zone handling** - Automatically shows correct times
✅ **Professional** - Branded booking experience
✅ **Free tier available** - No cost to get started
✅ **Easy rescheduling** - Clients can reschedule themselves

## Customization Tips

- Add custom questions in Calendly (project budget, timeline, etc.)
- Set up different meeting types (15min quick call, 60min deep dive)
- Add team members for round-robin scheduling
- Integrate with Zoom/Google Meet for automatic video links
- Collect payment upfront for consultations (paid plans)

## Support

If you need help setting this up, contact:

- Email: katisatechnologies@gmail.com
- Phone: +94 72 595 0375
