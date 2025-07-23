// Navbar toggle
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Budget Filter
const budgetInput = document.getElementById("budget");
const budgetValue = document.getElementById("budget-value");
const packageList = document.getElementById("package-list");

const packages = [
  { name: "Bali Adventure", price: 499, days: 5 },
  { name: "Paris Getaway", price: 899, days: 4 },
  { name: "Santorini Escape", price: 1299, days: 6 },
  { name: "New York Tour", price: 699, days: 3 }
];

function renderPackages(maxBudget) {
  packageList.innerHTML = "";
  const filtered = packages.filter(p => p.price <= maxBudget);
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "package-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
      <p>Duration: ${p.days} days</p>
    `;
    packageList.appendChild(card);
  });
}

budgetInput.addEventListener("input", () => {
  budgetValue.textContent = budgetInput.value;
  renderPackages(Number(budgetInput.value));
});

// Initial render
renderPackages(Number(budgetInput.value));

// Testimonials Slider (simple rotation)
const reviews = [
  { text: "Best travel experience ever!", author: "Ayesha K." },
  { text: "Great service and beautiful locations!", author: "Ravi M." },
  { text: "Affordable and well organized!", author: "Elena P." }
];

let currentReview = 0;
function showReview() {
  document.getElementById("review-text").textContent = `"${reviews[currentReview].text}"`;
  document.getElementById("reviewer").textContent = `– ${reviews[currentReview].author}`;
  currentReview = (currentReview + 1) % reviews.length;
}
setInterval(showReview, 4000);

// Contact Form
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
});
