// script.js
document.getElementById("submit-btn").addEventListener("click", function () {
    const answers = {
      q1: "Paris",
      q2: "JavaScript",
      q3: "8",
      q4: "Tokyo",
      q5: "Mars",
      q6: "Tim Berners-Lee",
      q7: "Java",
      q8: " HyperText Markup Language",
      q9: "Cascading Style Sheets",
      q10: "11"
    };
  
    let score = 0;
  
    // Check answers
    for (let question in answers) {
      const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
      if (userAnswer && userAnswer.value === answers[question]) {
        score++;
      }
    }
  
    // Display result
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `You scored ${score} out of ${Object.keys(answers).length}`;
  });
  