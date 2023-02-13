import React from 'react';

const Country = ({country}) => {
    const {name,population,flags,timezones,idd} = country
    // console.log(country)
    return (
        <div>
           {name.common}
          <h1>
         {population}
          </h1>
          <h1>
            hi
          </h1>    <h1>
            hi
          </h1>
          <h1>
         {timezones}
          </h1> 
        
          <h1>
         {timezones}
          </h1> 
        
          <h1>
         {idd.root}
          </h1>   
          
   d  
          <h1>
         {idd.root}
          </h1>   
          
   d
        
          
          <img src={flags.png} alt="" />
          
        </div>
    );
};

export default Country;