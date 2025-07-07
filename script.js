/* ===============================
    Sticky Navigation Bar Functionality
================================= */
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

    function changeWord() {
        // Fade out the current word
        words[currentIndex].classList.remove('is-visible');
        words[currentIndex].classList.add('slideOutToTop'); // Apply the new fade-out animation

        // Move to the next word
        currentIndex = (currentIndex + 1) % words.length;

        // After the fade-out, make the next word visible with its animation
        setTimeout(() => {
            words[currentIndex].classList.remove('slideOutToTop'); // Remove fade-out class
            words[currentIndex].classList.add('is-visible');
        }, 700); // This should match the duration of slideOutToTop animation (or be slightly longer)
    }

    // Initialize the first word to be visible
    words[currentIndex].classList.add('is-visible');

    // Change words every 2.5 seconds (adjusted timing)
    setInterval(changeWord, 2500); // Reduced from 3000ms to 2500ms for quicker change
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
    const mainSkillFilterContainer = document.querySelector('.main-skill-filters');
    const subSkillFilterContainer = document.querySelector('.sub-skill-filters');
    const projectItems = document.querySelectorAll('.project-item');
    const hideTimeouts = new Map();

    // --- Full-Screen Zoom Overlay Elements ---
    const fullScreenZoomOverlay = document.getElementById('fullScreenZoomOverlay');
    const fullScreenZoomImage = document.getElementById('fullScreenZoomImage');
    let zoomHideTimeout = null;

    // --- Initial Setup ---
    const allProjectsButton = mainSkillFilterContainer.querySelector('[data-filter="all"]');
    if (allProjectsButton) {
        allProjectsButton.classList.add('active');
    }
    filterProjects('all');
    subSkillFilterContainer.classList.remove('active');

    // --- Event Listener for Main Skill Filter Buttons ---
    mainSkillFilterContainer.addEventListener('click', (event) => {
        const targetButton = event.target.closest('.filter-btn');
        if (targetButton) {
            mainSkillFilterContainer.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            targetButton.classList.add('active');

            const filterValue = targetButton.dataset.filter;

            if (filterValue === 'python') {
                subSkillFilterContainer.classList.add('active');
                subSkillFilterContainer.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                filterProjects('python');
            } else {
                subSkillFilterContainer.classList.remove('active');
                subSkillFilterContainer.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                filterProjects(filterValue);
            }
        }
    });

    // --- Event Listener for Sub-Skill Filter Buttons ---
    subSkillFilterContainer.addEventListener('click', (event) => {
        const targetButton = event.target.closest('.filter-btn');
        if (targetButton) {
            subSkillFilterContainer.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            targetButton.classList.add('active');

            mainSkillFilterContainer.querySelector('[data-filter="python"]').classList.add('active');

            const filterValue = targetButton.dataset.filter;
            filterProjects(filterValue);
        }
    });

    // --- Main Filtering Function (Remains the same) ---
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

                item.querySelectorAll('.skill-btn').forEach(skillBtn => {
                    skillBtn.classList.remove('active');
                });
            }
        });

        projectItems.forEach(item => {
            if (item.classList.contains('visible')) {
                if (visibleItemsCount === 1) {
                    item.classList.add('single-item');
                } else {
                    item.classList.remove('single-item');
                }
            } else {
                item.classList.remove('single-item');
            }
        });
    }

    // --- Hover Image Preview Functionality with Navigation & Full-Screen Zoom ---

    // Define constants for preview behavior (MATCHES CSS)
    const IMAGES_PER_PAGE = 4;
    const IMAGE_WIDTH = 70;
    const IMAGE_GAP = 5;

    document.querySelectorAll('.view-images-btn').forEach(button => {
        const imagePreviewPopup = button.querySelector('.image-preview-popup');
        let imagesLoaded = false;
        let currentImagePreviewIndex = 0;
        let imageUrls = [];

        let previewScroller;
        let prevArrow, nextArrow;

        // Function to update the visible images in the preview popup
        function updatePreviewDisplay() {
            if (!previewScroller) {
                console.warn("previewScroller is null in updatePreviewDisplay. Images likely not loaded.");
                return;
            }

            const offset = -currentImagePreviewIndex * (IMAGE_WIDTH + IMAGE_GAP);
            previewScroller.style.transform = `translateX(${offset}px)`;

            if (prevArrow) {
                prevArrow.style.visibility = currentImagePreviewIndex > 0 ? 'visible' : 'hidden';
            }
            if (nextArrow) {
                nextArrow.style.visibility = currentImagePreviewIndex < (imageUrls.length - IMAGES_PER_PAGE) ? 'visible' : 'hidden';
            }
            console.log(`Updated preview for ${button.dataset.projectId || 'Unknown'}: Index ${currentImagePreviewIndex}, Prev Arrow: ${prevArrow ? prevArrow.style.visibility : 'N/A'}, Next Arrow: ${nextArrow ? nextArrow.style.visibility : 'N/A'}`);
        }

        // Mouseenter event for the "View Images" button (to show the preview strip)
        button.addEventListener('mouseenter', () => {
            // Check if popup element was found
            if (!imagePreviewPopup) {
                console.error(`Error: image-preview-popup not found for button with data-project-id: ${button.dataset.projectId || 'N/A'}`);
                return; // Exit if popup not found
            }

            if (!imagesLoaded) {
                const imagesString = button.dataset.images;
                if (imagesString) {
                    imageUrls = imagesString.split(',').map(url => url.trim());
                    console.log(`Attempting to load images for ${button.dataset.projectId || 'Unknown'}. URLs found:`, imageUrls);

                    previewScroller = document.createElement('div');
                    previewScroller.classList.add('image-preview-scroller');

                    imageUrls.forEach(url => {
                        const img = document.createElement('img');
                        img.src = url;
                        img.alt = `Project Screenshot - ${url.substring(url.lastIndexOf('/') + 1)}`;
                        previewScroller.appendChild(img);
                        console.log(`Appended image: ${url}`);

                        // --- Full-Screen Zoom Listeners ---
                        img.addEventListener('mouseenter', (e) => {
                            clearTimeout(zoomHideTimeout);
                            fullScreenZoomImage.src = e.target.src;
                            fullScreenZoomOverlay.classList.add('active');
                            console.log('Full-screen zoom overlay activated for:', e.target.src);
                        });

                        img.addEventListener('mouseleave', () => {
                            zoomHideTimeout = setTimeout(() => {
                                fullScreenZoomOverlay.classList.remove('active');
                                console.log('Full-screen zoom overlay deactivated.');
                            }, 50);
                        });
                    });

                    console.log(`Project: ${button.dataset.projectId || 'Unknown'}, Image URLs count: ${imageUrls.length}, IMAGES_PER_PAGE: ${IMAGES_PER_PAGE}`);
                    console.log(`Condition for arrows: ${imageUrls.length > IMAGES_PER_PAGE}`);

                    if (imageUrls.length > IMAGES_PER_PAGE) {
                        prevArrow = document.createElement('button');
                        prevArrow.classList.add('preview-nav-arrow', 'prev');
                        prevArrow.textContent = '‹';
                        prevArrow.addEventListener('click', (e) => {
                            e.preventDefault();
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
                            e.preventDefault();
                            e.stopPropagation();
                            if (currentImagePreviewIndex < (imageUrls.length - IMAGES_PER_PAGE)) {
                                currentImagePreviewIndex++;
                                updatePreviewDisplay();
                            }
                        });

                        // Clear existing content to prevent duplicates if `imagesLoaded` logic fails
                        imagePreviewPopup.innerHTML = ''; 
                        imagePreviewPopup.appendChild(prevArrow);
                        imagePreviewPopup.appendChild(previewScroller);
                        imagePreviewPopup.appendChild(nextArrow);

                        console.log("Arrows and scroller appended to popup.");

                    } else {
                        // Clear existing content for consistency
                        imagePreviewPopup.innerHTML = '';
                        imagePreviewPopup.appendChild(previewScroller);
                        console.log("Only scroller appended (less than or equal to 4 images), no arrows.");
                    }

                    imagesLoaded = true; // Mark as loaded only after all appends
                } else {
                    console.warn(`No data-images attribute found for button: ${button.dataset.projectId || 'N/A'}`);
                }
            }
            currentImagePreviewIndex = 0;
            updatePreviewDisplay();
        });

        // Mouseleave event for the "View Images" button (to hide the preview strip)
        button.addEventListener('mouseleave', () => {
            currentImagePreviewIndex = 0;
            updatePreviewDisplay();
        });
    });

    // --- Event listeners for the full-screen zoom overlay itself ---
    if (fullScreenZoomOverlay) {
        fullScreenZoomOverlay.addEventListener('mouseenter', () => {
            clearTimeout(zoomHideTimeout);
        });

        fullScreenZoomOverlay.addEventListener('mouseleave', () => {
            zoomHideTimeout = setTimeout(() => {
                fullScreenZoomOverlay.classList.remove('active');
            }, 50);
        });

        fullScreenZoomOverlay.addEventListener('click', () => {
            fullScreenZoomOverlay.classList.remove('active');
            clearTimeout(zoomHideTimeout);
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && fullScreenZoomOverlay && fullScreenZoomOverlay.classList.contains('active')) {
            fullScreenZoomOverlay.classList.remove('active');
            clearTimeout(zoomHideTimeout);
        }
    });

    filterProjects('all');
});




