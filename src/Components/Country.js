import React from 'react';

const Country = ({country}) => {
    // console.log(country)
    return (
        <div>
            {country.name.common}
          <h1>
          {country.car.cca3}
          </h1>
        </div>
    );
};

export default Country;