/* =========================
    Preloader Functionality
   ========================= */
window.onload = function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Delay hiding the preloader by 2 seconds (2000 milliseconds)
        // This gives the animation time to play before the website appears.
        setTimeout(() => {
            preloader.classList.add('hidden'); // Add the 'hidden' class to fade it out
        }, 2500); // You can adjust this duration (in milliseconds) as needed
    }
};

/* ====================================
    Sticky Navigation Bar Functionality
   ==================================== */
document.addEventListener('DOMContentLoaded', () => {
    const stickyNav = document.getElementById('stickyNav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Hide nav on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            stickyNav.style.top = '-80px'; // Hide navigation further up
        } else {
            stickyNav.style.top = '20px'; // Visible position
        }

        lastScrollY = currentScrollY; // Update scroll position

        // Highlight active navigation link based on scroll position
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - stickyNav.offsetHeight; // Adjust for sticky nav height
            const sectionBottom = sectionTop + section.offsetHeight;
            const navLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);

            if (navLink) {
                if (currentScrollY >= sectionTop && currentScrollY < sectionBottom) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    });

    // Initial active link setting on load
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - stickyNav.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;
        const navLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
        if (navLink) {
             if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
});


/* =================================================
    Name Section - Rotating Text Animation
==================================================== */
document.addEventListener('DOMContentLoaded', function () {
    const words = document.querySelectorAll('.cd-words-wrapper .word');
    let currentIndex = 0;
    let rotationInterval; // Declare a variable to hold the interval ID

    function changeWord() {
        if (!words || words.length === 0) {
            console.warn("No words found for rotation. Stopping interval.");
            clearInterval(rotationInterval); // Stop if no words
            return;
        }

        // Remove previous visibility and animation classes
        words.forEach(word => {
            word.classList.remove('is-visible', 'slideOutToTop');
            word.style.display = 'none'; // Explicitly hide
            word.style.position = 'absolute'; // Maintain position
            word.style.left = '0';
            word.style.top = '0';
        });

        // Fade out the current word (if any was visible)
        if (words[currentIndex]) {
            words[currentIndex].classList.add('slideOutToTop');
            // After the fade-out, make the next word visible with its animation
            setTimeout(() => {
                // Ensure the previous word is fully hidden after its animation
                if (words[currentIndex]) {
                    words[currentIndex].style.display = 'none';
                }

                // Move to the next word
                currentIndex = (currentIndex + 1) % words.length;

                // Make the new word visible
                if (words[currentIndex]) {
                    words[currentIndex].classList.remove('slideOutToTop'); // Remove fade-out class if it somehow stuck
                    words[currentIndex].style.display = 'inline-block'; // Make it visible
                    words[currentIndex].classList.add('is-visible'); // Trigger slideInFromTop
                }
            }, 700); // This should match the duration of slideOutToTop animation (or be slightly longer)
        } else {
             // If for some reason words[currentIndex] is null/undefined at start
             currentIndex = (currentIndex + 1) % words.length;
             if (words[currentIndex]) {
                words[currentIndex].classList.remove('slideOutToTop');
                words[currentIndex].style.display = 'inline-block';
                words[currentIndex].classList.add('is-visible');
             }
        }
    }

    // Initialize the first word to be visible right away
    if (words.length > 0) {
        words[currentIndex].classList.add('is-visible');
        words[currentIndex].style.display = 'inline-block'; // Ensure initial visibility
        words[currentIndex].style.position = 'relative'; // Make it flow initially
    }


    // Only start interval if there's more than one word to rotate
    if (words.length > 1) {
        rotationInterval = setInterval(changeWord, 2500); // Change words every 2.5 seconds
    } else if (words.length === 1) {
        // If only one word, ensure it's visible and static
        words[0].classList.add('is-visible');
        words[0].style.display = 'inline-block';
        words[0].style.position = 'relative'; // Ensure it's not absolutely positioned if static
        words[0].classList.remove('word'); // Remove 'word' class to prevent 'display: none' from CSS
    }

    // Optional: Add an Intersection Observer to pause/resume animation
    // This is good practice for performance and battery life on mobile
    const rotatingTextContainer = document.querySelector('.rotating-text');
    if (rotatingTextContainer && words.length > 1) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!rotationInterval) { // Resume only if not already running
                        console.log("Rotating text in view, resuming animation.");
                        rotationInterval = setInterval(changeWord, 2500);
                        // Also, ensure the current word is visible on resume
                        if (words[currentIndex]) {
                            words[currentIndex].classList.add('is-visible');
                            words[currentIndex].style.display = 'inline-block';
                        }
                    }
                } else {
                    if (rotationInterval) { // Pause only if running
                        console.log("Rotating text out of view, pausing animation.");
                        clearInterval(rotationInterval);
                        rotationInterval = null;
                    }
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

        observer.observe(rotatingTextContainer);
    }
});


