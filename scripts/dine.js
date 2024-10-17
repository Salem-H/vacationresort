function toggleDiningOptions() {
    const payAsYouGo = document.getElementById('payAsYouGo');
    const allInclusive = document.getElementById('allInclusive');

    if (document.querySelector('input[name="diningOption"]:checked').value === 'payAsYouGo') {
        payAsYouGo.style.display = 'block';
        allInclusive.style.display = 'none';
    } else {
        payAsYouGo.style.display = 'none';
        allInclusive.style.display = 'block';
    }
}