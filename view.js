document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const cityName = document.getElementById('cityName').value;
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=XNDDKZF7ZJ566DS4E2RBJFGEZ`)
        .then(response => response.json())
        .then(data => {
            const tempInCelsius = data.days[0].temp;
            const condition = data.days[0].conditions;
            document.getElementById('weatherResult').innerHTML = `Temperature: ${tempInCelsius.toFixed(2)}°C <br> <br> Weather: ${condition}`;
        })
        .catch(error => {
            alert('Fetching Error');
        });
});



document.getElementById('currencyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const baseCurrency = document.getElementById('baseCurrency').value.toUpperCase();
    const targetCurrency = document.getElementById('targetCurrency').value.toUpperCase();
    fetch(`https://v6.exchangerate-api.com/v6/35b54889d5ca114c6089fc59/latest/${baseCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates[targetCurrency];
            if(rate) {
                document.getElementById('currencyResult').innerHTML = `1 ${baseCurrency} = ${rate} ${targetCurrency}`;
            } else {
                document.getElementById('currencyResult').innerHTML = `Conversion rate for ${targetCurrency} not found.`;
            }
        })
        .catch(error => {
            alert('Fetching Error');
        });
});

