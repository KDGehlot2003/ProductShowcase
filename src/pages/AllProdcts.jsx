import React, { useState, useEffect }  from 'react'
import {Spinner} from "@nextui-org/react";
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
    
    if (loading) return <div className='flex justify-center md:m-80 mt-72 '>
        <Spinner size="lg" />
    </div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='grid grid-cols-1 sm:mx-10 sm:grid-cols-4 ml-5'>

    {data && data.length>0 && data.map((item) => (
        <MyCard data={item} key={item.id} />
    ))}
    </div>
    )
}

export default AllProdcts