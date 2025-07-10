@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
    /* Consistent Background Color for ALL sections */
    background-color: #1a1a2e; /* A deep, consistent dark background for all sections */
    color: #e0e0e0; /* Default text color (dark mode) */
    transition: background-color 0.3s, color 0.3s; /* Smooth theme transition for text/elements */
}

/* =================================================
    Name Section Styling (Hi, I'm Vishal Trivedi 👋)
==================================================== */

.section-1 {
    /* No background gradient here anymore, handled by body */
    display: flex; /* Aligns photo and content horizontally */
    align-items: center; /* Vertically center the elements */
    justify-content: flex-start; /* Align everything to the left */
    gap: 40px; /* Space between the photo and the text */
    padding: 100px 50px; /* Add padding around the entire header */
    min-height: 100vh; /* Ensure it takes full viewport height */
}

.section-1 .content {
    padding-left: 20px; /* Add some padding to the left of the text */
    text-align: left; /* Ensure text aligns to the left */
}

.content h1 {
    display: flex; /* Keep elements inline */
    align-items: center; /* Vertically align */
    font-size: 32px;
    font-weight: 500;
    color: inherit; /* Inherit color from body initially, will be overridden by static/word */
    margin-bottom: 20px; /* Space below the heading */
}

.static {
    color: #f38375; /* Warm orange/red for dark mode */
    font-weight: bold;
}

.rotating-text {
    display: inline-block;
    position: relative;
    margin-left: 10px; /* Spacing between static and rotating text */
    min-width: 250px; /* Ensure enough space for longer words */
}

.cd-words-wrapper {
    display: inline-block;
    position: relative;
    white-space: nowrap; /* Prevent text wrapping */
    vertical-align: top; /* Align with the top of the static text */
}

/* Hide all words initially */
.word {
    display: none;
    font-size: 32px;
    font-weight: normal;
    color: #ffee32; /* Yellow color for rotating text in dark mode */
    white-space: nowrap; /* Prevent words from wrapping */
    position: absolute; /* Position words absolutely for animation */
    left: 0;
    top: 0;
}

/* The visible word */
.word.is-visible {
    display: inline-block;
    animation: slideInFromTop 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; /* Smooth cubic-bezier for slide */
}

/* Fade-in animation for rotating text (slide in from top to bottom) */
@keyframes slideInFromTop {
    0% {
        opacity: 0;
        transform: translateY(-20px); /* Start further above */
    }
    100% {
        opacity: 1;
        transform: translateY(0); /* Slide down to original position */
    }
}

/* Fade-out animation for when the word disappears (slide up and fade out) */
@keyframes slideOutToTop {
    0% {
        opacity: 1;
        transform: translateY(0); /* Start at the current position */
    }
    100% {
        opacity: 0;
        transform: translateY(-20px); /* Move upwards as it fades out */
    }
}

/* ===============================
    Profile Photo Section Styling
================================= */
.photo {
    flex-shrink: 0; /* Prevent the image from shrinking */
}

.photo img {
    max-width: 100%;
    height: auto; /* Maintain aspect ratio */
    border-radius: 50%; /* Circular image */
    object-fit: cover; /* Proper image scaling */
    border: 5px solid rgba(255, 255, 255, 0.5); /* Subtle border */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Soft shadow */
}

/* .content is handled by section-1 .content and general styles */

.content p.description { /* No description paragraph in your current HTML for this, but keeping for completeness */
    font-size: 1.1rem;
    max-width: 700px;
    margin-bottom: 15px;
    line-height: 1.7;
    color: inherit; /* Inherit from body or section */
    text-align: justify;
}

/* ======================================
    Experience and Overseas Message Summary
    ====================================== */
/* Universal reset for demo */
body {
    margin: 0;
    padding: 2rem;
    font-family: Arial, sans-serif;
    background-color: #0a0a0a; /* Default dark background for the page */
    color: #e0e0e0; /* Light text for dark mode */
}

/* Base Card Style (Default for Dark Mode) */
.card {
    max-width: 1200px; /* Made cards horizontally wider, using a fixed pixel value for better control */
    margin: 2rem auto; /* Centers the card and adds vertical space */
    padding: 2rem 2.5rem; /* This sets the *card's* internal padding */
    background-color: #1a1a1a; /* Dark background for card in dark mode */
    border-radius: 30px;
    position: relative; /* Needed for pseudo-element positioning */
    overflow: hidden; /* Ensures gradient doesn't overflow corners */
    color: #f0f0f0; /* Light text for dark card background */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Initial subtle shadow for dark background */
    transition: box-shadow 0.3s ease;
    z-index: 10;
}

/* **THE FIX IS HERE:** Explicitly remove all padding and margin from this wrapper div */
.overseas-message {
    padding: 0 !important;
    margin: 0 !important;
}

/* The h3 inside overseas-message should also have its top margin explicitly removed for good measure,
   though the padding on its parent overseas-message is the main issue. */
.overseas-message h3 {
    margin-top: 0 !important;
}


/* Gradient Heading Styles (Default for Dark Mode) */
.card h3 {
    /* margin-top: 0;  -- This rule is effectively overridden by .overseas-message h3 */
    text-align: left; /* Aligned titles to the left */
    font-size: 1.8em;
    margin-bottom: 1.5rem;
    /* Gradient for dark mode titles */
    background: linear-gradient(to right, #ff00ff, #00ffff, #00ff00); /* Purple, Cyan, Green */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent; /* Fallback for browsers that don't support text fill color */
    display: inline-block;
    width: 100%;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.2); /* Subtle glow for text in dark mode */
    position: relative;
    z-index: 35;
}

/* --- Animated Rainbow Border on Hover --- */

/* Pseudo-element for the animated border */
.card::before {
    content: '';
    position: absolute;
    top: -500%;
    left: -500%;
    width: 1100%;
    height: 1100%;
    background: conic-gradient(
        from 0deg at 50% 50%,
        #ff0000, /* Red */
        #ffa500, /* Orange */
        #ffff00, /* Yellow */
        #008000, /* Green */
        #0000ff, /* Blue */
        #4b0082, /* Indigo */
        #ee82ee, /* Violet */
        #ff0000 /* Red (to complete the loop) */
    );
    transform: scale(0);
    opacity: 0;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    z-index: 1;
    border-radius: inherit;
}

/* Inner content container to create space for the border (Default for Dark Mode) */
.card::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    background-color: #1a1a1a; /* Match the card's background color in dark mode */
    border-radius: inherit;
    z-index: 5;
}

/* Bring card content forward */
.card > div, .card > h3, .card > ul, .card > p {
    position: relative;
    z-index: 25;
}

/* On hover, expand and show the pseudo-element */
.card:hover::before {
    transform: scale(1);
    opacity: 1;
    animation: rotateBorder 8s linear infinite;
}

/* Keyframe animation for the rotating border */
@keyframes rotateBorder {
    from {
        transform: rotate(0deg) scale(1);
    }
    to {
        transform: rotate(360deg) scale(1);
    }
}

/* List styles inside card */
.card ul {
    list-style: none;
    padding-left: 0;
}

