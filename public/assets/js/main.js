// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Complexity level switching
const complexityLevels = document.querySelectorAll('.complexity-level');
const pricingCards = document.querySelectorAll('.pricing-card');

complexityLevels.forEach(level => {
    level.addEventListener('click', () => {
        // Update active class
        complexityLevels.forEach(l => l.classList.remove('active'));
        level.classList.add('active');
        
        // Get selected complexity
        const complexity = level.getAttribute('data-complexity');
        
        // Show corresponding pricing card
        pricingCards.forEach(card => {
            if (card.getAttribute('data-complexity') === complexity) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Budget Slider
const budgetSlider = document.getElementById('budget-slider');
const budgetValue = document.getElementById('budget-value');
const recommendation = document.getElementById('recommendation');

// Complexity price ranges
const complexityPrices = {
    basic: { min: 1499, max: 4999 },
    medium: { min: 5000, max: 9999 },
    advanced: { min: 10000, max: 19999 },
    complex: { min: 20000, max: 50000 }
};

// Format currency with commas
function formatCurrency(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Update budget display and recommendation
function updateBudget() {
    const value = parseInt(budgetSlider.value);
    budgetValue.textContent = formatCurrency(value);
    
    // Update recommendation based on budget
    if (value < 5000) {
        recommendation.textContent = "Basic Project";
        document.querySelector('.complexity-level[data-complexity="basic"]').click();
    } else if (value < 10000) {
        recommendation.textContent = "Medium Project";
        document.querySelector('.complexity-level[data-complexity="medium"]').click();
    } else if (value < 20000) {
        recommendation.textContent = "Advanced Project";
        document.querySelector('.complexity-level[data-complexity="advanced"]').click();
    } else {
        recommendation.textContent = "Complex Project";
        document.querySelector('.complexity-level[data-complexity="complex"]').click();
    }
}

// Initialize slider
budgetSlider.addEventListener('input', updateBudget);
updateBudget(); // Set initial value

// System status monitoring
setInterval(() => {
    const statusElement = document.getElementById('system-status');
    const statuses = [
        "All systems operational. AI agents running at 100% efficiency.",
        "System performance optimal. No issues detected.",
        "AI agents working at peak efficiency. All links verified.",
        "Self-healing system active. Security protocols enforced.",
        "Revenue distribution: AI Fund 20%, Reserve 20%, Payouts 60%"
    ];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    statusElement.textContent = randomStatus;
}, 5000);

// Initialize with Basic pricing visible
document.querySelector('.complexity-level[data-complexity="basic"]').click();
