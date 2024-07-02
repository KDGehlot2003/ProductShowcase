import React from 'react'
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";

const Search = ({productList}) => {
  console.log(productList);
  return (
    <Autocomplete 
    allowsCustomValue
    label="Search a Product" 
    variant="bordered"
    className="max-w-xs animate-appearance-in h-12" 
    defaultItems={productList}
  >
    {productList.map(item => <AutocompleteItem key={item}>{item}</AutocompleteItem>)}
  </Autocomplete>
  )
}

export default Search