.card li {
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

/* Bold text within list items (Default for Dark Mode) */
.card li b {
    color: #00ffff; /* Accent color for bold text in dark mode */
    font-size: 1.1em;
    display: block; /* Make bold text a block element to ensure line break */
    margin-bottom: 0.8rem; /* Added sufficient margin below bold text for desired spacing */
}

/* Re-added: This removes the extra line break from the <br> tag in HTML after the <b> tag */
.card li b + br {
    display: none;
}

/* Add a small margin below the bold text using the list item itself */
.card ul.overseas-bullets li {
    padding-top: 0.5rem;
}

/* Paragraph inside card (Default for Dark Mode) */
.card p.overseas-summary {
    margin-top: 2.5rem;
    line-height: 1.7;
    font-size: 1.05em;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.05); /* Subtle background for dark card */
    border-radius: 15px;
}

/* Strong text within summary paragraph (Default for Dark Mode) */
.card p.overseas-summary strong {
    color: #00ffff; /* Highlight the strong text in dark mode */
}

---

### Light Mode Overrides

/* Crucial overrides for the body in light mode */
body.light {
    background-color: #f5f5f5 !important; /* Force light background for the page */
    color: #222 !important; /* Force dark text for the page */
}

/* Crucial overrides for the card itself in light mode */
body.light .card {
    background-color: #f8f9fa !important; /* Force light background for cards */
    color: #222 !important; /* Force dark text for light cards */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) !important; /* Lighter shadow for light cards */
}

/* Crucial override for the inner background pseudo-element in light mode */
body.light .card::after {
    background-color: #f8f9fa !important; /* Force inner background to match card in light mode */
}

/* Heading gradient for light mode */
body.light .card h3 {
    background: linear-gradient(to right, #007bff, #17a2b8, #28a745) !important; /* Force light mode gradient */
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    color: transparent !important;
    text-shadow: none !important; /* Remove text shadow in light mode for cleaner look */
}

/* Bold text color for light mode */
body.light .card li b {
    color: #0066ff !important; /* Force accent color for bold text in light mode */
}

/* Summary paragraph background and strong text color for light mode */
body.light .card p.overseas-summary {
    background-color: rgba(0, 0, 0, 0.03) !important; /* Force subtle background for light card summary */
}

body.light .card p.overseas-summary strong {
    color: #0066ff !important; /* Force highlight color for strong text in light mode */
}

/* ===============================
    Sticky Navigation Bar Section Styling
================================= */
.sticky-nav {
    position: fixed;
    top: 20px; /* Move the nav down from the top */
    width: 80%; /* Increased width for more items */
    max-width: 900px; /* Max width to prevent it from getting too wide */
    left: 50%;
    transform: translateX(-50%); /* Center horizontally */
    background-color: rgba(59, 214, 198, 0.95); /* Light mode default */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* Stronger, softer shadow */
    z-index: 1000;
    height: 50px; /* Slightly taller */
    border-radius: 50px;
    transition: top 0.3s ease-in-out, background-color 0.3s, color 0.3s; /* Smooth transition */
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

.nav-links li {
    margin: 0 5px;
}
.nav-links li .theme-toggle-btn { /* Specific styling for the theme toggle button's li */
    display: flex; /* Make it a flex container to align its content */
    align-items: center; /* Vertically center the icon/text */
    justify-content: center; /* Horizontally center if needed */
    font-size: 1.5rem; /* Adjust font size if needed */
    background-color: transparent;
    border: none;
    color: #333; /* Default color, will change with theme */
    cursor: pointer;
    transition: color 0.3s, transform 0.2s;
    height: 100%; /* Take full height of the nav */
    padding: 0 10px; /* Adjust padding */
}

.nav-links li .theme-toggle-btn:hover {
    transform: scale(1.1);
    color: #0077b5; /* Highlight color on hover in light mode */
}


.nav-links a {
    display: flex; /* Use flexbox for alignment */
    align-items: center; /* Align icon and text vertically */
    gap: 8px; /* Space between icon and text */
    text-decoration: none;
    color: #333; /* Default light mode color */
    font-weight: 500;
    padding: 8px 15px; /* Adjust padding */
    transition: color 0.3s, background-color 0.3s, transform 0.2s;
    font-size: 14px; /* Slightly larger font */
    border-radius: 30px; /* Rounded buttons */
}

.nav-links a i {
    font-size: 16px; /* Adjust icon size */
    vertical-align: middle; /* Align icon with text */
}

.nav-links a:hover {
    background-color: #10898d;
    color: white; /* Changed to white for better contrast on hover */
    transform: translateY(-2px); /* Slight lift on hover */
}

/* Active link */
.nav-links a.active {
    background-color: #0077b5;
    color: white;
    box-shadow: 0 2px 8px rgba(0, 119, 181, 0.4);
}

/* Sections */
.section {
    padding: 80px 50px; /* Consistent padding for all sections */
    display: flex;
    flex-direction: column; /* Stack content vertically */
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    color: inherit; /* Inherit from body for main text */
    /* REMOVED: Individual background gradients for sections */
}

/* Base style for all h2 section headings */
.section h2 {
    font-size: 2.8rem; /* Larger headings */
    margin-bottom: 50px; /* More space below headings */
    font-weight: 700;
    opacity: 0; /* Hidden initially for JS animation */
    transform: translateY(20px); /* Start slightly below for animation */
    transition: opacity 0.8s ease-out, transform 0.8s ease-out; /* Smooth transition for animation */

    /* Gradient Text Styling */
    background: linear-gradient(90deg, #6a11cb, #2575fc, #ff7e5f, #fd004c); /* Default dark mode gradient */
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent; /* Fallback for older browsers */
    background-size: 200% 100%; /* For animation */
    animation: gradientShift 4s ease infinite alternate; /* Gradient shift animation */
}

/* Animation for section headings on scroll */
.section h2.animate-heading {
    opacity: 1;
    transform: translateY(0);
    animation: bounceIn 1s cubic-bezier(0.23, 1, 0.32, 1) forwards, gradientShift 4s ease infinite alternate; /* Combine bounce with gradient shift */
}

/* New Keyframes for bounce animation */
@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: translateY(50px) scale(0.9);
    }
    60% {
        opacity: 1;
        transform: translateY(-10px) scale(1.05);
    }
    100% {
        transform: translateY(0) scale(1);
    }
}

/* Keyframes for gradient shift animation */
@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}


/* REMOVED: individual background gradients for sections */
/* .section-1 { background: linear-gradient(to right, #6a11cb, #2575fc); } */
/* ... and so on for other sections ... */

/* REMOVED: explicit h2 color for sections with dark background - now handled by gradient */
/* .section-1 h2, .section-experience h2, .section-projects h2, .section-education h2, .section-contact h2 { color: #fff; } */


/* Smooth Scroll Effect */
html {
    scroll-behavior: smooth;
}

/* Social Links */
.social-links {
    display: flex;
    justify-content: center;
    gap: 25px; /* Increased gap */
    margin-top: 30px; /* More margin */
}

.icon {
    font-size: 2.2rem; /* Slightly larger icons */
    color: #e0e0e0; /* Default color (dark mode) */
    border: 2px solid #e0e0e0; /* Default border color (dark mode) */
    padding: 18px; /* Increased padding */
    border-radius: 50%;
    transition: transform 0.3s, background-color 0.3s, color 0.3s, box-shadow 0.3s;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 70px; /* Larger hit area */
    height: 70px; /* Larger hit area */
    text-decoration: none;
    position: relative; /* For the rainbow border */
    z-index: 1; /* Ensure content is above pseudo-elements */
    overflow: hidden; /* Hide overflow of the gradient */
}

