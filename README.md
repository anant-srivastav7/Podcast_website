# Podcast_website
PodConnect – Podcast Hosting Website

PodConnect is a simple and clean podcast hosting website made using HTML, CSS, and JavaScript (validation only).
It includes login/signup authentication using localStorage, podcast episode listings, an upload form, and a contact page with validation.

Features
1. Login & Signup System (JavaScript Validation Only)

Validates user input (name, email, password, confirm password).

Stores user data using localStorage.

Redirects to login page after successful signup.

Only logged-in users can access the main pages.

2. Home Page

Displays welcome banner.

Lists latest podcast episodes.

Each episode card includes:
✔ Thumbnail
✔ Title
✔ Description
✔ Audio player

3. Episodes Page

Shows the full list of episodes.

All episodes include thumbnails + playable audio.

4. Upload Episode Page

Form to upload:

Episode title

Description

Audio file

Thumbnail

Shows an alert: “Your Episode is Submitted for Review”

(Front-end only; no backend storage)

5. Contact & About Page

About section describing PodConnect’s mission.

Contact form with validation for:

Name

Email

Message

Shows alert on successful submission.

6. Responsive Style (style.css)

Clean Netflix-style card layout.

Red–white–dark theme.

Hover effects on episode cards.

Consistent navigation bar across all pages.

Project Structure
📁 podcast/
│
├── index.html          # Login page
├── signup.html         # Signup page
├── home.html           # Home page
├── episodes.html       # Episodes listing
├── upload.html         # Upload episode page
├── contact.html        # Contact + About
│
├── style.css           # Main styling file
├── validate.js         # All validation + login logic
│
├── PodConnect Logo Icon Dark BG.png  
│
├── (All .jpg thumbnails)
├── (All .mp3 audio files)
