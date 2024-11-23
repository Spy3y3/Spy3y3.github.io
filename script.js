document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelectorAll(".cd-words-wrapper b");
    let currentIndex = 0;

    // Change the word every 3 seconds
    const changeWord = () => {
        words[currentIndex].classList.remove("is-visible");
        words[currentIndex].classList.add("is-hidden");

        currentIndex = (currentIndex + 1) % words.length;

        words[currentIndex].classList.remove("is-hidden");
        words[currentIndex].classList.add("is-visible");
    };

    setInterval(changeWord, 3000);

    // Handle sticky navigation and section highlight
    const stickyNav = document.getElementById("stickyNav");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");

    // Show the navigation bar when the user scrolls down
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {  // Show navigation bar after scrolling 100px
            stickyNav.style.top = "20px";  // Show navigation
        } else {
            stickyNav.style.top = "-60px";  // Hide navigation
        }
        lastScrollY = window.scrollY;
    });

    // Highlight the active section link
    window.addEventListener("scroll", () => {
        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });

    // Check the current theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('theme-icon').textContent; // Moon icon for dark mode
    } else {
        document.body.classList.add('light');
        document.getElementById('theme-icon').textContent; // Sun icon for light mode
    }

    // Theme Toggle functionality
    const themeIcon = document.getElementById('theme-icon');
    
    themeIcon.addEventListener('click', () => {
        const body = document.body;
        
        if (body.classList.contains('dark')) {
            // Switch to light mode
            body.classList.remove('dark');
            body.classList.add('light');
            themeIcon.textContent; // Sun icon for light mode
            localStorage.setItem('theme', 'light'); // Store in localStorage
        } else {
            // Switch to dark mode
            body.classList.remove('light');
            body.classList.add('dark');
            themeIcon.textContent; // Moon icon for dark mode
            localStorage.setItem('theme', 'dark'); // Store in localStorage
        }
    });
});

// Toggle between sun and moon icon
const themeIcon = document.getElementById('theme-icon');
if (document.body.classList.contains('dark')) {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
} else {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

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
// Pie Chart for Domain Expertise with Percentages
const pieCtx = document.getElementById('domainPieChart').getContext('2d');
const domainPieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['BFSI', 'FMCG', 'Media', 'Telecommunication'],
        datasets: [
            {
                data: [50, 15, 15, 20], // Adjust as needed
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)', // Vibrant colors
                    'rgba(54, 162, 235, 2.8)',
                    'rgba(255, 206, 86, 1.0)',
                    'rgba(75, 192, 192, 3.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 2,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { font: { size: 14 } },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let total = context.dataset.data.reduce((a, b) => a + b, 0);
                        let percentage = ((context.raw / total) * 100).toFixed(1);
                        return `${context.label}: ${percentage}%`;
                    },
                },
            },
            datalabels: {
                formatter: (value, ctx) => {
                    let total = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                    return `${((value / total) * 100).toFixed(1)}%`;
                },
                color: '#fff',
                font: {
                    weight: 'bold',
                },
            },
        },
    },
});

// Bar Charts for Skills
function createBarChart(ctx, labels, data, bgColor) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Proficiency',
                    data: data,
                    backgroundColor: bgColor,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                },
            },
        },
    });
}

const programmingCtx = document.getElementById('programmingChart').getContext('2d');
const mlCtx = document.getElementById('mlChart').getContext('2d');
const biCtx = document.getElementById('biChart').getContext('2d');
const cloudCtx = document.getElementById('cloudChart').getContext('2d');
const dbCtx = document.getElementById('dbChart').getContext('2d');
const etlCtx = document.getElementById('etlChart').getContext('2d');

createBarChart(programmingCtx, ['SQL', 'Python'], [90, 85], ['#4BC0C0', '#36A2EB']);
createBarChart(mlCtx, ['Classification', 'Regression', 'Clustering', 'Neural Networks'], [80, 75, 70, 65], ['#FF6384']);
createBarChart(biCtx, ['Power BI', 'Tableau', 'Looker', 'QuickSight'], [85, 80, 70, 60], ['#FFCE56']);
createBarChart(cloudCtx, ['AWS S3', 'Redshift', 'Snowflake'], [80, 75, 70], ['#36A2EB']);
createBarChart(dbCtx, ['MySQL', 'PostgreSQL', 'Oracle Developer Studio'], [85, 80, 75], ['#FF9F40']);
createBarChart(etlCtx, ['Alteryx'], [70], ['#9966FF']);


