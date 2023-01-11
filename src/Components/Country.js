import React from 'react';

const Country = ({country}) => {
    const {name,population} = country
    // console.log(country)
    return (
        <div>
            {name.common}
          <h1>
         {population}
          </h1>
        </div>
    );
};

export default Country;