/* ===============================
    Light & Dark Mode Toggle
================================= */
document.addEventListener("DOMContentLoaded", function () {
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeIcon.textContent = '🌙'; // Moon icon for dark mode
    } else {
        body.classList.add('light');
        themeIcon.textContent = '☀️'; // Sun icon for light mode
    }

    // Theme Toggle functionality
    themeIcon.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            // Switch to light mode
            body.classList.remove('dark');
            body.classList.add('light');
            themeIcon.textContent = '☀️'; // Set sun icon for light mode
            localStorage.setItem('theme', 'light'); // Store in localStorage
        } else {
            // Switch to dark mode
            body.classList.remove('light');
            body.classList.add('dark');
            themeIcon.textContent = '🌙'; // Set moon icon for dark mode
            localStorage.setItem('theme', 'dark'); // Store in localStorage
        }
        // Re-render charts to apply theme-specific colors
        // We'll re-initialize charts only when the expertise section is in view
        // to trigger the animation again for the new theme colors.
        // No immediate re-initialization here.
    });

    // Observe the expertise section for chart initialization
    const expertiseSection = document.getElementById('expertise');
    // We remove the `unobserve` here so charts can be re-initialized on theme change or if you scroll away and back
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initializeCharts(); // Initialize charts when expertise section becomes visible
            } else {
                // Optionally destroy charts when not in view to save resources or stop animations
                // destroyCharts(); // Implement this if needed
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

    chartObserver.observe(expertiseSection); // Start observing the expertise section
});


/* ===============================
    Scroll-triggered Fade-in for Experience & Project Items
================================= */
const animatedItems = document.querySelectorAll('.experience-item, .project-item, .education-item');

