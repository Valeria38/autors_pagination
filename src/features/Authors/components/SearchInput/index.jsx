import { useState } from 'react';

import './styles.scss';

const SearchInput = ({ onChange, name, placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    // onChange(value);
  };

  return (
    <div className="search-input-wrapper">
      <input
        className="search-input"
        value={value}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
