# Setting Up GA4 in Google Tag Manager

## Your IDs
- **GTM Container ID**: `GTM-PH7R9KK2`
- **GA4 Measurement ID**: `G-WYBEDD4680`

## Important: Do NOT Add GA4 Script Directly

Since we're using Google Tag Manager, **do not** add the gtag.js script directly to your HTML. Instead, configure GA4 as a tag within GTM. This gives you:
- Better control and management
- No code changes needed for future updates
- Centralized tag management
- Better performance

## Step-by-Step: Configure GA4 in GTM

### 1. Create GA4 Configuration Tag

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Select your container: `GTM-PH7R9KK2`
3. Click **Tags** in the left sidebar
4. Click **New** to create a new tag
5. Click on **Tag Configuration**
6. Select **Google Analytics: GA4 Configuration**
7. Enter your **Measurement ID**: `G-WYBEDD4680`
8. Click **Triggering**
9. Select **All Pages** (this fires on every page load)
10. Name your tag: `GA4 - Configuration`
11. Click **Save**

### 2. Create GA4 Event Tag for waitlist_submit

1. In GTM, click **Tags** > **New**
2. Click **Tag Configuration**
3. Select **Google Analytics: GA4 Event**
4. Enter your **Measurement ID**: `G-WYBEDD4680`
5. Enter **Event Name**: `waitlist_submit`
6. (Optional) Add Event Parameters:
   - `event_category`: `conversion`
   - `event_label`: `{{Event Label}}` (if you want to capture the source)
   - `value`: `1`
7. Click **Triggering**
8. Click **+** to create a new trigger
9. Select **Custom Event**
10. Enter **Event name**: `waitlist_submit`
11. Name the trigger: `waitlist_submit - Conversion`
12. Click **Save**
13. Name your tag: `GA4 - waitlist_submit Event`
14. Click **Save**

### 3. Test Your Setup

1. Click **Preview** in GTM
2. Enter your website URL: `https://feathersai.app` (or your dev URL)
3. Submit the waitlist form
4. In GTM Preview, you should see:
   - `GA4 - Configuration` tag fires on page load
   - `waitlist_submit` event appears in the dataLayer
   - `GA4 - waitlist_submit Event` tag fires when form is submitted

### 4. Publish Your Container

1. Once testing is successful, click **Submit** in GTM
2. Add a version name: `GA4 Configuration and waitlist_submit tracking`
3. Add a description (optional)
4. Click **Publish**

### 5. Verify in Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Navigate to **Reports** > **Realtime**
3. Submit the waitlist form on your site
4. You should see the `waitlist_submit` event appear within seconds

### 6. Mark as Conversion in GA4

1. In Google Analytics, go to **Admin** (gear icon)
2. Under **Property**, click **Events**
3. Find `waitlist_submit` in the list
4. Toggle **Mark as conversion** to **ON**

### 7. Import to Google Ads

1. Go to [Google Ads](https://ads.google.com/)
2. Click **Tools & Settings** > **Conversions**
3. Click the **+** button
4. Select **Import** tab
5. Choose **Google Analytics (GA4)**
6. Select your GA4 property
7. Find and select **waitlist_submit** event
8. Click **Import and continue**
9. Configure:
   - **Conversion name**: "Waitlist Signup"
   - **Category**: "Sign-up"
   - **Value**: Optional
   - **Count**: "One"
10. Click **Done**

## Why Use GTM Instead of Direct Script?

✅ **Benefits:**
- No code changes needed for future tag updates
- Easy to add/remove tags without deploying
- Better debugging with Preview mode
- Centralized management
- Can add multiple tags (GA4, Facebook Pixel, etc.) without cluttering code

❌ **If you add gtag.js directly:**
- Would conflict with GTM
- Harder to manage
- Requires code changes for updates
- Less flexible

## Current Implementation

Your site is already set up correctly:
- ✅ GTM is loaded in `index.html`
- ✅ `waitlist_submit` event fires to dataLayer on successful form submission
- ✅ Page views are tracked automatically

You just need to configure the GA4 tags in GTM (steps above).

## Troubleshooting

### Event not showing in GA4
- Wait 24-48 hours for data to appear in standard reports
- Check Realtime reports for immediate verification
- Verify the tag is published in GTM
- Check GTM Preview mode to see if tags are firing

### Tag not firing in GTM Preview
- Check that the trigger is set correctly
- Verify the event name matches exactly: `waitlist_submit`
- Check browser console for errors
- Ensure GTM container is published

### Need to test locally
- Use GTM Preview mode with your local URL
- Or use the GTM container's preview/debug URL