animatedItems.forEach((item, index) => {
    const itemId = item.id || `animated-item-${index}`; // Ensure each item has a unique ID or generate one
    const storageKey = `animated-${itemId}`;

    // Check localStorage on load
    if (localStorage.getItem(storageKey) === 'true') {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
        item.style.animationPlayState = 'running'; // Ensure animation state is running
        item.classList.add('animated-on-load'); // Add a class for CSS control if needed
    } else {
        // Set initial state for animation
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)'; // Or whatever your initial transform is
        item.style.animationPlayState = 'paused';
    }

    const itemObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.animationPlayState = 'running';
                item.classList.add('animated-on-load'); // Mark as animated
                localStorage.setItem(storageKey, 'true'); // Store in localStorage
                itemObserver.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Only observe if not already animated on load
    if (localStorage.getItem(storageKey) !== 'true') {
        itemObserver.observe(item);
    }
});

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================================
       Calculate and Display Duration for Professional Experience Dates (V4: Inclusive Months)
       ========================================================================= */

    // Helper function to calculate duration in years and months (ADJUSTED FOR INCLUSIVE COUNT)
    function calculateExperienceDuration(startDateStr, endDateStr) {
        const monthMap = {
            'jan': 0, 'january': 0,
            'feb': 1, 'february': 1,
            'mar': 2, 'march': 2,
            'apr': 3, 'april': 3,
            'may': 4, 'may': 4,
            'jun': 5, 'june': 5,
            'jul': 6, 'july': 6,
            'aug': 7, 'august': 7,
            'sep': 8, 'september': 8,
            'oct': 9, 'october': 9,
            'nov': 10, 'november': 10,
            'dec': 11, 'december': 11
        };

        const parseDateString = (dateString) => {
            const parts = dateString.split(' ');
            const monthKey = parts[0].toLowerCase();
            const monthIndex = monthMap[monthKey];
            const year = parseInt(parts[1]);
            return new Date(year, monthIndex, 1);
        };

        let startDate = parseDateString(startDateStr);
        let endDate;

        if (endDateStr.toLowerCase() === 'present') {
            endDate = new Date();
            endDate.setDate(1); // Set to 1st of current month for consistency
        } else {
            endDate = parseDateString(endDateStr);
        }

        // Calculate total months difference (inclusive of start and end month)
        let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                          (endDate.getMonth() - startDate.getMonth()) + 1; // Added +1 for inclusive count

        // Ensure minimum 1 month duration
        if (totalMonths <= 0) {
            totalMonths = 1;
        }

        let years = Math.floor(totalMonths / 12);
        let months = totalMonths % 12;

        let durationParts = [];
        if (years > 0) {
            durationParts.push(`${years} year${years > 1 ? 's' : ''}`);
        }
        if (months > 0) {
            durationParts.push(`${months} month${months > 1 ? 's' : ''}`);
        }

        // Format for cases like "1 year" instead of "1 year 0 months"
        if (years > 0 && months === 0) {
            return `${years} year${years > 1 ? 's' : ''}`;
        }
        // Format for cases like "5 months" instead of "0 years 5 months"
        if (years === 0 && months > 0) {
            return `${months} month${months > 1 ? 's' : ''}`;
        }
        // Fallback for unexpected cases, should ideally not be reached if totalMonths > 0
        return durationParts.join(' ');
    }

    // Loop through each date element and update its text content (this part remains the same)
    const dateElements = document.querySelectorAll('.experience-item p.date, .project-item p.date');

    dateElements.forEach(dateElement => {
        const originalDateText = dateElement.textContent.trim();
        const parts = originalDateText.split(' – ');

        if (parts.length === 2) {
            const startDateStr = parts[0].trim();
            const endDateStr = parts[1].trim();

            const duration = calculateExperienceDuration(startDateStr, endDateStr);

            if (duration) {
                dateElement.textContent = `${originalDateText} (${duration})`;
            }
        }
    });
});

/* ===============================
    Scroll-triggered Animation for Section Headings
================================= */
const sectionHeadings = document.querySelectorAll('.section h2');

