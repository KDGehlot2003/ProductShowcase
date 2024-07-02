import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";
// import {animals} from "./data";

const MySelect = ({labelProp, liProp, value, onChange}) => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select 
        label={labelProp}
        className="max-w-xs animate-appearance-in" 
      >
        {liProp.map((item) => (
          <SelectItem key={item.key}>
            {item.props.children}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}

export default MySelect