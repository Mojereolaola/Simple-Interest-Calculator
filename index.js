function calculateInterest() {
  let principal = parseFloat(document.getElementById('principalAmount').value) || 0;
  let rate = parseFloat(document.getElementById('rate').value) || 0;
  let time = parseFloat(document.getElementById('time').value) || 0;
  let timeType = document.getElementById('timeType').value;

  if (timeType === "month") {
    time = time / 12;  
  }

  let interest = (principal * rate * time) / 100;
  let total = principal + interest;

  let totalMonths = time * 12;
  let totalDays = time * 365;

  let monthlyPayment = total / totalMonths;
  let dailyPayment = total / totalDays;

  document.getElementById("simpleInterest").innerText = "Simple Interest: #" + interest.toFixed(2);
  document.getElementById("totalAmount").innerText = "Total Amount: #" + total.toFixed(2);
  document.getElementById("monthlyPayment").innerText = "Monthly Payment: #" + monthlyPayment.toFixed(2);
  document.getElementById("dailyPayment").innerText = "Daily Payment: #" + dailyPayment.toFixed(2);
}