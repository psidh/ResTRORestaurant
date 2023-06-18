
// Count animation for orders delivered
const orderCountElement = document.getElementById("order-count");
let count = 0;
const interval = setInterval(() => {
    if (count < 1000000) {
    count += 1200;
    orderCountElement.textContent = count.toLocaleString();
    } else {
    clearInterval(interval);
    }
}, 10);

// Scroll to the next section when the scroll-down button is clicked
const scrollDownBtn = document.getElementById('scroll-down-btn');
scrollDownBtn.addEventListener('click', () => {
const nextSection = document.getElementById('restaurants-section');
nextSection.scrollIntoView({ behavior: 'smooth' });
scrollDownBtn.classList.add('hide');
});