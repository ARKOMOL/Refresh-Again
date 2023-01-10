import React from 'react';

const Country = ({country}) => {
    // console.log(country)
    return (
        <div>
            {country.name.common}
        </div>
    );
};

export default Country;