sectionHeadings.forEach((heading, index) => {
    const headingId = heading.id || `heading-item-${index}`; // Ensure unique ID
    const storageKey = `animated-heading-${headingId}`;

    // Check localStorage on load
    if (localStorage.getItem(storageKey) === 'true') {
        heading.classList.add('animate-heading');
        heading.style.animationPlayState = 'running'; // Ensure the gradient animation runs
    } else {
        heading.style.animationPlayState = 'paused'; // Pause gradient animation initially
    }

    const headingObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-heading');
                entry.target.style.animationPlayState = 'running'; // Play the gradient animation
                localStorage.setItem(storageKey, 'true'); // Store in localStorage
                headingObserver.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 });

    // Only observe if not already animated on load
    if (localStorage.getItem(storageKey) !== 'true') {
        headingObserver.observe(heading);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // --- All your existing filter logic remains the same ---
    const mainSkillFilterContainer = document.querySelector('.main-skill-filters');
    const subSkillFilterContainer = document.querySelector('.sub-skill-filters');
    const projectItems = document.querySelectorAll('.project-item');
    const hideTimeouts = new Map();

    const fullScreenZoomOverlay = document.getElementById('fullScreenZoomOverlay');
    const fullScreenZoomImage = document.getElementById('fullScreenZoomImage');
    let zoomHideTimeout = null;

    const allProjectsButton = mainSkillFilterContainer.querySelector('[data-filter="all"]');
    if (allProjectsButton) {
        allProjectsButton.classList.add('active');
    }
    filterProjects('all');
    subSkillFilterContainer.classList.remove('active');

    mainSkillFilterContainer.addEventListener('click', (event) => {
        const targetButton = event.target.closest('.filter-btn');
        if (targetButton) {
            mainSkillFilterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            targetButton.classList.add('active');
            const filterValue = targetButton.dataset.filter;
            if (filterValue === 'python') {
                subSkillFilterContainer.classList.add('active');
                subSkillFilterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                filterProjects('python');
            } else {
                subSkillFilterContainer.classList.remove('active');
                subSkillFilterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                filterProjects(filterValue);
            }
        }
    });

    subSkillFilterContainer.addEventListener('click', (event) => {
        const targetButton = event.target.closest('.filter-btn');
        if (targetButton) {
            subSkillFilterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            targetButton.classList.add('active');
            mainSkillFilterContainer.querySelector('[data-filter="python"]').classList.add('active');
            const filterValue = targetButton.dataset.filter;
            filterProjects(filterValue);
        }
    });

    function filterProjects(selectedFilter) {
        let visibleItemsCount = 0;
        projectItems.forEach(item => {
            const itemSkills = item.dataset.skills ? item.dataset.skills.split(' ') : [];
            const isVisible = (selectedFilter === 'all') || itemSkills.includes(selectedFilter);
            if (hideTimeouts.has(item)) {
                clearTimeout(hideTimeouts.get(item));
                hideTimeouts.delete(item);
            }
            if (isVisible) {
                if (item.style.display === 'none') {
                    item.style.display = 'flex';
                    void item.offsetWidth;
                }
                item.classList.remove('hidden');
                item.classList.add('visible');
                visibleItemsCount++;
                item.querySelectorAll('.skill-btn').forEach(skillBtn => {
                    if (skillBtn.dataset.filter === selectedFilter) {
                        skillBtn.classList.add('active');
                    } else {
                        skillBtn.classList.remove('active');
                    }
                });
            } else {
                item.classList.remove('visible');
                item.classList.add('hidden');
                const timeoutId = setTimeout(() => {
                    if (item.classList.contains('hidden')) {
                        item.style.display = 'none';
                    }
                    hideTimeouts.delete(item);
                }, 400);
                hideTimeouts.set(item, timeoutId);
                item.querySelectorAll('.skill-btn').forEach(skillBtn => skillBtn.classList.remove('active'));
            }
        });
        projectItems.forEach(item => {
            if (item.classList.contains('visible')) {
                item.classList.toggle('single-item', visibleItemsCount === 1);
            } else {
                item.classList.remove('single-item');
            }
        });
    }

    // --- NEW DYNAMIC IMAGE PREVIEW LOGIC ---

    const IMAGE_WIDTH = 70;
    const IMAGE_GAP_SCROLLER = 5;
    const ARROW_WIDTH = 25;
    const POPUP_GAP_ARROWS = 5;
    const POPUP_PADDING = 8;

    document.querySelectorAll('.view-images-btn').forEach(button => {
        const imagePreviewPopup = button.querySelector('.image-preview-popup');
        let currentImagePreviewIndex = 0;
        let imageUrls = [];
        let IMAGES_PER_VIEW_DYNAMIC = 4; // Default value

        let previewScroller;
        let prevArrow, nextArrow;

        function updatePreviewDisplay() {
            if (!previewScroller || imageUrls.length === 0) return;

            const itemFullWidth = IMAGE_WIDTH + IMAGE_GAP_SCROLLER;
            const offset = -(currentImagePreviewIndex * itemFullWidth);
            previewScroller.style.transform = `translateX(${offset}px)`;

            if (prevArrow) {
                prevArrow.style.visibility = currentImagePreviewIndex > 0 ? 'visible' : 'hidden';
            }
            if (nextArrow) {
                nextArrow.style.visibility = (currentImagePreviewIndex + IMAGES_PER_VIEW_DYNAMIC) < imageUrls.length ? 'visible' : 'hidden';
            }
        }

        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();

            document.querySelectorAll('.image-preview-popup.active-popup').forEach(activePopup => {
                if (activePopup !== imagePreviewPopup) {
                    activePopup.classList.remove('active-popup');
                }
            });

            const willOpen = !imagePreviewPopup.classList.contains('active-popup');
            imagePreviewPopup.classList.toggle('active-popup');

            if (willOpen) {
                if (imagePreviewPopup.dataset.imagesLoaded !== 'true') {
                    const imagesString = button.dataset.images;
                    if (imagesString) {
                        imageUrls = imagesString.split(',').map(url => url.trim());
                        IMAGES_PER_VIEW_DYNAMIC = parseInt(button.dataset.imagesPerView || '4', 10);

                        const totalImages = imageUrls.length;
                        const visibleImageCount = Math.min(totalImages, IMAGES_PER_VIEW_DYNAMIC);
                        const needsArrows = totalImages > IMAGES_PER_VIEW_DYNAMIC;
                        
                        imagePreviewPopup.innerHTML = ''; // Clear previous content

                        // Dynamically calculate and set the popup's width
                        let popupWidth = (IMAGE_WIDTH * visibleImageCount) + (IMAGE_GAP_SCROLLER * (visibleImageCount - 1)) + (POPUP_PADDING * 2) + 2;
                        if (needsArrows) {
                            popupWidth += (ARROW_WIDTH * 2) + (POPUP_GAP_ARROWS * 2);
                        }
                        imagePreviewPopup.style.width = `${popupWidth}px`;

                        // Create and add images to a scroller element
                        previewScroller = document.createElement('div');
                        previewScroller.classList.add('image-preview-scroller');
                        imageUrls.forEach(url => {
                            const img = document.createElement('img');
                            img.src = url;
                            img.alt = 'Project Screenshot';
                            img.addEventListener('mouseenter', (e) => {
                                clearTimeout(zoomHideTimeout);
                                fullScreenZoomImage.src = e.target.src;
                                fullScreenZoomOverlay.classList.add('active');
                            });
                            img.addEventListener('mouseleave', () => {
                                zoomHideTimeout = setTimeout(() => fullScreenZoomOverlay.classList.remove('active'), 50);
                            });
                            previewScroller.appendChild(img);
                        });

                        // Add arrows only if needed
                        if (needsArrows) {
                            prevArrow = document.createElement('button');
                            prevArrow.classList.add('preview-nav-arrow', 'prev');
                            prevArrow.textContent = '‹';
                            prevArrow.addEventListener('click', (e) => {
                                e.stopPropagation();
                                if (currentImagePreviewIndex > 0) {
                                    currentImagePreviewIndex--;
                                    updatePreviewDisplay();
                                }
                            });

                            nextArrow = document.createElement('button');
                            nextArrow.classList.add('preview-nav-arrow', 'next');
                            nextArrow.textContent = '›';
                            nextArrow.addEventListener('click', (e) => {
                                e.stopPropagation();
                                if ((currentImagePreviewIndex + IMAGES_PER_VIEW_DYNAMIC) < totalImages) {
                                    currentImagePreviewIndex++;
                                    updatePreviewDisplay();
                                }
                            });

                            imagePreviewPopup.appendChild(prevArrow);
                            imagePreviewPopup.appendChild(previewScroller);
                            imagePreviewPopup.appendChild(nextArrow);
                        } else {
                            imagePreviewPopup.appendChild(previewScroller);
                            prevArrow = null;
                            nextArrow = null;
                        }
                        
                        imagePreviewPopup.dataset.imagesLoaded = 'true';
                    }
                }
                currentImagePreviewIndex = 0;
                requestAnimationFrame(updatePreviewDisplay);
            } else {
                 imagePreviewPopup.dataset.imagesLoaded = 'false';
                 imagePreviewPopup.innerHTML = '';
            }
        });
    });

    // --- Full-screen zoom and closing logic (remains the same) ---
    if (fullScreenZoomOverlay) {
        fullScreenZoomOverlay.addEventListener('mouseenter', () => clearTimeout(zoomHideTimeout));
        fullScreenZoomOverlay.addEventListener('mouseleave', () => {
            zoomHideTimeout = setTimeout(() => fullScreenZoomOverlay.classList.remove('active'), 50);
        });
        fullScreenZoomOverlay.addEventListener('click', () => {
            fullScreenZoomOverlay.classList.remove('active');
            clearTimeout(zoomHideTimeout);
        });
    }

    document.addEventListener('click', (event) => {
        document.querySelectorAll('.image-preview-popup.active-popup').forEach(activePopup => {
            const button = activePopup.closest('.view-images-btn');
            if (button && !button.contains(event.target) && !activePopup.contains(event.target)) {
                activePopup.classList.remove('active-popup');
                activePopup.dataset.imagesLoaded = 'false';
                activePopup.innerHTML = '';
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
             document.querySelectorAll('.image-preview-popup.active-popup').forEach(activePopup => {
                activePopup.classList.remove('active-popup');
                activePopup.dataset.imagesLoaded = 'false';
                activePopup.innerHTML = '';
            });
            if (fullScreenZoomOverlay.classList.contains('active')) {
                fullScreenZoomOverlay.classList.remove('active');
            }
        }
    });

    filterProjects('all');
});

