import React, { useState, useEffect }  from 'react'
import MySelect from '../components/MySelect'
import Search from '../components/Search'
import fetchData from '../data/Data'
import MyCard from '../components/MyCard'
import {Spinner} from "@nextui-org/react";


const Spotlight = () => {
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
  
  if (loading) return <div className=' flex justify-center m-80'>
    <Spinner size="lg" />
  </div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='my-10'>
      <div className='grid grid-cols-6 gap-4 mx-56'>
        <div className='col-start-1 col-end-2 w-56'>
          <MySelect
          lableProp='Select a Category'
          />
        </div>
        <div className='col-start-2 col-span-4 text-center'>
          <Search />
        </div>
        <div className='col-end-7 col-span-1 w-full'>
          <MySelect 
          lableProp='Sort By'
          />
        </div>                
      </div>
      <div className='grid grid-cols-4 mx-20'>
        {data && data.length>0 && data.map((item) => (
            <MyCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Spotlight