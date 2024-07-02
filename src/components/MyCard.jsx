import React, { useState, useEffect }  from 'react'
import {Card, CardHeader, CardBody,CardFooter, Image} from "@nextui-org/react";



const MyCard = ({data}) => {

  // const item = {
  //   company: 'Apple',
  //   rating: 4.5,
  //   productName: 'iPhone 13 Pro Max',
  //   price: 1099,
  //   discount: 10,
  //   availability: 'yes'
  // }

    
  return (
  <Card className="py-2 m-6 hover:scale-105 ">
    <CardBody className="overflow-visible py-2 items-center">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://nextui.org/images/hero-card-complete.jpeg"
        width={270}
      />
    </CardBody>
    <CardHeader className="pb-0 pt-2 px-4 block">

        <div className='flex justify-between'>
          <h4 className="font-semibold text-medium text-gray-400">{data.company}</h4>
          <p className=' '>{data.rating}</p>
        </div>
        <h1 className='font-bold text-2xl'>{data.productName}</h1>
        <div className='flex'>
          <p className=" text-lg mr-2">${data.price}</p>
          <p className="text-default-500 text-medium line-through mr-2">${(data.price/(1-(data.discount)/100)).toFixed(2)}</p>
          <p className="text-default-500 text-medium ">{data.discount}% off</p>
        </div>
        {
        data.availability === 'yes' ? 
        <p className="text-green-500 text-medium text-end">In Stock</p> : 
        <p className="text-red-500 text-medium text-end">Out of Stock</p>
        } 

    </CardHeader>
  </Card>
  )
}

export default MyCard