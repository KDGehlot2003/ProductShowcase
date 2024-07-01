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

  const myData = JSON.parse(JSON.stringify(data));

  console.log(myData[0]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  


  const myData12 = {
                  "availability": "yes",
                  "category": "Phone",
                  "company": "AMZ",
                  "discount": 20,
                  "id": 1,
                  "price": 500,
                  "productName": "Phone 1",
                  "rating": 4.5
                  }
    
  return (
    <>

    <Card className="py-2 m-6">
    <CardBody className="overflow-visible py-2 items-center">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://nextui.org/images/hero-card-complete.jpeg"
        width={270}
      />
    </CardBody>
    <CardHeader className="pb-0 pt-2 px-4 block">
    
    {/* <h1 className='font-bold text-2xl'>{myData[0].productName}</h1> */}

        {/* <div className='flex justify-between'>
          <h4 className="font-semibold text-medium text-gray-400">{myData.company}</h4>
          <p className=' '>{myData.rating}</p>
        </div>
        <h1 className='font-bold text-2xl'>{myData.productName}</h1>
        <div className='flex'>
          <p className=" text-lg mr-2">${myData.price}</p>
          <p className="text-default-500 text-medium line-through mr-2">${myData.price/(1-(myData.discount)/100)}</p>
          <p className="text-default-500 text-medium ">{myData.discount}% off</p>
        </div>
        {
        myData.availability === 'yes' ? 
        <p className="text-green-500 text-medium text-end">In Stock</p> : 
        <p className="text-red-500 text-medium text-end">Out of Stock</p>
        }  */}


      {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
      {/* <small className="text-default-500">12 Tracks</small> */}
      {/* <b>{myData.productName}</b> */}
      {/* <p className="text-default-500">${myData.price}</p> */}
    </CardHeader>
  </Card>
  </>
  )
}

export default MyCard