/* ===============================
    Expertise Section - Chart Implementation
================================= */

// Store chart instances to destroy them later for theme switching/re-rendering
let myCharts = {};

// Function to create a bar chart with animation
function createBarChart(ctx, labels, data, chartTitle) {
    // Destroy existing chart instance if it exists
    if (myCharts[ctx.canvas.id]) {
        myCharts[ctx.canvas.id].destroy();
    }

    // --- IMPORTANT: FORCING ALL CHART COLORS TO LIGHT MODE AESTHETIC ---
    // These colors will now be used regardless of the overall website theme.
    const textColor = '#333'; // Dark text for titles, labels, legends (like light mode)
    const gridColor = 'rgba(0, 0, 0, 0.1)'; // Subtle dark grid lines (like light mode)
    const tickColor = '#333'; // Dark tick labels (like light mode)

    const tooltipBg = 'rgba(255, 255, 255, 0.9)'; // Light tooltip background (like light mode)
    const tooltipText = '#333'; // Dark tooltip text (like light mode)

    const barColors = [ // Your preferred 'light mode' bar colors
        'rgba(75, 192, 192, 0.8)',  // Teal
        'rgba(153, 102, 255, 0.8)', // Purple
        'rgba(255, 99, 132, 0.8)',  // Red
        'rgba(54, 162, 235, 0.8)',  // Blue
        'rgba(255, 206, 86, 0.8)'   // Yellow
    ];
    // --- END FORCED CHART COLORS ---


    myCharts[ctx.canvas.id] = new Chart(ctx, { // Store the chart instance
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Proficiency (0 to 10)',
                    data: data,
                    backgroundColor: barColors.slice(0, labels.length), // Use forced light mode colors
                    borderColor: barColors.slice(0, labels.length).map(color => color.replace('0.8', '1')),
                    borderWidth: 1,
                    borderRadius: 5,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y', // Makes bars horizontal
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#3674B5', // Uses forced dark text
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        generateLabels: function(chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map(function(label, i) {
                                    const backgroundColor = data.datasets[0].backgroundColor[i];
                                    const borderColor = data.datasets[0].borderColor[i];
                                    return {
                                        text: label,
                                        fillStyle: backgroundColor,
                                        strokeStyle: borderColor,
                                        lineWidth: 1,
                                        hidden: false,
                                        index: i
                                    };
                                });
                            }
                            return [];
                        }
                    }
                },
                title: {
                    display: true,
                    text: chartTitle,
                    font: {
                        size: 16,
                        weight: 'bold',
                    },
                    color: '#A890FE', // Uses forced dark text
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.x !== null) {
                                label += context.parsed.x + ' / 10';
                            }
                            return label;
                        }
                    },
                    backgroundColor: tooltipBg, // Uses forced light background
                    titleColor: tooltipText,    // Uses forced dark text
                    bodyColor: tooltipText,     // Uses forced dark text
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 10,
                    grid: {
                        display: false,
                    },
                    ticks: {
                        stepSize: 1,
                        color: '#3674B5', // Uses forced dark text
                    },
                    title: {
                        display: true,
                        text: 'Proficiency',
                        font: {
                            size: 16,
                            weight: 'bold',
                        },
                        color: '#A890FE', // Uses forced dark text
                    },
                },
                y: {
                    grid: {
                        color: gridColor, // Uses forced dark grid lines
                    },
                    ticks: {
                        color: '#3674B5', // Uses forced dark text
                    }
                },
            },
            animation: {
                duration: 4000,
                easing: 'linear',
                x: {
                    easing: 'linear',
                    duration: 4000,
                    from: 0
                },
                delay: (context) => {
                    return context.dataIndex * 500;
                },
                onProgress: function(animation) {
                    const chart = animation.chart;
                    const { ctx } = chart;
                    const meta = chart.getDatasetMeta(0);

                    meta.data.forEach((bar, index) => {
                        const value = data[index];
                        const currentX = bar.x;
                        const targetX = chart.scales.x.getPixelForValue(value);

                        if (currentX < targetX && currentX > chart.scales.x.left) {
                            ctx.save();
                            ctx.fillStyle = bar.options.backgroundColor;
                            ctx.beginPath();
                            ctx.rect(
                                chart.scales.x.left,
                                bar.y - bar.height / 2,
                                currentX - chart.scales.x.left,
                                bar.height
                            );
                            ctx.fill();
                            ctx.restore();
                        }
                    });
                },
                onComplete: function(animation) {
                    const chart = animation.chart;
                    setTimeout(() => {
                        chart.data.datasets[0].data = data.map(() => 0);
                        chart.update({ duration: 0, lazy: true });

                        setTimeout(() => {
                            chart.data.datasets[0].data = [...data];
                            chart.update({ duration: 4000, lazy: true });
                        }, 500);
                    }, 2000);
                }
            }
        },
    });
}


