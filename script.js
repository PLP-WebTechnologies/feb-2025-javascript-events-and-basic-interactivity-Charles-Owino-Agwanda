// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

document.addEventListener("keydown", (e) => {
  document.getElementById("keypressDisplay").textContent = `You pressed: ${e.key}`;
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("🔐 Secret double-click unlocked!");
});

// Interactive Elements
document.getElementById("changeBtn").addEventListener("click", () => {
  document.getElementById("changeBtn").style.backgroundColor = "purple";
  document.getElementById("changeBtn").textContent = "Changed!";
});

const images = [
  "https://via.placeholder.com/200?text=Image+1",
  "https://via.placeholder.com/200?text=Image+2",
  "https://via.placeholder.com/200?text=Image+3"
];
let imgIndex = 0;
document.getElementById("nextImg").addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById("galleryImg").src = images[imgIndex];
});

// Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
    document.getElementById(`tab${tab.dataset.tab}`).classList.add("active");
  });
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let feedback = "";

  if (!email.includes("@")) {
    feedback = "Invalid email format.";
  } else if (password.length < 8) {
    feedback = "Password must be at least 8 characters.";
  } else {
    feedback = "Form submitted successfully!";
  }

  document.getElementById("formFeedback").textContent = feedback;
});

// Bonus: Real-time password validation
document.getElementById("password").addEventListener("input", function() {
  const feedback = document.getElementById("formFeedback");
  feedback.textContent = this.value.length < 8
    ? "Password too short!"
    : "Password looks good!";
});