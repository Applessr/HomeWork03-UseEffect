import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProduceList from './components/ProduceList';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className='border border-primary flex flex-col my-10 mx-auto shadow-md w-[60%] p-4 items-center rounded-lg text-[#102C57] justify-start'>
      <h1 className='text-4xl text-primary font-bold py-4'>Produce Search</h1>
      <SearchBar setSearch={setSearch} />
      <ProduceList search={search} />
    </div>
  );
}

export default App;
