const checkbox = document.querySelector(
  '[data-testid="test-todo-complete-toggle"]',
);

const card = document.querySelector('[data-testid="test-todo-card"]');

const status = document.querySelector('[data-testid="test-todo-status"]');

const timeRemainingEl = document.getElementById("timeRemaining");

const dueDate = new Date("2026-04-20T18:00:00Z");



checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    card.classList.add("completed");
    status.textContent = "Done";
  } else {
    card.classList.remove("completed");
    status.textContent = "Pending";
  }
});


function updateTimeRemaining() {
  const now = new Date();
  const diff = dueDate - now;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let text = "";

  if (diff <= 0 && Math.abs(minutes) < 5) {
    text = "Due now!";
  } else if (diff < 0) {
    text = `Overdue by ${Math.abs(hours)} hours`;
  } else if (days >= 1) {
    text = `Due in ${days} day${days > 1 ? "s" : ""}`;
  } else if (hours >= 1) {
    text = `Due in ${hours} hours`;
  } else {
    text = `Due in ${minutes} minutes`;
  }

  timeRemainingEl.textContent = text;
}

updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);

/* ---------------------------
   BUTTON ACTIONS
----------------------------*/

document
  .querySelector('[data-testid="test-todo-edit-button"]')
  .addEventListener("click", () => {
    console.log("edit clicked");
    alert(`Edit clicked`);
  });

document
  .querySelector('[data-testid="test-todo-delete-button"]')
  .addEventListener("click", () => {
    window.confirm(`Are you sure you want to delete this reminder`);
  });
