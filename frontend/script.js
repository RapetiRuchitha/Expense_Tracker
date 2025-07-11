const API_URL = "http://localhost:5000/api/expenses";
const token = localStorage.getItem("token");

const form = document.getElementById("expense-form");
const tableBody = document.querySelector("#expense-table tbody");
const totalDisplay = document.getElementById("total");
const filterCategory = document.getElementById("filter-category");
const chartCanvas = document.getElementById("monthlyChart");

let chartInstance = null;

async function fetchExpenses() {
  const res = await fetch(API_URL, {
    headers: { Authorization: "Bearer " + token }
  });
  const data = await res.json();
  renderExpenses(data);
  showMonthlyChart(data);
}

function renderExpenses(expenses) {
  tableBody.innerHTML = "";
  let total = 0;
  expenses.forEach(e => {
    total += e.amount;
    const row = document.createElement("tr");
    row.innerHTML = `<td>₹${e.amount}</td><td>${e.category}</td><td>${new Date(e.date).toLocaleDateString()}</td><td>${e.description}</td><td><button onclick="deleteExpense('${e._id}')">Delete</button></td>`;
    tableBody.appendChild(row);
  });
  totalDisplay.textContent = "Total: ₹" + total;
}

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const expense = {
    amount: +document.getElementById("amount").value,
    category: document.getElementById("category").value,
    date: document.getElementById("date").value,
    description: document.getElementById("description").value,
  };
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify(expense)
  });
  form.reset();
  fetchExpenses();
});

async function deleteExpense(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token }
  });
  fetchExpenses();
}

filterCategory?.addEventListener("change", async (e) => {
  const category = e.target.value;
  const res = await fetch(API_URL, {
    headers: { Authorization: "Bearer " + token }
  });
  const data = await res.json();
  const filtered = category ? data.filter(x => x.category === category) : data;
  renderExpenses(filtered);
  showMonthlyChart(filtered);
});

function logout() {
  localStorage.removeItem("token");
  window.location = "login.html";
}

function showMonthlyChart(expenses) {
  const ctx = chartCanvas.getContext("2d");
  const monthly = {};
  expenses.forEach(e => {
    const label = new Date(e.date).toLocaleString("default", { month: "short", year: "numeric" });
    monthly[label] = (monthly[label] || 0) + e.amount;
  });
  if (chartInstance) {
    chartInstance.destroy();
  }
  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(monthly),
      datasets: [{
        label: "Monthly Expense",
        data: Object.values(monthly),
        backgroundColor: "#4caf50",
        barThickness: 30
      }]
    }
  });
}

if (token) {
  fetchExpenses();
}