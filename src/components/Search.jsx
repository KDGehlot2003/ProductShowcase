import React, { useEffect } from 'react'
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";

const Search = ({productList, onChange}) => {

  const handleChange = (value) => {
    onChange(value); // Pass the input value to the parent component
  };


  return (
    <Autocomplete 
    allowsCustomValue
    label="Search a Product" 
    variant="bordered"
    className="max-w-xs animate-appearance-in h-12" 
    onChange={handleChange} // Handle change event
    defaultItems={productList}
  >
    {productList.map(item => <AutocompleteItem key={item.toLowerCase()}>{item}</AutocompleteItem>)}
  </Autocomplete>
  )
}

export default Search