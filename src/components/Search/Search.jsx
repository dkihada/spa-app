import { useState } from 'react';

function Search({ searchCategory = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    searchCategory(value);
  };

  return (
    <>
      <div className='item' style={{ marginBottom: '20px' }}>
        <div className='ui icon input container'>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            onKeyDown={handleKey}
            type='text'
            placeholder='Search category...'
          />
          <i onClick={handleSubmit} className='search link icon'></i>
        </div>
      </div>
    </>
  );
}

export { Search };
