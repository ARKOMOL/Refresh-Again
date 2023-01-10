import './App.css';
import React, { useEffect, useState } from 'react';
import Country from './Components/Country';
function App() {
  const [countries,setCountry] = useState([])


useEffect(()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res =>res.json())
  .then(data => {
    setCountry(data)
    console.log(data[0])})
    
 },[])

 
  return (
    <div className="App">
    
    <h1>
     {countries.length}
    </h1>

    {
      countries.map(country=>
       <Country 
       key={country.car.cca3}
       country={country}/>
        )
    }

    </div>
  );
}

export default App;