/* Rainbow border for social icons */
.icon::before, .icon::after {
    content: "";
    position: absolute;
    border-radius: inherit;
    z-index: -2; /* Behind the main icon content and inner mask */
    transition: opacity 0.3s ease;
}

.icon::before {
    height: 150%;
    width: 150%;
    background: conic-gradient(
        #fd004c,
        #fe9000,
        #fff020,
        #3edf4b,
        #3363ff,
        #b102b7,
        #fd004c
    );
    left: -25%;
    top: -25%;
    animation: spin 3s infinite linear;
    opacity: 0; /* Hidden by default */
}

.icon::after {
    height: calc(100% - 6px); /* Creates the border space */
    width: calc(100% - 6px);
    top: 3px;
    left: 3px;
    z-index: -1; /* Between gradient and content */
    background-color: var(--card-background-color); /* Adapts to theme */
    transition: background-color 0.3s ease;
}

/* Hover effect to reveal rainbow border */
.icon:hover::before {
    opacity: 1;
}

/* General icon hover effects (color, transform, shadow) should be outside of the pseudo-elements */
.icon.github:hover {
    background-color: #333; /* Fallback for older browsers or if gradient fails */
    color: #fff;
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
}

.icon.linkedin:hover {
    background-color: #0077b5; /* Fallback */
    color: #fff;
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 119, 181, 0.6);
}

.icon.email:hover {
    background-color: #ea4335; /* Fallback */
    color: #fff;
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(234, 67, 53, 0.6);
}


/* Keyframe for general fade-in animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}


/* ===============================
    Light & Dark Mode Section Styling
================================= */

/* Define CSS Variables for easy theme switching */
:root {
    --bg-color: #1a1a2e; /* Default dark mode background */
    --text-color: #e0e0e0; /* Default dark mode text */
    --card-bg-color: #2a2a2a; /* Default dark mode card background */
    --nav-bg-color: rgba(30, 30, 40, 0.95); /* Default dark mode nav background */
    --nav-link-color: #c0c0c0; /* Default dark mode nav link color */
    --nav-link-hover-bg: #3a3a3a;
    --nav-link-active-bg: #004d77;
    --theme-toggle-color: #c0c0c0;
    --theme-toggle-hover-color: #a4f9a4;
    --heading-gradient-start-dark: #6a11cb;
    --heading-gradient-mid1-dark: #2575fc;
    --heading-gradient-mid2-dark: #ff7e5f;
    --heading-gradient-end-dark: #fd004c;
    --accent-color: #ffee32; /* For rotating text */
    --highlight-color: #f38375; /* For static text */
    --card-heading-color: #a4f9a4; /* For card headings in dark mode */
    --card-text-color: #c0c0c0; /* For card text in dark mode */
    --project-button-bg: #0077b5;
    --project-button-hover-bg: #005a8d;
    --icon-color: #e0e0e0;
    --icon-border-color: #e0e0e0;
}

body.light {
    --bg-color: #f8f8f8; /* Light background */
    --text-color: #333; /* Dark text for general content */
    --card-bg-color: #ffffff; /* Light mode card background */
    --nav-bg-color: rgba(59, 214, 198, 0.95); /* Light mode nav background */
    --nav-link-color: #333; /* Light mode nav link color */
    --nav-link-hover-bg: #10898d;
    --nav-link-active-bg: #0077b5;
    --theme-toggle-color: #333;
    --theme-toggle-hover-color: #0077b5;
    --heading-gradient-start-light: #2575fc;
    --heading-gradient-mid1-light: #6a11cb;
    --heading-gradient-mid2-light: #FFC700;
    --heading-gradient-end-light: #ff7e5f;
    --accent-color: #0077b5; /* For rotating text */
    --highlight-color: #d62d20; /* For static text */
    --card-heading-color: #2575fc; /* For card headings in light mode */
    --card-text-color: #555; /* For card text in light mode */
    --project-button-bg: #0077b5;
    --project-button-hover-bg: #005a8d;
    --icon-color: #333;
    --icon-border-color: #333;
}

/* Apply variables */
body {
    background-color: var(--bg-color);
    color: var(--text-color);
}

.sticky-nav {
    background-color: var(--nav-bg-color);
}

.nav-links li .theme-toggle-btn {
    color: var(--theme-toggle-color);
}
.nav-links li .theme-toggle-btn:hover {
    color: var(--theme-toggle-hover-color);
}
.nav-links a {
    color: var(--nav-link-color);
}
.nav-links a:hover {
    background-color: var(--nav-link-hover-bg);
    color: white; /* Always white on hover for contrast */
}
.nav-links a.active {
    background-color: var(--nav-link-active-bg);
    color: white;
}

.content h1 .static {
    color: var(--highlight-color);
}
.content h1 .word {
    color: var(--accent-color);
}

