document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // get the input values
    let basicSalary = parseFloat(document.getElementById('basicSalary').value);
    let benefits = parseFloat(document.getElementById('benefits').value);

    // calculate gross salary
    let grossSalary = basicSalary + benefits;

    // calc nssf deduction (assuming 6% of gross salary)
    let nssfDeduction = 0.06 * grossSalary;

    // calc nhif deduction
    let nhifDeduction = calculateNHIF(grossSalary);

    // calculate Ppaye (Tax) - assuming a simplified rate of 10% on taxable income
    let taxableIncome = grossSalary - nssfDeduction;
    let payeeTax = calculatePAYEE(taxableIncome);

    // calc net sal
    let netSalary = grossSalary - nssfDeduction - nhifDeduction - payeeTax;

    // update the results on the page
    document.getElementById('grossSalary').innerText = grossSalary.toFixed(2);
    document.getElementById('nssfDeduction').innerText = nssfDeduction.toFixed(2);
    document.getElementById('nhifDeduction').innerText = nhifDeduction.toFixed(2);
    document.getElementById('payeeTax').innerText = payeeTax.toFixed(2);
    document.getElementById('netSalary').innerText = netSalary.toFixed(2);
});

// nhif deduction calculation
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    if (grossSalary <= 100000) return 1700;
    else return 1500;   // flat rate for salaries above 100,000
}


// paye calculation - 10% on taxable income 
function calculatePAYEE(taxableIncome) {
    return taxableIncome * 0.10;
}
