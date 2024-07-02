import React, { useState, useEffect }  from 'react'
import {Card, CardHeader, CardBody,CardFooter, Image} from "@nextui-org/react";
import MyCard from '../components/MyCard'
import fetchData from '../data/Data'

// console.log(data);


const AllProdcts = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const getData = async () => {
          const result = await fetchData();
            if (result) {
                setData(result);
                setLoading(false);
            } else {
            setError('Failed to fetch data');
            setLoading(false);
            }
        };
        getData();
    }, []);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='grid grid-cols-4'>

    {data && data.length>0 && data.map((item) => (
        <MyCard data={item} key={item.id} />
    ))}
    </div>
    )
}

export default AllProdcts