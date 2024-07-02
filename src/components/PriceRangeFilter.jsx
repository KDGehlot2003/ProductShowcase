import React, { useState } from "react";

const PriceRangeFilter = ({ onChange, minPrice, maxPrice }) => {
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);
  
  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    setMinValue(value);
    onChange(value, maxValue);
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    setMaxValue(value);
    onChange(minValue, value);
  };

  return (
    <div className='col-start-2 col-end-6 mt-4 mx-auto w-56 text-center'>
    <label>Price Range:</label>
    <br/>
    <input
      type="range"
      min={minPrice}
      max={maxPrice}
      value={minValue}
      onChange={handleMinChange}
      className="form-range mt-1"
    />
    <br />
    <input
      type="range"
      min={minPrice}
      max={maxPrice}
      value={maxValue}
      onChange={handleMaxChange}
      className="form-range mt-1"
    />
    <div className="mt-2">Min: ${minValue} - Max: ${maxValue}</div>
  </div>
  );
};

export default PriceRangeFilter;