/* Gradient for section headings based on theme */
.section h2 {
    background: linear-gradient(90deg,
        var(--heading-gradient-start-dark),
        var(--heading-gradient-mid1-dark),
        var(--heading-gradient-mid2-dark),
        var(--heading-gradient-end-dark)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent; /* Fallback */
}
body.light .section h2 {
    background: linear-gradient(90deg,
        var(--heading-gradient-start-light),
        var(--heading-gradient-mid1-light),
        var(--heading-gradient-mid2-light),
        var(--heading-gradient-end-light)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent; /* Fallback */
}


.bar-chart, .pie-chart-container, .project-item, .education-item, .experience-item {
    background-color: var(--card-bg-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Default light shadow */
}

/* Dark mode specific box-shadow for cards */
body.dark .bar-chart, body.dark .pie-chart-container, body.dark .project-item, body.dark .education-item, body.dark .experience-item {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* --- NEW CSS ADDITION BELOW (for chart containers only) --- */

/* This rule forces the chart container background to be light,
   even when the overall body is in its default 'dark mode' state (i.e., does NOT have the 'light' class).
   This is crucial for the dark text *inside* the chart to be visible. */
body:not(.light) .bar-chart,
body:not(.light) .pie-chart-container {
    background-color: #ffffff !important; /* Force a white background for charts */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important; /* Keep a light shadow for consistency */
}

/* Ensure any HTML text directly within the chart containers (e.g., if you have <h3>) is dark */
body:not(.light) .bar-chart h3,
body:not(.light) .pie-chart-container h3 {
    color: #333 !important; /* Force dark heading color for charts in dark mode */
}

/* --- END NEW CSS ADDITION --- */


.bar-chart h3, .pie-chart-container h3, .project-item h3, .education-item h3, .experience-item h3 {
    color: var(--card-heading-color);
}
.experience-item p, .experience-item ul li,
.project-item p, .project-item ul li,
.education-item p {
    color: var(--card-text-color);
}

.btn-project {
    background-color: var(--project-button-bg);
}
.btn-project:hover {
    background-color: var(--project-button-hover-bg);
}

.icon {
    color: var(--icon-color);
    border-color: var(--icon-border-color);
}

.icon::after { /* Inner circle of the social icon for the border effect */
    background-color: var(--card-bg-color); /* This should match the main card background */
}


/* Ensure chart axes and labels are visible based on theme */
/* REMINDER: These CSS rules are for *potential* HTML elements created by Chart.js,
   or for elements *around* the canvas. They generally do NOT affect text
   drawn directly *inside* the canvas by Chart.js itself.
   The JS configuration is key for internal canvas text. */
.chartjs-render-monitor {
    color: var(--text-color) !important;
}
.chartjs-tooltip-header, .chartjs-tooltip-body {
    color: var(--text-color) !important;
}

/* =========================================================================
   Experience Section Styling (Modified for Grid Layout)
   ========================================================================= */

.section-experience, .section-projects {
    padding: 80px 50px;
    text-align: center;
}

.section-experience h2, .section-projects h2 {
    margin-bottom: 50px;
}

.experience-container {
    display: grid; /* CHANGE to CSS Grid */
    grid-template-columns: repeat(2, 1fr); /* Two equal columns for desktop */
    gap: 30px; /* Spacing between grid items (both rows and columns) */
    /* REMOVE: flex-wrap: nowrap; */
    /* REMOVE: overflow-x: auto; */
    /* REMOVE: -webkit-overflow-scrolling: touch; */
    /* REMOVE: justify-content: flex-start; */
    /* REMOVE: padding-bottom: 20px; */ /* No need for scrollbar space */
    max-width: 100%; /* Ensure it takes full width */
    margin: 0 auto; /* Center the container */
    /* REMOVE Scrollbar customization for .experience-container as it won't scroll horizontally */
}

/* Experience item styling */
.experience-item {
    /* REMOVE: flex: 0 0 350px; */ /* No longer needed for grid layout */
    /* REMOVE: min-width: 350px; */ /* Grid handles sizing */
    /* REMOVE: max-width: 350px; */ /* Grid handles sizing */
    width: 100%; /* Make the item fill its grid column */
    background-color: var(--card-bg-color);
    color: var(--card-text-color);
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0; /* Hidden initially for JS animation */
    /* Keep animation: fadeIn 0.8s ...; - JS will handle animation play state */
    text-align: left;
    margin-bottom: 0; /* Gap handles spacing, no need for bottom margin */
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    /* This makes all cards in a row equal height, and content within them flexible */
}

/* Delay animation for each item (this will still work based on HTML order) */
.experience-item:nth-child(1) { animation-delay: 0.1s; }
.experience-item:nth-child(2) { animation-delay: 0.2s; }
.experience-item:nth-child(3) { animation-delay: 0.3s; }
.experience-item:nth-child(4) { animation-delay: 0.4s; }
.experience-item:nth-child(5) { animation-delay: 0.5s; }


.experience-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.experience-item h3 {
    font-size: 1.5rem;
    color: var(--card-heading-color);
    margin-bottom: 10px;
}

.experience-item p.date, .project-item p.date {
    font-size: 0.95rem;
    color: var(--card-text-color);
    margin-bottom: 10px;
}
.experience-item p.project-focus, .project-item p.project-description, .project-item p.project-role, .project-item p.project-tech {
    font-size: 1rem;
    color: var(--card-text-color);
    margin-bottom: 8px;
}

/* Ensure the max-height and overflow for internal scrolling on UL is here */
.experience-item ul, .project-item ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-top: 15px;
    flex-grow: 1;
}


.experience-item ul li, .project-item ul li {
    font-size: 0.95rem;
    color: var(--card-text-color);
    margin-bottom: 8px;
    line-height: 1.6;
    text-align: left;
}


* =========================================================================
   Responsive Design Adjustments (for Mobile)
   ========================================================================= */

@media (max-width: 768px) {
    /* ... (Your other mobile styles for 768px breakpoint) ... */

    .section-experience, .section-projects {
        padding: 40px 15px;
    }

    .experience-container {
        grid-template-columns: 1fr; /* Single column for tablets and mobiles */
        gap: 25px; /* Adjust gap for mobile */
    }

    .experience-item {
        padding: 20px; /* Adjust padding inside each card */
    }

    .experience-item h3 {
        font-size: 1.3em;
    }
    .experience-item .date {
        font-size: 0.9em;
    }
    .experience-item .project-subtitle {
        font-size: 1.1em;
    }
    .experience-item ul {
        margin-left: 20px;
    }
    .experience-item ul li {
        font-size: 0.95em;
    }
}

@media (max-width: 480px) {
    /* ... (Your other mobile styles for 480px breakpoint) ... */

    .section-experience, .section-projects {
        padding: 30px 10px;
    }

    .experience-container {
        gap: 20px; /* Adjust gap for smaller mobiles */
    }

    .experience-item {
        padding: 15px;
    }
    .experience-item h3 {
        font-size: 1.2em;
    }
    .experience-item .date {
        font-size: 0.85em;
    }
    .experience-item .project-subtitle {
        font-size: 1em;
    }
    .experience-item ul {
        margin-left: 15px;
    }
    .experience-item ul li {
        font-size: 0.9em;
    }
}

/* Ensure these variables are defined in your :root and body.dark if you haven't already */
:root {
    --card-bg-color: #ffffff; /* Example light mode card background */
    --card-text-color: #333; /* Example light mode text color */
    --card-heading-color: #007bff; /* Example light mode heading color */
    --card-bg-light: #f8f8f8; /* For scrollbar track */
    --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Example box shadow */
    --accent-color: #007bff; /* Ensure this is defined for scrollbars */
}
body.dark {
    --card-bg-color: #2a2a2a; /* Example dark mode card background */
    --card-text-color: #ccc; /* Example dark mode text color */
    --card-heading-color: #87ceeb; /* Example dark mode heading color */
    --card-bg-light: #3a3a3a; /* For scrollbar track */
    --box-shadow: 0 4px 12px rgba(255, 255, 255, 0.08);
}





.projects-container { /* This should still wrap if it's meant to be a grid of projects */
    display: flex;
    justify-content: center;
    align-items: stretch; /* Ensure items stretch to equal height */
    gap: 30px; /* Space between items */
    flex-wrap: wrap; /* Projects container should wrap */
    max-width: 1200px;
    margin: 0 auto;
}

.project-item {
    width: calc(50% - 15px); /* Two items per row on large screens */
    min-width: 300px; /* Minimum width to prevent crushing */
    border-radius: 20px; /* More rounded corners */
    text-align: center; /* Align text within card */
    margin-bottom: 20px; /* Adds spacing between the items for wrapping */
    display: flex;
    padding: 20px; /* padding */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Subtle shadow */
    flex-direction: column;
    border-radius: 15px; /* Softer border-radius */
    overflow: hidden; /* Ensure content doesn't spill */
    position: relative; /* For animations */
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s, color 0.3s;
}

.project-links {
    margin-top: 20px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
}

.btn-project {
    display: inline-block;
    background-color: var(--project-button-bg);
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.3s ease, transform 0.2s ease;
}
.btn-project:hover {
    background-color: var(--project-button-hover-bg);
    transform: translateY(-2px);
}

/* Responsive Adjustments for Projects (Experience now scrolls horizontally) */
@media (max-width: 1024px) {
    .project-item {
        width: calc(50% - 15px); /* Two items per row on medium screens */
    }
}
@media (max-width: 768px) {
    .project-item {
        width: 100%;
        min-width: unset;
    }
}


/* ===============================
    Featured Projects Section Styling
================================= */
.section-projects {
    padding: 80px 50px;
    text-align: center;
}

.section-projects h2 {
    margin-bottom: 50px;
}

/* NEW: Styles for the filter buttons container */
.project-filters {
    margin-bottom: 40px; /* Space below the filters and above projects */
    display: flex;
    flex-direction: column; /* Stack main and sub filters */
    align-items: center; /* Center filter groups */
    gap: 15px; /* Space between main and sub filter rows */
}

.main-skill-filters,
.sub-skill-filters {
    display: flex;
    flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
    justify-content: center;
    gap: 12px; /* Space between individual buttons */
}

/* Initially hide sub-skill filters */
.sub-skill-filters {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.4s ease-out, max-height 0.4s ease-out;
}

/* Show sub-skill filters when active */
.sub-skill-filters.active {
    opacity: 1;
    max-height: 100px; /* Adjust based on content height, ensure enough space */
}


/* ==========================================
    Featured Projects - Button Hover Animation
    ========================================== */
/* Styles for individual filter buttons */
/* --- Styles for Main Filter Buttons (e.g., SQL, Python, Power BI) --- */

/* Base styles for individual filter buttons */
.filter-btn {
    background-color: var(--project-button-bg); /* Use theme variable */
    color: white; /* Default text color */
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    box-shadow: 0 3px 8px rgba(0,0,0,0.2);
}

/* Ensure hover styles are well defined */
.filter-btn:hover {
    background-color: var(--project-button-hover-bg); /* Use theme variable for hover */
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 16px rgba(0,0,0,0.4);
}

/* --- Crucial Active State for Main Filter Buttons (WITH GRADIENT) --- */
.filter-btn.active {
    background: linear-gradient(to right, #007bff, #6a11cb) !important; /* Blue to Purple Gradient */
    color: white !important; /* White text for contrast */
    border-color: transparent !important; /* Border matches the gradient start or end, or transparent */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4) !important; /* More pronounced shadow for active gradient */
    transform: translateY(0) !important; /* Ensure it stays flat when active */
    animation: none !important; /* Disable hover animation when active */
    cursor: default !important; /* Indicate it's already selected */
    /* Adjust padding slightly if text feels too close to gradient edges, or border-radius */
}

/* Dark mode active state for main filter buttons (WITH GRADIENT) */
body.dark .filter-btn.active {
    background: linear-gradient(to right, #6a0dad, #2575fc) !important; /* Purple to Blue Gradient */
    color: white !important;
    border-color: transparent !important;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5) !important;
}
/* You can keep or remove the pulseActiveBtn keyframes depending on if you want a subtle animation */
/* @keyframes pulseActiveBtn {
    from { transform: scale(1); }
    to { transform: scale(1.02); }
} */

/* Existing .projects-container and .project-item styles */
.projects-container {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    gap: 30px;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
}

/* Update the transition property for .project-item */
.project-item {
    width: calc(50% - 15px); /* Two items per row on large screens */
    min-width: 300px;
    border-radius: 20px;
    text-align: center;
    margin-bottom: 20px;
    display: flex; /* Keep as flex */
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Default shadow */
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden; /* KEEP THIS, as per your instruction */
    position: relative; /* KEEP THIS */
    z-index: 1; /* Ensure content is above the pseudo-elements, KEEP THIS */

    /* UPDATED TRANSITION: Affects all properties when changing states */
    transition: opacity 0.4s ease, height 0.4s ease-out, width 0.4s ease-out,
                margin 0.4s ease-out, padding 0.4s ease-out, transform 0.4s ease;
}

/* Ensure the rainbow border pseudo-elements have correct z-index */
.project-item::before {
    z-index: -2;
}
.project-item::after {
    z-index: -1;
}

/* Adjust the .project-item.hidden class */
.project-item.hidden {
    opacity: 0;
    pointer-events: none; /* Make it unclickable */
    height: 0 !important; /* Collapse height */
    width: 0 !important; /* Collapse width */
    margin: 0 !important; /* Collapse all margins */
    padding: 0 !important; /* Collapse all paddings */
    border: none !important; /* Remove border to ensure full collapse */
    overflow: hidden; /* Keep overflow hidden */
    transform: scale(0); /* Shrink to nothing */
    /* display: none will be set by JS after transition */
}

/* Ensure .project-item.visible class explicitly sets default properties */
.project-item.visible {
    opacity: 1;
    pointer-events: auto;
    height: auto; /* Revert to auto height */
    width: calc(50% - 15px); /* Revert to original width on desktop */
    margin-bottom: 20px; /* Revert to original margin-bottom */
    padding: 20px; /* Revert to original padding */
    transform: scale(1); /* Return to original size */
    border: initial; /* Revert border */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Ensure shadow returns for visible items */
}
/* Ensure dark mode shadow is also applied when visible */
body.dark .project-item.visible {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Match your dark mode shadow */
}


/* Responsive adjustments for .project-item.visible to ensure correct widths */
@media (max-width: 1024px) {
    .project-item.visible {
        width: calc(50% - 15px); /* Two items per row on medium screens */
    }
}
@media (max-width: 768px) {
    .project-item.visible {
        width: 100%; /* Full width on mobile */
    }
}

/* Add this new CSS rule to your your_styles.css file */
.project-item.single-item {
    width: 100% !important; /* Make it full width when it's the only visible item */
}

/* Ensure responsive adjustments for single-item if necessary */
@media (max-width: 768px) {
    .project-item.single-item {
        width: 100% !important;
    }
}


/* ==================================================
    Individual Project Skill Buttons inside the cards
    ================================================== */

/* Container for skill buttons within a project item */
.project-item .project-skills-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px; /* Space between individual skill buttons */
    margin-top: 15px; /* Space from project description */
    justify-content: center; /* Center the skill buttons within the project card */
}

/* Base styles for individual skill buttons */
.skill-btn {
    background-color: #fff; /* White background for light mode */
    padding: 0.6em 1.2em;
    border-radius: 20em;
    border: 1px solid var(--nav-link-active-bg);
    user-select: none;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 150ms ease-out;
    color: var(--nav-link-active-bg);
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 2px 4px -1px rgba(0, 0, 0, 0.08),
                0 1px 2px -1px rgba(0, 0, 0, 0.08);
    z-index: 0;
}

/* Dark mode styles for skill buttons */
body.dark .skill-btn {
    background-color: #333;
    color: #9370db;
    border: 1px solid #9370db;
    box-shadow: inset 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                0 1px 2px -1px rgba(0, 0, 0, 0.2);
}

/* Hover effects for skill buttons */
.skill-btn:hover {
    background-color: #e0e0e0;
    transform: translateY(-1px);
    box-shadow: inset 0 2px 4px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -2px rgba(0, 0, 0, 0.15);
}

body.dark .skill-btn:hover {
    background-color: #444;
    box-shadow: inset 0 2px 4px -1px rgba(0, 0, 0, 0.3),
                0 2px 4px -2px rgba(0, 0, 0, 0.35);
}

/* Active state for the *smaller* skill buttons inside project cards */
/* This will be used later when we re-enable that highlight logic */
.skill-btn.active {
    background-color: var(--nav-link-active-bg) !important;
    color: white !important;
    border-color: var(--nav-link-active-bg) !important;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: none !important;
    animation: none !important;
    cursor: default !important;
}

body.dark .skill-btn.active {
    background-color: #6a0dad !important;
    border-color: #6a0dad !important;
    color: white !important;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.3);
}

/* Flash effect using ::before pseudo-element for skill buttons */
.skill-btn::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    border-radius: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
    opacity: 0;
    transform: scaleX(2) scaleY(2);
}

