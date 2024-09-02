import React, { useState, useEffect } from 'react';

export default function ProduceList({ search }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(`https://dummyjson.com/products/search?q=${search}`);
    const result = await resp.json();
    setData(result.products);
   
  };

  useEffect(() => {
    if (search) {
      fetchData();
    }
  }, [search]);


  return (
<div>
  <ul className='flex flex-col mx-10'>
    {data.map((product) => (
      <li className='p-5 text-neutral-content border rounded-md m-2 hover:bg-base-300 hover:text-white' 
      key={product.id}>
        <p className='text-[20px] font-semibold py-1'>{product.title} </p>
        <p  className='text-[18px] '>{product.category} </p>
        <p className='py-1'>${product.price}</p> 
      </li>
    ))}
  </ul>
</div>
  );
}