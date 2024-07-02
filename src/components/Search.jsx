import React from 'react'
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {animals} from "./data";

const Search = () => {
  return (
    <Autocomplete 
    allowsCustomValue
    label="Search a Product" 
    variant="bordered"
    className="max-w-xs" 
    defaultItems={animals}
  >
    {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
  </Autocomplete>
  )
}

export default Search