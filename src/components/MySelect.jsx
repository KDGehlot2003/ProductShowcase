import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import {animals} from "./data";

const MySelect = ({lableProp}) => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select 
        label={lableProp}
        className="max-w-xs animate-appearance-in" 
      >
        {animals.map((animal) => (
          <SelectItem key={animal.key}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}

export default MySelect