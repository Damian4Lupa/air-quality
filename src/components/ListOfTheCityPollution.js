import React from 'react';
import Table from './Table'

const ListOfTheCityPollution = (props) => {

    let cityPollutionArray = props.data

    return (

        <div className="container mt-5">

            <Table data={cityPollutionArray} />

        </div >
    );
}

export default ListOfTheCityPollution;