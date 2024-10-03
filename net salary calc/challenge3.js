// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    // Constants
    const NSSF_RATE = 0.06; // nssf 6% of basic salary
    const PERSONAL_RELIEF = 2400; // Example monthly tax relief

    // NHIF Contributions based on salary (simplified)
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
        if (grossSalary <= 100000) return 1700;  // flat rate for salaries above 100,000
    }

    //paye calculation based on taxable income (simplified)
    function calculatePAYE(taxableIncome) {
        let tax;
        if (taxableIncome <= 24000) {
            tax = taxableIncome * 0.1; // 10% for income <= 24,000
        } else if (taxableIncome <= 32333) {
            tax = (24000 * 0.1) + (taxableIncome - 24000) * 0.25; // 25% for the excess above 24,000
        } else  if (taxableIncome <= 500000) {

            tax = (24000 * 0.1) + (8333 * 0.25) + (taxableIncome - 32333) * 0.30; // 30% for the excess above 32,333
        }
        return tax - PERSONAL_RELIEF; // apply personal relief
    }

    // gross Salary
    let grossSalary = basicSalary + benefits;

    // nssf Deductions
    let nssfDeductions = basicSalary * NSSF_RATE;

    // taxable income (gross salary - nssf)
    let taxableIncome = grossSalary - nssfDeductions;

    // PAYE (Tax)
    let paye = calculatePAYE(taxableIncome);
    paye = paye < 0 ? 0 : paye; // Ensure tax is not negative

    // nhif deductions
    let nhifDeductions = calculateNHIF(grossSalary);

    // net salary (gross salary - paye - nhif - nssf)
    let netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;

    // Display results
    console.log("Gross Salary: Ksh " + grossSalary);
    console.log("PAYE (Tax): Ksh " + paye);
    console.log("NSSF Deductions: Ksh " + nssfDeductions);
    console.log("NHIF Deductions: Ksh " + nhifDeductions);
    console.log("Net Salary: Ksh " + netSalary);
}

// Example usage
let basicSalary = 50000; // Input basic salary
let benefits = 10000;    // Input benefits

calculateNetSalary(basicSalary, benefits);