/* Flash effect on hover for skill buttons */
.skill-btn:hover::before {
    opacity: 1;
    transform: scaleX(1) scaleY(1);
}


/* --- Styling for active (highlighted) skill buttons within project cards --- */
/* (This section affects the *smaller* skill buttons inside the project cards) */
.skill-btn.active {
    background-color: var(--nav-link-active-bg) !important; /* Added !important for emphasis */
    color: white !important; /* Added !important for emphasis */
    border-color: var(--nav-link-active-bg); /* Matches border color to active background */
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtle inset shadow */
    transform: none; /* Ensures no hover transform if active (stays flat) */
    animation: none; /* Removes any pulse animation if active */
    cursor: default; /* Change cursor to indicate it's already active */
}

/* Prevent hover styles from overriding the active state */
.skill-btn.active:hover {
    background-color: var(--nav-link-active-bg);
    color: white;
    border-color: var(--nav-link-active-bg);
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: none;
}

/* Dark mode for active skill buttons */
body.dark .skill-btn.active {
    background-color: #6a0dad !important; /* Added !important for emphasis */
    border-color: #6a0dad;
    color: white !important; /* Added !important for emphasis */
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.3);
}

body.dark .skill-btn.active:hover {
    background-color: #6a0dad;
    border-color: #6a0dad;
    color: white;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.3);
}


