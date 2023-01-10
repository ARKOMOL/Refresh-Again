const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data =>{
        displayCountries(data)
        console.log(data)})
  }

    const displayCountries = countries =>{
        // console.log(countries)
        const allCountriesHTML = countries.map(country=>getCountryHTML(country))
    // console.log(allCountriesHTML);
        const container = document.getElementById('countries');
        container.innerHTML = allCountriesHTML.join('')


    }
    const getCountryHTML = country =>{
        return `
        <div>
        <h2> Capital : ${country.name.common}</h2>
        <h2>${country.capital}</h2>
        <img src="${country.flags.svg}">
        </div>
        `
    }



  loadCountries()