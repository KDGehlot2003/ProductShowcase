import React, { useState, useEffect }  from 'react'
import {Card, CardHeader, CardBody,CardFooter, Image} from "@nextui-org/react";
import MyCard from '../components/MyCard'



const AllProdcts = () => {
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
        <div className='grid grid-cols-4'>

    {data && data.length>0 && data.map((item) => (
        <MyCard data={item} key={item.id} />
    ))}
    </div>
    )
}

export default AllProdcts