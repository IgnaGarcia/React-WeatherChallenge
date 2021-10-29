import React from "react";
import styled from "styled-components";
import { fetchCities } from "../../service/cityService"
//<li><button onClick={() => setCity("Roma")}> Roma </button></li>

const Selector = styled.select`
    background: #e5e5e5;
    border: none;
    font-size: 14px;
    height: 35px;
    padding: 7px;
    width: 250px;
    border-radius: 5px;
    align-self: flex-end;
    margin-right: 2.3em;
    &:focus { outline: none }
`;


const CitySelector = ({ setCity, initCity}) => {
    const handleChange = (event) => {
        console.log(event.target.value);
        setCity(event.target.value);
    }

    const cities = fetchCities();

    return (
        <Selector onChange={handleChange}>
            <option value={initCity}>Ciudad Actual ({initCity})</option>
            { 
                cities.map(citie => <option value={citie.code}> {citie.name} </option>) 
            }
        </Selector>
    );
};

export default CitySelector;
