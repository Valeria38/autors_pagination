import SearchIcon from 'images/search.svg';

import './styles.scss';

const SearchInput = ({ value, onChange, name, placeholder }) => {
  return (
    <div className="search-input-wrapper">
      <SearchIcon className="search-input--icon" />
      <input
        className="search-input"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
