import React, { useState, useEffect }  from 'react'
import {Card, CardHeader, CardBody,CardFooter, Image} from "@nextui-org/react";



const MyCard = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://json-server.bytexl.app/products')
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json()

        setData(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }};
      fetchData();
  } , [])

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  

    
  return (
    <>
  {data && data.length>0 && data.map((item) => (
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
          <h4 className="font-semibold text-medium text-gray-400">{item.company}</h4>
          <p className=' '>{item.rating}</p>
        </div>
        <h1 className='font-bold text-2xl'>{item.productName}</h1>
        <div className='flex'>
          <p className=" text-lg mr-2">${item.price}</p>
          <p className="text-default-500 text-medium line-through mr-2">${(item.price/(1-(item.discount)/100)).toFixed(2)}</p>
          <p className="text-default-500 text-medium ">{item.discount}% off</p>
        </div>
        {
        item.availability === 'yes' ? 
        <p className="text-green-500 text-medium text-end">In Stock</p> : 
        <p className="text-red-500 text-medium text-end">Out of Stock</p>
        } 

    </CardHeader>
  </Card>
  ))}
  </>
  )
}

export default MyCard