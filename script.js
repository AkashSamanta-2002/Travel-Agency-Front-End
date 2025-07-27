const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const packages = [
  { name: "Bali Adventure", price: 41999, days: 5 },
  { name: "Paris Getaway", price: 74999, days: 4 },
  { name: "Santorini Escape", price: 107999, days: 6 },
  { name: "New York Tour", price: 57999, days: 3 },
  { name: "Goa Beach Holiday", price: 14999, days: 3 },
  { name: "Dubai Luxury Trip", price: 62999, days: 5 },
  { name: "Manali Snow Escape", price: 12999, days: 4 },
  { name: "Thailand Budget Trip", price: 28999, days: 5 },
  { name: "Kashmir Paradise", price: 21999, days: 5 },
  { name: "Maldives Honeymoon", price: 88999, days: 6 }
];

const budgetInput = document.getElementById("budget");
const budgetValue = document.getElementById("budget-value");
const packageList = document.getElementById("package-list");

function renderPackages(maxBudget) {
  packageList.innerHTML = "";
  const filtered = packages.filter(p => p.price <= maxBudget);
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "package-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Price: ₹${p.price.toLocaleString()}</p>
      <p>Duration: ${p.days} days</p>
    `;
    packageList.appendChild(card);
    // Onclick alert
    card.addEventListener("click", e => {
    e.preventDefault();
    alert("Backend is not ready right now...");
  });
});
}



budgetInput.addEventListener("input", () => {
  budgetValue.textContent = `₹${Number(budgetInput.value).toLocaleString()}`;
  renderPackages(Number(budgetInput.value));
});

renderPackages(Number(budgetInput.value));

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