/* ==================================================
    Hover Image Preview Styling on View Images Button
    ================================================== */

.btn-project.view-images-btn {
    overflow: visible; /* Allow the popup to extend beyond the button's bounds */
}

/* Keyframes for the blinking arrow animation */
@keyframes blink-animation {
    50% { opacity: 0.4; }
}

/* Apply the animation to the next arrow when it has the .blinking class */
.preview-nav-arrow.blinking {
    animation: blink-animation 1.5s infinite;
}

/* Ensure all carousel elements calculate size predictably */
.image-preview-popup, .image-preview-popup * {
    box-sizing: border-box;
}

/* Main popup container */
.image-preview-popup {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 8px;
    display: flex; /* Let flexbox determine the size */
    align-items: center;
    gap: 5px; /* Gap between arrows and image viewport */
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 100;
    pointer-events: none;
}

/* This rule makes the popup appear when active */
.image-preview-popup.active-popup {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
}

/* This is the viewport for the images */
.image-preview-scroller {
    margin: 0;
    padding: 0;
    overflow: hidden; /* CRUCIAL: This clips the partial images */
}

/* This inner element contains all images and moves left/right */
.image-preview-scroller-inner {
    display: flex;
    gap: 5px; /* Sets the space between images */
    transition: transform 0.3s ease;
}

.image-preview-popup img {
    flex-shrink: 0;
    width: 70px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
}

/* Navigation arrows */
.preview-nav-arrow {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    border-radius: 5px;
    width: 25px;
    height: 40px;
    /* REMOVED: display: none; */
    display: flex; /* Always display them but control visibility with JS based on state */
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
    font-size: 1.2em;
    font-weight: bold;
    transition: background-color 0.2s ease;
    /* ADDED: Initial opacity to allow JS to control 'display' behavior visually */
    opacity: 0;
    pointer-events: none; /* Make them not clickable when hidden by opacity */
}

.preview-nav-arrow.visible { /* New class for controlling arrow visibility */
    opacity: 1;
    pointer-events: auto;
}


.preview-nav-arrow:hover {
    background-color: rgba(0, 0, 0, 0.8);
}


/* Full screen zoom overlay */
.full-screen-zoom-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease;
}

.full-screen-zoom-overlay.active { /* This class will now make the overlay visible */
    opacity: 1;
    visibility: visible;
}

.full-screen-zoom-overlay img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
}

/* Dark mode adjustments for the hover preview */
body.dark .image-preview-popup {
    background-color: var(--dark-card-bg);
    border-color: var(--dark-border-color);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.15);
}

body.dark .image-preview-popup img {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
}

body.dark .preview-nav-arrow {
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--text-color);
}

body.dark .preview-nav-arrow:hover {
    background-color: rgba(255, 255, 255, 0.4);
}

/* Full-Screen Image Zoom Overlay Styling (no changes) */
.full-screen-zoom-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0s linear 0.3s;
    cursor: zoom-out;
}

.full-screen-zoom-overlay.active {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
}

.full-screen-zoom-overlay img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    pointer-events: none;
}

/* Ensure arrows are BLOCK by default for flex container, but hidden by JS */
.preview-nav-arrow {
    visibility: hidden; /* Hide via visibility, JS will toggle this */
    /* All other arrow styles remain */
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    padding: 5px 8px;
    cursor: pointer;
    font-size: 1.2rem;
    border-radius: 4px;
    transition: background-color 0.2s ease, visibility 0.2s ease; /* Add transition for visibility */
    flex-shrink: 0;
    width: 25px;
    text-align: center;
    box-sizing: border-box;
}

.preview-nav-arrow:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

/* ===============================
    Expertise Section Styling
================================= */
.expertise-section {
    padding: 60px 50px;
    text-align: center;
    min-height: 600px;
    color: var(--text-color); /* This variable controls general text in this section *outside* the canvas */
}

.expertise-section h2 {
    color: var(--text-color); /* Heading color for this section */
}

/* Container for all charts */
.charts-grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Flexible columns, min 300px wide */
    gap: 30px; /* Space between charts */
    max-width: 1200px;
    margin: 40px auto 0 auto; /* Center the grid and add top margin */
    align-items: stretch; /* Make items equal height */
    justify-content: center;
}

/* Individual chart container styling */
.bar-chart, .pie-chart-container {
    height: 400px; /* Consistent height for all charts */
    background: var(--card-bg-color); /* This is the line that makes it dark in dark mode by default */
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex; /* Use flex to center canvas */
    justify-content: center;
    align-items: center;
    flex-direction: column; /* Stack chart title and canvas */
    position: relative; /* Needed for pseudo-element positioning */
    z-index: 1; /* Ensure content is above the pseudo-element */
    overflow: hidden; /* Important for the rainbow border effect */
}
.bar-chart:hover, .pie-chart-container:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* --- NEW CSS ADDITION BELOW --- */

/* This rule forces the chart container background to be light,
   even when the overall body is in 'dark mode' (i.e., does NOT have the 'light' class).
   This makes the dark text inside the chart visible. */
body:not(.light) .bar-chart,
body:not(.light) .pie-chart-container {
    background: #ffffff !important; /* Force a white background for charts in dark theme */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important; /* Keep a light shadow for consistency */
    color: #333 !important; /* Ensures any HTML text *directly within* these containers is dark */
}

/* If your overall theme switches by adding/removing a 'dark' class instead of 'light' */
/* body.dark .bar-chart, */
/* body.dark .pie-chart-container { */
/* background: #ffffff !important; */
/* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important; */
/* color: #333 !important; */
/* } */

/* Specific styling for chart canvases within their containers */
.bar-chart canvas, .pie-chart-container canvas {
    width: 100% !important; /* Ensure canvas fills container */
    height: 100% !important;
    /* REMINDER: CSS cannot style content drawn *inside* the canvas.
       The Chart.js text colors were already set to dark in your JavaScript
       in the previous step, so combined with the light background above,
       they should now be visible. */
}

/* Attempting to target common Chart.js generated HTML elements (if they are not drawn on canvas) */
.chartjs-tooltip {
    color: #333 !important; /* Force dark tooltip text */
    background-color: rgba(255, 255, 255, 0.9) !important; /* Force light tooltip background */
    border-color: #333 !important; /* Force dark tooltip border */
}

