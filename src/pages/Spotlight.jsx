import React, { useState, useEffect }  from 'react'
import MySelect from '../components/MySelect'
import Search from '../components/Search'
import fetchData from '../data/Data'
import MyCard from '../components/MyCard'
import {Spinner} from "@nextui-org/react";
import {Pagination} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import PriceDropDown from '../components/PriceDropDown'


const Spotlight = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Adjust this value based on your requirements
  const [selectedPriceRange, setSelectedPriceRange] = useState({ min: 0, max: 5000 }); // Initial price range
  const [selectedCategory, setSelectedCategory] = useState(''); // State to manage selected category
  const [selectedCompany, setSelectedCompany] = useState(''); // State to manage selected Company

  
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
  
  const uniqueCategories = [...new Set(data.map(item => item.category))];
  const uniqueCompany = [...new Set(data.map(item => item.company))];
  const uniqueRating = [...new Set(data.map(item => item.rating))];
  const uniqueProduct = [...new Set(data.map(item => item.productName))];
  
 // Filter data based on selected category and price range
  let filteredData = data.filter(item => {
  const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
  const matchesCompany = selectedCompany ? item.company === selectedCompany : true;
  const matchesPrice = item.price >= selectedPriceRange.min && item.price <= selectedPriceRange.max;
  return matchesCategory && matchesPrice && matchesCompany;
});

// console.log('Unique Categories:', uniqueCategories);
// console.log('Selected Category:', selectedCategory);
// console.log('Selected Price Range:', selectedPriceRange);
// console.log('Filtered Data Length:', filteredData.length);
// console.log('Filtered Data:', filteredData);

  // Calculate the items to be displayed for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePriceRangeChange = (min, max) => {
    setSelectedPriceRange({ min, max });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(uniqueCategories[category]);
    setCurrentPage(1); // Reset page to 1 when category changes
  };

  const handleCompanyChange = (company) => {
    setSelectedCompany(uniqueCompany[company]);
    setCurrentPage(1); // Reset page to 1 when category changes
  };


  
  const sortOptions = ["price", "rating", "discount"]

  return (
    <div className='my-10'>
      <div className='grid grid-cols-12 gap-4 mx-36'>
        <div className='col-start-1 col-end-3 w-40'>
          <MySelect
          labelProp='Select a Category'
          liProp={uniqueCategories.map((category, index) => (
            <option key={index}>
              {category}
            </option>
            ))}
            onChange={handleCategoryChange}
          />
        </div>
        <div className='col-start-3 col-end-5 w-40'>
          <MySelect
          labelProp='Select a Company'
          liProp={uniqueCompany.map((company, index) => (
            <option key={index}>
              {company}
            </option>
            ))}
          onChange={handleCompanyChange}
          />
        </div>
        <div className='col-start-5 col-end-6 w-20'>
            <MySelect
            labelProp='Rating'
            liProp={uniqueRating.map((rating, index) => (
              <option key={index}>
                {rating}
              </option>
              ))}
            onChange={() => {}}
            />
        </div>
        <div className='col-start-6 col-end-10 text-center '>
          <Search productList={uniqueProduct} />
        </div>
        <div className='col-start-10 col-end-11 '>
        <PriceDropDown
            onChange={handlePriceRangeChange}
            minPrice={0}
            maxPrice={5000}
          />
        </div>
        <div className='col-start-11 col-end-12 w-28 '>
          <MySelect 
          labelProp='SortBy'
          liProp={sortOptions.map((option, index) => (
            <option key={index}>
              {option}
            </option>
            ))}
          onChange={() => {}}
          />
        </div>     

      </div>
        <div className='flex justify-end mr-20'>
        <Checkbox defaultSelected className='text-white'><p className='text-sm'>In Stock</p></Checkbox>
        </div>
      <div className='grid grid-cols-4 mx-20'>
      {currentItems && currentItems.length > 0 ? (
          currentItems.map((item) => (
            <MyCard data={item} key={item.id} />
          ))
        ) : (
          <div className='col-span-4 text-center mt-20'>
            No products found for the selected category and price range.
          </div>
        )}
      </div>
      <div className='flex justify-center mt-10'>
        <Pagination 
        total={totalPages} 
        initialPage={currentPage} 
        onChange={(page) => handlePageChange(page)}
        className=' text-white' 
        />
      </div>
    </div>
  )
}

export default Spotlight