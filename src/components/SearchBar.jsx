import React, { useState, useEffect } from 'react';

export default function SearchBar({ setSearch }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(input);
    }, 1000);

    return () => {
      clearTimeout(timer); 
    };
  }, [input]); 

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='w-[100%] flex justify-center text-white p-2'>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search Product"
        className="input input-bordered input-primary w-full max-w-xs" />
    </div>
  );
}