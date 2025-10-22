function showCalculator(calculatorType) {
  // Hide all calculator sections except the tabs
  document
    .querySelectorAll('.calculator-wrapper > div:not(.calculator-tabs)')
    .forEach((div) => {
      div.style.display = 'none';
    });

  // Show the selected calculator
  document.getElementById(calculatorType).style.display = 'block';
}

function calculateDividend() {
  let resultTextOne = 'Your dividend yield would be';
  let resultTextTwo = 'and your annual dividend would total';

  // Identify the active calculator
  let activeCalculator = document.querySelector(
    '.calculator-wrapper > div:not([style*="display: none"])'
  );

  if (!activeCalculator) {
    alert('Please select a calculator.');
    return;
  }

  // Get input values dynamically from the active calculator
  let investment = parseFloat(
    activeCalculator.querySelector("input[id='investment']")?.value || 0
  );
  let frequency = parseInt(
    activeCalculator.querySelector("select[id='frequency']")?.value || 0
  );
  let yieldPercentage = parseFloat(
    activeCalculator.querySelector("input[id='dividendYield']")?.value || 0
  );

  if (isNaN(investment) || isNaN(yieldPercentage) || isNaN(frequency)) {
    activeCalculator.querySelector('.result').innerHTML =
      'Please enter valid numbers.';
    return;
  }

  let result1 = 0;
  let result2 = 0;

  // Apply different formulas based on the selected calculator
  if (activeCalculator.id === 'dividend') {
    result1 = investment * frequency; // Formula for dividend yield
    result2 = (result1 / yieldPercentage) * 100;
  } else if (activeCalculator.id === 'dividendpershare') {
    result1 = investment * frequency; // Formula for dividends per share
    result2 = result1 * yieldPercentage;
  } else if (activeCalculator.id === 'annualdividend') {
    result1 = investment * frequency; // Formula for annual dividend
  } else if (activeCalculator.id === 'shareprice') {
    result1 = investment * frequency; // Formula for share price
    result2 = result1 / yieldPercentage;
  }

  // Display the calculated results
  let outputHtml = `<strong>${resultTextOne} :</strong> ${result1.toFixed(2)}%`;

  // Only show result2 if it's relevant
  if (result2 !== 0) {
    outputHtml += `<br><strong>${resultTextTwo} :</strong> $${result2.toFixed(2)}`;
  }

  // Display the result in the correct calculator
  if (activeCalculator) {
    // console.log(activeCalculator, outputHtml);
    // console.log(document.querySelector('body'));
    // activeCalculator.querySelector('.result').innerHTML = outputHtml;
  }
}
