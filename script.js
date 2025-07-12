// Quotes for motivation
const quotes = [
  "Believe in yourself. Every problem has a solution.",
  "Mistakes are proof that you are trying.",
  "Success is the sum of small efforts, repeated.",
  "Don’t give up — great things take time.",
  "Stay positive. Work hard. Make it happen.",
];

// Load random motivational quote
function loadMotivation() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("motiveLine").textContent = "💡 " + quote;
}

// Calculate math expression using Math.js API
function calculate() {
  const expression = document.getElementById('expression').value.trim();
  const resultDiv = document.getElementById('result');

  if (!expression) {
    resultDiv.innerHTML = `<p style="color:red;">Please enter an expression.</p>`;
    return;
  }

  const apiUrl = `https://api.mathjs.org/v4/?expr=${encodeURIComponent(expression)}`;

  fetch(apiUrl)
    .then(res => res.text())
    .then(data => {
      resultDiv.innerHTML = `<strong>Result:</strong> ${data}`;
    })
    .catch(() => {
      resultDiv.innerHTML = `<p style="color:red;">Invalid expression or network error.</p>`;
    });
}

// Get word definition using Dictionary API
function getDefinition() {
  const word = document.getElementById('wordInput').value.trim();
  const resultBox = document.getElementById('definitionResult');

  if (!word) {
    resultBox.innerHTML = `<p style="color:red;">Please enter a word.</p>`;
    return;
  }

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.title === "No Definitions Found") {
        resultBox.innerHTML = `<p style="color:red;">No definition found for "${word}".</p>`;
      } else {
        const meaning = data[0].meanings[0].definitions[0].definition;
        resultBox.innerHTML = `<p><strong>${word}</strong>: ${meaning}</p>`;
      }
    })
    .catch(() => {
      resultBox.innerHTML = `<p style="color:red;">Error fetching definition.</p>`;
    });
}

// Load random advice from API
function loadAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
      document.getElementById("dictionaryAdvice").textContent = "💡 " + data.slip.advice;
    })
    .catch(() => {
      document.getElementById("dictionaryAdvice").textContent = "💡 Stay curious. Words open worlds.";
    });
}

// Run on page load
window.onload = () => {
  loadMotivation();
  loadAdvice();
};
