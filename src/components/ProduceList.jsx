import React, { useState, useEffect } from 'react';

export default function ProduceList({ search }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(`https://dummyjson.com/products/search?q=${search}`);
      if (!resp.ok) {
        throw new Error('Failed to fetch');
      }
      const result = await resp.json();
      setData(result.products);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      fetchData();
    }
  }, [search]);

  if (loading) {
    return <div className='text-white'>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ul className='flex flex-col mx-10'>
        {data.length > 0 ? (
          data.map((product) => (
            <li
              className='p-5 text-neutral-content border rounded-md m-2 hover:bg-base-300 hover:text-white'
              key={product.id}
            >
              <div>
                <p className='text-[20px] font-semibold py-1'>{product.title}</p>
                <p className='text-[18px]'>{product.category}</p>
                <p className='py-1'>${product.price}</p>
              </div>
            </li>
          ))
        ) : (
          <p className='text-white'>Product Not Found</p>
        )}
      </ul>
    </div>
  );
}