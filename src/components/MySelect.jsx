import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";


const MySelect = ({labelProp, liProp, onChange }) => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select 
        size='sm'
        label={labelProp}
        className="max-w-xs animate-appearance-in" 
        onChange={e => onChange(e.target.value)} 
      >
        {
        liProp.map((item, index) => (
          <SelectItem key={index} value={item}>
            {item.props.children}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}

export default MySelect