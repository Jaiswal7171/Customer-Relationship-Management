function calculateAndDisplayTotal() {
    const companyRateElements = document.querySelectorAll('.companyrate');
    let totalCompanyRate = 0;

    companyRateElements.forEach(element => {
        totalCompanyRate += parseFloat(element.textContent) || 0;
    });

    const netTotalElement = document.getElementById('totals');
    if (netTotalElement) {
        netTotalElement.textContent = totalCompanyRate.toFixed(2);
    } else {
        console.error('Element with ID "totals" not found.');
    }
}



    
function updateSum() {
    let totalSum = 0;
    
    document.querySelectorAll('.finalPrizeInput').forEach(input => {
        totalSum += parseFloat(input.value) || 0;
    });

    document.getElementById('sumHeading').textContent = `Total: ${totalSum}`;
}

document.addEventListener('DOMContentLoaded', calculateAndDisplayTotal);

document.querySelectorAll('.finalPrizeInput').forEach(input => {
    input.addEventListener('input', updateSum);
});