/* ===============================
    Expertise Section - Chart.js Implementation
================================= */

// Store chart instances to destroy them later for theme switching/re-rendering
let myCharts = {};

// Function to create a bar chart with animation
function createBarChart(ctx, labels, data, chartTitle) {
    // Destroy existing chart instance if it exists
    if (myCharts[ctx.canvas.id]) {
        myCharts[ctx.canvas.id].destroy();
    }

    const isDarkMode = document.body.classList.contains('dark');
    const textColor = isDarkMode ? '#e0e0e0' : '#333';
    const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const barColors = isDarkMode ?
        [
            'rgba(120, 180, 255, 0.8)', // Light Blue
            'rgba(200, 150, 255, 0.8)', // Light Purple
            'rgba(150, 255, 200, 0.8)', // Light Green
            'rgba(255, 180, 120, 0.8)', // Light Orange
            'rgba(255, 120, 180, 0.8)'  // Light Pink
        ] :
        [
            'rgba(75, 192, 192, 0.8)',  // Teal
            'rgba(153, 102, 255, 0.8)', // Purple
            'rgba(255, 99, 132, 0.8)',  // Red
            'rgba(54, 162, 235, 0.8)',  // Blue
            'rgba(255, 206, 86, 0.8)'   // Yellow
        ];

    myCharts[ctx.canvas.id] = new Chart(ctx, { // Store the chart instance
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Proficiency (0 to 10)',
                    data: data,
                    backgroundColor: barColors.slice(0, labels.length), // Use appropriate number of colors
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
                    display: true, // Set to true to display legend
                    position: 'top', // Position the legend at the top
                    labels: {
                        color: textColor, // Legend text color
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        // Custom labels to show skill names for colors
                        generateLabels: function(chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map(function(label, i) {
                                    const backgroundColor = data.datasets[0].backgroundColor[i];
                                    const borderColor = data.datasets[0].borderColor[i];
                                    return {
                                        text: label, // Use the skill name as the legend text
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
                    color: textColor,
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
                    backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.7)',
                    titleColor: textColor,
                    bodyColor: textColor,
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
                        color: textColor,
                    },
                    title: {
                        display: true,
                        text: 'Proficiency (0-10)',
                        font: {
                            size: 14,
                            weight: 'bold',
                        },
                        color: textColor,
                    },
                },
                y: {
                    grid: {
                        color: gridColor,
                    },
                    ticks: {
                        color: textColor,
                    }
                },
            },
            animation: {
                duration: 4000, // Increased duration for slower animation (4 seconds)
                easing: 'linear', // Changed to linear for more consistent speed
                x: {
                    easing: 'linear',
                    duration: 4000,
                    from: 0
                },
                delay: (context) => {
                    return context.dataIndex * 500; // Increased delay for staggered "step" effect
                },
                // Custom animation function for "step-by-step" climbing
                onProgress: function(animation) {
                    const chart = animation.chart;
                    const { ctx } = chart;
                    const meta = chart.getDatasetMeta(0); // Get metadata for the first dataset

                    meta.data.forEach((bar, index) => {
                        const value = data[index]; // Actual data value
                        const currentX = bar.x; // Current animated x position

                        // Calculate the target X position based on the value
                        const targetX = chart.scales.x.getPixelForValue(value);

                        // If the bar is growing (currentX < targetX) and not at max,
                        // we can draw a "step"
                        if (currentX < targetX && currentX > chart.scales.x.left) {
                            ctx.save();
                            ctx.fillStyle = bar.options.backgroundColor;
                            ctx.beginPath();
                            ctx.rect(
                                chart.scales.x.left, // Start from the left of the chart area
                                bar.y - bar.height / 2, // Center vertically
                                currentX - chart.scales.x.left, // Current width
                                bar.height
                            );
                            ctx.fill();
                            ctx.restore();
                        }
                    });
                },
                onComplete: function(animation) {
                    // This function is called when the animation completes
                    const chart = animation.chart;
                    setTimeout(() => {
                        chart.data.datasets[0].data = data.map(() => 0); // Set all values to 0
                        chart.update({ duration: 0, lazy: true }); // Update immediately without animation

                        setTimeout(() => {
                            chart.data.datasets[0].data = [...data]; // Set back to actual values
                            chart.update({ duration: 4000, lazy: true }); // Animate back to full
                        }, 500); // Small delay before growing again (reset to 0 and start over)
                    }, 2000); // Pause for 2 seconds before restarting animation
                }
            }
        },
    });
}

// Function to create a pie chart with animation
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
                        color: textColor, // Legend text color adapts to theme
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
                    color: textColor,
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
                    color: textColor, // Label text color
                    font: {
                        weight: 'bold',
                        size: 12,
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