/* ==============================================
    Function to create a pie chart with animation
   ============================================== */

function createPieChart(ctx, labels, data, chartTitle) {
    // Destroy existing chart instance if it exists
    if (myCharts[ctx.canvas.id]) {
        myCharts[ctx.canvas.id].destroy();
    }

    const isDarkMode = document.body.classList.contains('dark');
    const textColor = isDarkMode ? '#e0e0e0' : '#333';
    const pieColors = isDarkMode ?
        [
            '#FF8C00',  // DarkOrange (BFSI)
            '#00BFFF',  // DeepSkyBlue (FMCG)
            '#ADFF2F',  // GreenYellow (Media)
            '#DA70D6'   // Orchid (Telecommunication)
        ] :
        [
            '#FF6384', // Red (BFSI)
            '#36A2EB', // Blue (FMCG)
            '#FFCE56', // Yellow (Media)
            '#4BC0C0'  // Cyan (Telecommunication)
        ];
    const hoverPieColors = isDarkMode ?
        [
            '#FFA500', // Orange (BFSI)
            '#87CEFA', // LightSkyBlue (FMCG)
            '#98FB98', // PaleGreen (Media)
            '#EE82EE'  // Violet (Telecommunication)
        ] :
        [
            '#FF416C', // Darker Red
            '#357EC7', // Darker Blue
            '#FFB100', // Darker Yellow
            '#38B0A7'  // Darker Cyan
        ];

    myCharts[ctx.canvas.id] = new Chart(ctx, { // Store the chart instance
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: pieColors,
                hoverBackgroundColor: hoverPieColors,
                borderWidth: 2,
                borderColor: isDarkMode ? '#1a1a1a' : '#fff', // Border color adapts to theme
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold',
                        },
                        color: '#3674B5', // Legend text color adapts to theme
                        padding: 20,
                    },
                },
                title: {
                    display: true,
                    text: chartTitle,
                    font: {
                        size: 16,
                        weight: 'bold',
                    },
                    color: '#A890FE',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value}% (${percentage}%)`;
                        }
                    },
                    backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.7)',
                    titleColor: textColor,
                    bodyColor: textColor,
                },
                datalabels: { // Configuration for chartjs-plugin-datalabels
                    color: '#333', // Label text color
                    font: {
                        weight: 'bold',
                        size: 14,
                    },
                    formatter: (value, context) => {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return percentage + '%';
                    },
                    // Position labels outside if possible, or intelligently
                    anchor: 'end', // Anchor point of the label (start, center, end)
                    align: 'end', // How the label is aligned relative to the anchor point
                    offset: 5, // Distance from the anchor point
                    display: function(context) {
                        // Only display if the slice is large enough or a significant percentage
                        return context.dataset.data[context.dataIndex] > 0; // Only show for non-zero values
                    }
                }
            },
            animation: {
                duration: 1500, // Duration for one full rotation (5 seconds for a slower clock)
                easing: 'linear', // Linear easing for a consistent clock movement
                animateRotate: true, // Enable Chart.js's default rotation animation for initial load
                animateScale: true, // Keep scale animation for initial pop-in
                // Key change for continuous clock rotation
                onComplete: function(animation) {
                    const chart = animation.chart;
                    // Check if animation is complete and not just an update
                    if (animation.initial) { // 'initial' property indicates the first animation
                        chart.options.animation.animateRotate = false; // Disable default animateRotate
                    }
                    chart.options.rotation = chart.options.rotation + (2 * Math.PI); // Add 360 degrees (2 * PI radians)
                    chart.update({ duration: 5000, easing: 'linear' }); // Update to continue spinning
                }
            },
            // Initial rotation (starts at 0, will be incremented in onComplete)
            rotation: 0
        },
        plugins: [ChartDataLabels] // Register the datalabels plugin here
    });
}

// Function to initialize all charts
function initializeCharts() {
    // Data for expertise charts (using proficiency on a scale of 0-10)
    const programmingLabels = ['SQL', 'Python'];
    const programmingData = [8, 8];

    const biLabels = ['Power BI', 'Tableau', 'Looker', 'QuickSight'];
    const biData = [8, 7, 7, 6];

    const cloudLabels = ['S3', 'Redshift', 'Athena', 'Glue'];
    const cloudData = [7, 7, 5, 5];

    const etlLabels = ['Alteryx'];
    const etlData = [8];

    // Get contexts for bar charts
    const programmingCtx = document.getElementById('programmingChart').getContext('2d');
    const biCtx = document.getElementById('biChart').getContext('2d');
    const cloudCtx = document.getElementById('cloudChart').getContext('2d');
    const etlCtx = document.getElementById('etlChart').getContext('2d');
    const pieCtx = document.getElementById('pieChart').getContext('2d');

    // Create bar charts and store instances
    myCharts.programmingChart = createBarChart(programmingCtx, programmingLabels, programmingData, 'Programming Languages');
    myCharts.biChart = createBarChart(biCtx, biLabels, biData, 'Business Intelligence Tools');
    myCharts.cloudChart = createBarChart(cloudCtx, cloudLabels, cloudData, 'AWS Technologies');
    myCharts.etlChart = createBarChart(etlCtx, etlLabels, etlData, 'ETL Tools');

    // Data for the Pie chart (industry experience percentages)
    const pieDataLabels = ['BFSI', 'FMCG', 'Media', 'Telecommunication'];
    const pieDataValues = [40, 20, 20, 20];

    // Create Pie chart and store instance
    myCharts.pieChart = createPieChart(pieCtx, pieDataLabels, pieDataValues, 'Industry Experience Distribution');
}
