
/* ===============================
   Sticky Navigation Bar Section Styling
================================= */
document.addEventListener('DOMContentLoaded', () => {
    const stickyNav = document.getElementById('stickyNav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scroll Down: Hide navigation
            stickyNav.style.top = '-60px';
        } else {
            // Scroll Up: Show navigation
            stickyNav.style.top = '10px'; /* Visible position */
        }

        lastScrollY = currentScrollY; // Update scroll position
    });
});


/* =================================================
   Name Section Styling (Hi, I'm Vishal Trivedi 👋)
==================================================== */

document.addEventListener('DOMContentLoaded', function () {
    const words = document.querySelectorAll('.cd-words-wrapper .word');
    let currentIndex = 0;

    function changeWord() {
        // Fade out the current word before changing it
        words[currentIndex].classList.remove('is-visible');
        words[currentIndex].classList.add('fade-out'); // Apply fade-out

        // Move to the next word
        currentIndex = (currentIndex + 1) % words.length;

        // Give it a little time for fade-out before displaying the next word
        setTimeout(() => {
            // Remove fade-out class and make the next word visible
            words[currentIndex].classList.remove('fade-out');
            words[currentIndex].classList.add('is-visible');
        }, 200); // Reduced from 500ms to 200ms for quicker change
    }

    // Initialize the first word to be visible
    words[currentIndex].classList.add('is-visible');

    // Change words every 2 seconds (previously it was 3s)
    setInterval(changeWord, 2000); // Reduced from 3000ms to 2000ms
});





document.addEventListener("DOMContentLoaded", function () {
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Set the icon based on the current theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        themeIcon.textContent = '🌙'; // Set moon icon for dark mode
    } else {
        body.classList.add('light');
        themeIcon.textContent = '☀️'; // Set sun icon for light mode
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
    });
});



// JS to trigger the fade-in effect on scroll
const experienceItems = document.querySelectorAll('.experience-item');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    experienceItems.forEach(item => {
        if (item.offsetTop < scrollPosition) {
            item.classList.add('fade-in');
        }
    });
});

/* ===============================
   Expertise Section Styling
================================= */
// Function to create a pie chart with animation
function createPieChart(ctx, labels, data, colors) {
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: colors,
                    hoverOffset: 10, // Slightly enlarges the segment on hover
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top', // Position the legend above the chart
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold',
                        },
                        padding: 20,
                    },
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} (${percentage}%)`;
                        },
                    },
                },
            },
            animation: {
                animateScale: true, // Adds scaling effect
                animateRotate: true, // Adds rotation effect
                duration: 2000, // Duration of the animation in ms
                easing: 'easeInOutQuart', // Smooth easing for animation
            },
        },
    });
}



// Select the canvas for the Pie Chart
const ctx = document.getElementById('pieChart').getContext('2d');

// Data for the Pie chart
const data = {
    labels: ['BFSI', 'FMCG', 'Media', 'Telecommunication'], // Labels for each segment
    datasets: [{
        data: [25, 35, 20, 20], // Percentages for each category
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Colors for slices
        hoverBackgroundColor: ['#FF416C', '#357EC7', '#FFB100', '#38B0A7'], // Hover colors
        borderWidth: 2, // Width of borders
        borderColor: '#fff', // Border color
    }]
};

// Chart Configuration
const config = {
    type: 'pie',
    data: data,
    options: {
        responsive: true, // Adjust chart to container size
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                    },
                    color: '#333', // Legend text color
                    padding: 15,
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const label = tooltipItem.label || '';
                        const value = tooltipItem.raw || 0;
                        return `${label}: ${value}%`;
                    }
                },
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Tooltip background
                titleFont: {
                    weight: 'bold',
                }
            }
        },
        animation: {
            duration: 1500, // Animation duration in milliseconds
            easing: 'easeOutBounce', // Easing effect for animation
            animateRotate: true, // Rotate animation for pie chart
            animateScale: true, // Scale animation for pie chart
        }
    }
};

// Initialize the Chart
const pieChart = new Chart(ctx, config);





function createBarChart(ctx, labels, data, bgColor, xAxisLabel) {
    // Create the initial chart with empty data (0%)
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Proficiency (0 to 10)',
                    data: Array(labels.length).fill(0), // Start with all bars at 0
                    backgroundColor: bgColor,
                },
            ],
        },
        options: {
            responsive: true,
            animation: {
                duration: 0, // Disable chart's own animation to handle it manually
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: xAxisLabel,
                        font: {
                            size: 14,
                            weight: 'bold',
                        },
                    },
                },
                y: {
                    beginAtZero: true,
                    max: 10, // Change this to 10 for the scale 0 to 10
                    title: {
                        display: true,
                        text: 'Proficiency (0 to 10)', // Update label to reflect the scale
                        font: {
                            size: 14,
                            weight: 'bold',
                        },
                    },
                },
            },
            plugins: {
                legend: {
                    display: false, // Hide the legend for simplicity
                },
            },
        },
    });

    // Function to simulate continuous water fill animation
    function continuousAnimation() {
        let step = 0;
        const interval = setInterval(() => {
            // Gradually increase each bar's data value
            chart.data.datasets[0].data = chart.data.datasets[0].data.map((value, index) => {
                const target = data[index] / 10; // Convert data to a 0 to 10 scale
                return Math.min(value + 0.1, target); // Increase value but don't exceed the target
            });

            chart.update(); // Re-render chart with updated data

            step++;
            if (step > 100) {
                // Reset the bars after completing a full cycle
                chart.data.datasets[0].data = Array(labels.length).fill(0); // Reset bars to 0
                chart.update();
                step = 0; // Restart the cycle
            }
        }, 50); // Adjust the interval to control speed of the filling effect (50ms)
    }

    // Start the continuous animation after a small delay to allow the chart to render
    setTimeout(continuousAnimation, 100);
}

// Bar Chart Data
const programmingCtx = document.getElementById('programmingChart').getContext('2d');
const biCtx = document.getElementById('biChart').getContext('2d');
const cloudCtx = document.getElementById('cloudChart').getContext('2d');
const etlCtx = document.getElementById('etlChart').getContext('2d');

// Initialize Bar Charts with continuous water fill effect
createBarChart(
    programmingCtx,
    ['SQL', 'Python'],
    [85, 70],
    ['#4BC0C0', '#36A2EB'],
    'Programming Languages'
);

createBarChart(
    biCtx,
    ['Power BI', 'Tableau', 'Looker', 'QuickSight'],
    [85, 75, 70, 65],
    ['#FF6384', '#FF9F40', '#FFCE56', '#4BC0C0'],
    'Business Intelligence Tools'
);

createBarChart(
    cloudCtx,
    ['AWS S3', 'Redshift', 'Snowflake'],
    [70, 65, 50],
    ['#36A2EB', '#9966FF', '#FF6384'],
    'Cloud Technologies'
);

createBarChart(
    etlCtx,
    ['Alteryx'],
    [75],
    ['#FF9F40'],
    'ETL Tools'
);










// Detect when the section is visible
function observeCharts() {
    const chartSection = document.querySelector('.chart-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                initializeCharts();
                observer.unobserve(chartSection); // Trigger only once
            }
        });
    }, { threshold: 0.5 });

    observer.observe(chartSection);
}

// Initialize the observer on DOMContentLoaded
document.addEventListener('DOMContentLoaded', observeCharts);


