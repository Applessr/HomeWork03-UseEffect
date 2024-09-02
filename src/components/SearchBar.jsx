import React, { useState, useEffect } from 'react';

function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export default function SearchBar({ setSearch}) {
  const [input, setInput] = useState('');

  const debouncedSearch = debounce((value) => {
    setSearch(value);
  }, 500);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    debouncedSearch(e.target.value);  
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