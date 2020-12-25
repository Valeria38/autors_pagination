import PropTypes from 'prop-types';

import SearchIcon from 'images/search.svg';

import './styles.scss';

const SearchInput = ({ value, onChange, name, placeholder }) => {
  return (
    <div className="search-input-wrapper">
      <SearchIcon className="search-input--icon" />
      <input
        data-testid="search"
        className="search-input"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default SearchInput;
