# Google Ads & Analytics Setup Guide

This guide will help you set up Google Analytics and link it with Google Ads for conversion tracking.

## Step 1: Set Up Google Analytics 4 (GA4)

### 1.1 Create a GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon) in the bottom left
3. In the **Property** column, click **Create Property**
4. Fill in:
   - Property name: "Feather AI Website" (or your preferred name)
   - Reporting time zone
   - Currency
5. Click **Next**

### 1.2 Set Up Data Stream
1. Select **Web** as your platform
2. Enter your website URL: `https://feathersai.app`
3. Enter a stream name: "Feather Website"
4. Click **Create stream**

### 1.3 Get Your Measurement ID
1. After creating the stream, you'll see your **Measurement ID**
2. Format: `G-XXXXXXXXXX` (starts with G-)
3. **Copy this ID** - you'll need it for the next steps

### 1.4 Add Measurement ID to Your Site
1. Open `src/config/featherConfig.js`
2. Update the analytics section:
   ```javascript
   analytics: {
     enabled: true,
     measurementId: 'G-XXXXXXXXXX' // Paste your Measurement ID here
   }
   ```
3. Deploy your changes

## Step 2: Link Google Ads with Google Analytics

### 2.1 Link Accounts
1. Go to [Google Ads](https://ads.google.com/)
2. Click the **Tools & Settings** icon (wrench) in the top right
3. Under **Setup**, click **Linked accounts**
4. Find **Google Analytics (GA4)** and click **Details**
5. Click **Link** next to your GA4 property
6. Select the GA4 property you created
7. Enable **Import site metrics** (optional but recommended)
8. Click **Link**

### 2.2 Enable Auto-Tagging (Important!)
1. In Google Ads, go to **Settings** > **Account settings**
2. Scroll to **Auto-tagging**
3. Make sure **Tag the URL that people click through from my ad** is **ON**
4. This allows Google Ads to track which ads lead to conversions

## Step 3: Set Up Conversion Tracking

### 3.1 Create Conversion Event in Google Analytics
1. Go to Google Analytics
2. Click **Admin** (gear icon)
3. Under **Property**, click **Events**
4. Click **Create event**
5. Create a new event based on the existing `email_signup` event:
   - **Custom event name**: `email_signup_conversion`
   - **Matching conditions**: 
     - Event name: `email_signup`
   - Click **Create**

### 3.2 Mark Event as Conversion
1. In Google Analytics, go to **Admin** > **Events**
2. Find your `email_signup` event
3. Toggle the **Mark as conversion** switch to **ON**
4. This tells GA4 to count this as a conversion

### 3.3 Import Conversion to Google Ads
1. Go to Google Ads
2. Click **Tools & Settings** > **Conversions**
3. Click the **+** button to add a new conversion
4. Select **Import** tab
5. Choose **Google Analytics (GA4)**
6. Select your GA4 property
7. Find and select **email_signup** event
8. Click **Import and continue**
9. Configure:
   - **Conversion name**: "Email Signup" (or your preferred name)
   - **Category**: "Sign-up"
   - **Value**: Set if you want to track value (optional)
   - **Count**: "One" (each signup counts once)
   - **Click-through window**: 30 days (default)
   - **View-through window**: 1 day (default)
10. Click **Done**

## Step 4: Set Up Conversion Action in Google Ads (Alternative Method)

If you prefer to create the conversion directly in Google Ads:

1. Go to Google Ads > **Tools & Settings** > **Conversions**
2. Click the **+** button
3. Select **Website**
4. Fill in:
   - **Conversion name**: "Email Signup"
   - **Category**: "Sign-up"
   - **Value**: Optional
   - **Count**: "One"
   - **Click-through window**: 30 days
5. Click **Create and continue**
6. Choose **Use Google Tag Manager** or **Install the tag yourself**
7. If installing yourself, you'll get a conversion ID and label
8. **Note**: The current setup uses GA4, so importing from GA4 (Step 3.3) is recommended

## Step 5: Verify Your Setup

### 5.1 Test Conversion Tracking
1. Visit your site: `https://feathersai.app/signup`
2. Submit a test email signup
3. Wait a few minutes
4. Check Google Analytics:
   - Go to **Reports** > **Realtime**
   - You should see the `email_signup` event
5. Check Google Ads:
   - Go to **Tools & Settings** > **Conversions**
   - Check if conversions are being recorded (may take 24-48 hours to show)

### 5.2 Verify in Google Ads
1. Go to Google Ads
2. Click **Tools & Settings** > **Conversions**
3. Click on your conversion action
4. Check the **Status** - it should show "Recording conversions"

## Step 6: Use Conversion Data in Campaigns

### 6.1 View Conversions in Campaigns
1. In Google Ads, go to your campaign
2. Add the **Conversions** column to see conversion data
3. You can optimize campaigns based on conversion performance

### 6.2 Set Up Conversion-Based Bidding (Optional)
1. In your campaign settings
2. Under **Bidding**, select **Maximize conversions** or **Target CPA**
3. This will optimize your ads to get more conversions

## Important URLs for Google Ads

- **Main Landing Page**: `https://feathersai.app/`
- **Signup Page (for conversion tracking)**: `https://feathersai.app/signup`

Use the `/signup` route as your conversion destination URL in Google Ads campaigns.

## Troubleshooting

### Conversions Not Showing
- Wait 24-48 hours for data to appear
- Verify the Measurement ID is correct in your config
- Check that `analytics.enabled` is set to `true`
- Verify the event is firing in Google Analytics Realtime reports
- Make sure auto-tagging is enabled in Google Ads

### Event Not Firing
- Check browser console for errors
- Verify Google Analytics script is loading (check Network tab)
- Test with Google Analytics DebugView (requires GA Debugger extension)

## Additional Resources

- [Google Analytics Help](https://support.google.com/analytics)
- [Google Ads Help](https://support.google.com/google-ads)
- [GA4 Events Documentation](https://support.google.com/analytics/answer/9267735)