.chartjs-legend {
    color: #333 !important; /* Force dark HTML legend text */
}

.chartjs-title, .chartjs-axis-title {
    color: #333 !important; /* Force dark HTML titles if Chart.js creates them as HTML */
}

/* ===============================
    Pie Chart Specific Styling (Consolidated)
================================= */
/* Hover effects for charts are now handled by .bar-chart:hover */


/* ===============================
    Education Section Styling
================================= */
.section-education {
    padding: 80px 50px;
    text-align: center;
}

.section-education h2 {
    margin-bottom: 50px;
}

.education-details {
    display: flex;
    flex-direction: row; /* Keep items in a row */
    gap: 30px;
    margin-top: 20px;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 900px;
}

.education-item {
    background-color: var(--card-bg-color); /* Use CSS variable for background */
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    animation: fadeIn 0.8s ease-in-out;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: calc(50% - 20px); /* Two items per row */
    min-width: 300px;
    text-align: left;
    color: var(--card-text-color); /* Text color from variable */
    position: relative; /* Needed for pseudo-element positioning */
    z-index: 1; /* Ensure content is above the pseudo-element */
    overflow: hidden; /* Important for the rainbow border effect */
}
.education-item:nth-child(1) { animation-delay: 0.1s; }
.education-item:nth-child(2) { animation-delay: 0.2s; }


.education-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.education-item h3 {
    font-size: 1.5rem;
    color: var(--card-heading-color); /* Heading color from variable */
    margin-bottom: 10px;
}

.education-item p {
    font-size: 1rem;
    color: var(--card-text-color); /* Text color from variable */
    margin: 8px 0;
}
@media (max-width: 768px) {
    .education-item {
        width: 100%;
        min-width: unset;
    }
}

/* ===============================
    Rainbow Border Animation (on the outer strip) - REVISED
================================= */

/* Keyframes for the conic gradient spin */
@keyframes spin {
    100% {
        transform: rotate(-360deg);
    }
}

/* Apply to all relevant card-like elements using a pseudo-element for the outer glow */
.experience-item,
.card,
.project-item,
.bar-chart,
.pie-chart-container,
.education-item,
.icon /* Added .icon here for social links */
{
    position: relative; /* Ensure positioning context for pseudo-elements */
    z-index: 1; /* Ensure card content is above the pseudo-elements */
    overflow: hidden; /* Hide the spinning gradient outside the border */
}

.experience-item::before,
.project-item::before,
.bar-chart::before,
.pie-chart-container::before,
.education-item::before,
.icon::before /* Added .icon::before */
{
    content: "";
    height: 150%; /* Larger to ensure gradient covers rotation */
    width: 150%; /* Larger to ensure gradient covers rotation */
    position: absolute;
    background: conic-gradient(
        #fd004c,
        #fe9000,
        #fff020,
        #3edf4b,
        #3363ff,
        #b102b7,
        #fd004c
    );
    left: -25%; /* Position to cover the card plus extra for rotation */
    top: -25%; /* Position to cover the card plus extra for rotation */
    animation: spin 3s infinite linear; /* Adjusted speed to 3s */
    border-radius: inherit; /* Inherit parent's border-radius */
    z-index: -2; /* Place behind the outer content and the mask */
    opacity: 0; /* Hidden by default */
    transition: opacity 0.3s ease; /* Smooth fade-in/out */
}

/* The inner mask that creates the border effect */
.experience-item::after,
.project-item::after,
.bar-chart::after,
.pie-chart-container::after,
.education-item::after,
.icon::after /* Added .icon::after */
{
    content: "";
    position: absolute;
    /* Calculate size and position to create a border effect */
    height: calc(100% - 6px); /* 3px border on each side (total 6px less) */
    width: calc(100% - 6px);
    top: 3px; /* Move in 3px from top */
    left: 3px; /* Move in 3px from left */
    border-radius: inherit; /* Inherit parent's border-radius */
    z-index: -1; /* Place between the spinning gradient and the card content */
    background-color: var(--card-bg-color); /* Dynamic background for light/dark mode, now directly using variable */
    transition: background-color 0.3s ease;
}

/* Hover effects to reveal the rainbow border */
.experience-item:hover::before,
.project-item:hover::before,
.bar-chart:hover::before,
.pie-chart-container:hover::before,
.education-item:hover::before,
.icon:hover::before /* Added .icon:hover::before */
{
    opacity: 1;
}


/* Re-apply box-shadow directly to the card for general appearance */
.experience-item,
.project-item,
.bar-chart,
.pie-chart-container,
.education-item,
.icon /* Ensure icons also have initial shadow if desired, though border might make it redundant */
{
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Re-add original card shadow */
}

