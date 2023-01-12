import React from 'react';

const Country = ({country}) => {
    const {name,population,flags} = country
    // console.log(country)
    return (
        <div>
           {name.common}
          <h1>
         {population}
          </h1>
          <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;