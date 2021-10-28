import React from "react";
//<li><button onClick={() => setCity("Roma")}> Roma </button></li>
const CitySelector = ({ setCity, initCity}) => {
    const handleChange = (event) => {
        console.log(event.target.value);
        setCity(event.target.value);
    }

    return (
        <select onChange={handleChange}>
            <option value={initCity}>Ciudad Actual ({initCity}</option>
            <option value='Roma'>Roma</option>
            <option value='Montevideo'>Montevideo</option>
            <option value='Paris'>Paris</option>
        </select>
    );
};

export default CitySelector;