/* Dark mode specific box-shadow */
body.dark .experience-item,
body.dark .project-item,
body.dark .bar-chart,
body.dark .pie-chart-container,
body.dark .education-item,
body.dark .icon /* Dark mode shadow for icons */
{
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* About Bullets */
.content .about-bullets {
    list-style-type: disc; /* Standard bullet points */
    margin-left: 20px; /* Indent the bullets slightly */
    padding-left: 0; /* Remove default padding from UL */
    text-align: left; /* Ensure the text aligns to the left */
    max-width: none; /* Remove any max-width restriction inherited from .description */
    width: 100%; /* Ensure it takes full available width within its parent */
    color: var(--text-color); /* Use variable for About section text */
    line-height: 1.7; /* Good for readability */
    margin-top: 20px; /* Space above the list */
    margin-bottom: 20px; /* Space below the list */
}

.content .about-bullets li {
    margin-bottom: 10px; /* Space between bullet points */
    padding-left: 5px; /* Small padding to ensure text doesn't touch the bullet */
}

/* Overseas Message Styling */
.content .overseas-message {
    text-align: left;
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: none;
    width: 100%;
    line-height: 1.7;
    color: var(--text-color); /* Use variable for text color */
    -webkit-text-fill-color: unset; /* Ensures text is not transparent */
}

.content .overseas-message h3 {
    font-size: 1.8rem;
    color: var(--accent-color); /* Use accent color for heading */
    margin-bottom: 15px;
    text-align: left;
}

/* New CSS for the overseas-bullets list */
.content .overseas-bullets {
    list-style-type: disc; /* Standard bullet points */
    margin-left: 20px; /* Indent the bullets slightly from the left edge of the .content */
    padding-left: 0; /* Remove default padding from UL */
    text-align: left; /* Ensure the text aligns to the left */
    max-width: none; /* Remove any max-width restriction for this list */
    width: 100%; /* Ensure it takes full available width within its parent */
    color: var(--text-color); /* Use variable for bullet text */
    line-height: 1.7; /* Good for readability */
    margin-top: 10px; /* Space between heading and list */
    margin-bottom: 0; /* Space below the list (if needed, adjust) */
}

.content .overseas-bullets li {
    margin-bottom: 10px; /* Space between each bullet point */
    padding-left: 5px; /* Small padding to ensure text doesn't touch the bullet */
}


/* ===============================
    Contact Section Styling
================================= */
.section-contact p {
    font-size: 1.1rem;
    max-width: 700px;
    margin-bottom: 15px;
    line-height: 1.7;
    color: var(--text-color); /* Use variable for contact text */
    text-align: center;
}

.section-contact p:last-child { /* Copyright text */
    color: var(--card-text-color); /* Slightly lighter for copyright */
}


/* Responsive Design */
@media (max-width: 1024px) {
    .sticky-nav {
        width: 90%;
        max-width: none; /* Remove max-width on smaller screens */
    }
    .nav-links {
        flex-wrap: wrap; /* Allow nav links to wrap */
        height: auto; /* Adjust height based on content */
        padding: 10px 0;
        justify-content: center; /* Center items when wrapping */
    }
    .nav-links li {
        width: 45%; /* Two items per row */
        margin: 5px 0;
        text-align: center;
    }
    .nav-links a, .nav-links li .theme-toggle-btn {
        justify-content: center; /* Center icons and text */
        font-size: 13px;
        padding: 8px 10px;
        width: 100%; /* Ensure button/link takes full width of its li */
    }
    .section-1 {
        flex-direction: column;
        padding: 80px 20px;
        text-align: center;
        gap: 30px;
    }
    .photo {
        margin: 0; /* Remove specific margin */
    }
    .content {
        text-align: center; /* Center text content */
    }
    .content h1 {
        justify-content: center; /* Center the rotating text */
        font-size: 28px;
        flex-wrap: wrap; /* Allow header text to wrap */
    }
    .rotating-text {
        margin-left: 0; /* No margin if wrapping */
        min-width: unset;
        display: block; /* Make it a block element to go to new line */
    }
    .cd-words-wrapper {
        display: block; /* Ensure word wrapper behaves as block on small screens */
        position: relative; /* Keep positioning for animation */
        left: unset;
        top: unset;
    }
    .word {
        position: relative; /* Adjust positioning for wrapping */
        display: block;
        font-size: 28px;
        transform: translateY(0) !important; /* Reset animation position */
        opacity: 1 !important; /* Keep visible if not animating */
    }
    .expertise-section {
        padding: 60px 20px;
    }
    .charts-grid-container {
        grid-template-columns: 1fr; /* Stack charts vertically */
        gap: 25px;
    }
}

@media (max-width: 768px) {
    .section h2 {
        font-size: 2.2rem;
        margin-bottom: 30px;
    }
    .content h1 {
        font-size: 24px;
    }
    .word {
        font-size: 24px;
    }
    .content p.description {
        font-size: 1rem;
        text-align: left; /* Keep justified text for readability */
    }
    /* Experience container will now just scroll more easily */
    /* .experience-container, .projects-container, .education-details {
        flex-direction: column;
        gap: 20px;
        padding: 0 10px;
    } */
    .project-item, .education-item {
        width: 100%;
        min-width: unset;
    }
    .icon {
        width: 55px;
        height: 55px;
        font-size: 1.8rem;
        padding: 12px;
    }
}

.gradient-text {
  font-size: 2em; /* Adjust as needed */
  background-image: linear-gradient(45deg, #f3ec78, #af4261); /* Define the gradient */
  background-clip: text; /* Clip the background to the text */
  -webkit-background-clip: text; /* For Safari */
  text-fill-color: transparent; /* Make the text transparent */
  -webkit-text-fill-color: transparent; /* For Safari */
}

/* =========================================================================
   Responsive Design Adjustments (Add these sections to the END of your CSS)
   ========================================================================= */


/* ---------------------------------------------------
   1. For Tablets and Smaller Laptops (e.g., max-width 1024px)
      This is for screens slightly smaller than typical desktops.
   --------------------------------------------------- */
@media (max-width: 1024px) {
    body {
        padding: 1.5rem; /* Slightly reduce overall page padding */
        font-size: 15px; /* Adjust base font size if using 'rem' units */
    }

    /* General adjustments for cards/containers */
    .card {
        max-width: 90%; /* Allow cards to take up more width */
        padding: 2rem; /* Slightly reduce padding inside cards */
        margin: 1.5rem auto; /* Adjust vertical spacing between cards */
    }

    /* Adjust heading sizes */
    h1 { font-size: 2.5em; }
    h2 { font-size: 2em; }
    h3 { font-size: 1.6em; } /* Adjust card h3 size */
    h4 { font-size: 1.3em; }

    /* Adjust paragraph and list item spacing */
    p, ul, ol {
        line-height: 1.5;
        margin-bottom: 0.8em;
    }

    /* Adjust bold text inside list items */
    .card li b {
        font-size: 1em; /* Make it slightly smaller */
        margin-bottom: 0.6rem; /* Adjust spacing below bold text */
    }

    /* If you have a main content wrapper (e.g., a .container) */
    .container {
        max-width: 95%; /* Adjust width for main content */
    }

    /* Any multi-column layouts might need to stack or reduce column count */
    /* Example for a flex container: */
    .flex-container {
        flex-wrap: wrap; /* Allow items to wrap to next line */
        gap: 15px; /* Adjust gap between items */
    }
    /* Example for a grid container: */
    .grid-layout {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjust columns */
    }

    /* Adjust hero section elements or large banners */
    .hero-section {
        padding: 80px 0; /* Reduce padding */
    }
}


/* ---------------------------------------------------
   2. For Standard Tablets and Medium Phones (e.g., max-width 768px)
      This is a common breakpoint for landscape tablets and larger phones.
   --------------------------------------------------- */
@media (max-width: 768px) {
    body {
        padding: 1rem;
        font-size: 14px;
    }

    .card {
        max-width: 95%; /* Make cards almost full width on tablets */
        padding: 1.5rem;
        margin: 1rem auto;
        border-radius: 25px; /* Slightly reduce border-radius */
    }

    /* Further adjust heading sizes */
    h1 { font-size: 2.2em; }
    h2 { font-size: 1.8em; }
    h3 { font-size: 1.4em; } /* Adjust card h3 size */

    /* Adjust general text sizing */
    p, ul, ol, li {
        font-size: 0.95em;
    }

    /* Layouts often switch to single column or fewer columns */
    .flex-container {
        flex-direction: column; /* Stack items vertically */
    }
    .grid-layout {
        grid-template-columns: 1fr; /* Single column layout */
    }

    /* Navigation bars often need to change to a "hamburger" menu */
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }
    .navbar .nav-links {
        display: none; /* Hide traditional nav links */
        /* You'd then use JavaScript to toggle a mobile menu */
    }

    /* Hide elements that are not essential on smaller screens */
    .desktop-only-feature {
        display: none;
    }
}


/* ---------------------------------------------------
   3. For Mobile Phones (e.g., max-width 480px)
      This is for portrait mode on most smartphones.
   --------------------------------------------------- */
@media (max-width: 480px) {
    body {
        padding: 0.5rem; /* Minimal page padding */
        font-size: 13px; /* Smaller base font size for smaller screens */
    }

    .card {
        max-width: 100%; /* Cards take full width on mobile */
        padding: 1rem;
        margin: 0.8rem auto;
        border-radius: 15px; /* Smaller border-radius for mobile */
    }

    /* Smallest heading sizes */
    h1 { font-size: 1.8em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.2em; } /* Adjust card h3 size */

    /* Further adjust general text sizing for readability */
    p, ul, ol, li {
        font-size: 0.9em;
        margin-bottom: 0.6em;
    }

    .card li b {
        font-size: 0.9em;
        margin-bottom: 0.4rem;
    }

    /* Ensure horizontal scrolling is avoided for tables or large blocks */
    table {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }
    .responsive-table-wrapper { /* If you wrap tables in a div */
        overflow-x: auto;
    }
}
