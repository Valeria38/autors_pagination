import { useState, useEffect, useMemo } from 'react';

import SearchInput from 'features/Authors/components/SearchInput';
import ListItem from 'features/Authors/components/ListItem';
import Pagination from 'features/Authors/components/Pagination';
import SortHeader from 'features/Authors/components/SortHeader';

import usePagination from 'hooks/usePagination';

import { DEFAULT_OFFSET, DEFAULT_LIMIT } from 'Constants';

import data from 'features/Authors/data.json';

import './styles.scss';

const Authors = () => {
  const [topThree, setTopThree] = useState([]);
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const {
    offset: searchOffset,
    limit: searchLimit,
    currentItems: searchCurrentItems,
    handleChange: searchHandleChange,
    reset,
  } = usePagination(DEFAULT_OFFSET, DEFAULT_LIMIT, searchResults);

  const handleSearch = ({ target: { value } }) => {
    setValue(value);
    reset();
  };

  const getAbsentInSearchResults = (results) => {
    const topThreeIds = topThree.map(({ id }) => id);

    const absentAuthors = results.filter(({ id }) => {
      return !topThreeIds.includes(id);
    });

    return absentAuthors;
  };

  useEffect(() => {
    // get all search results
    const searchResults = data.filter(({ name }) =>
      name.toLowerCase().includes(value)
    );

    // get absent in search results from top 3
    const absentAuthors = getAbsentInSearchResults(searchResults);

    setSearchResults([...topThree, ...absentAuthors]);
  }, [value]);

  const getTopThree = () => {
    const topThree = [...data]
      .sort((a, b) => b.pageviews - a.pageviews)
      .slice(0, 3);

    setTopThree(topThree);
  };

  useEffect(() => {
    getTopThree();
  }, []);

  const getIsTopPlace = (id) => {
    const isTopPlace = topThree.map(({ id }) => id).includes(id);
    return isTopPlace;
  };

  const page = useMemo(() => (searchOffset / 10) + 1, [searchOffset]);

  return (
    <div className="authors">
      <div className="authors--list-wrapper">
        <SearchInput
          placeholder="Поиск авторов по имени"
          onChange={handleSearch}
        />

        {/* <div className="sort-header--wrapper">
          <div />
          <div />
          <SortHeader>Name</SortHeader>
          <div />
          <SortHeader>Page views</SortHeader>
        </div> */}
        
        {searchCurrentItems.length
          && searchCurrentItems.map((author, index) => (
              <ListItem
                index={page === 1 ? (index + 1) : (searchOffset) + (index + 1)}
                key={index}
                {...author}
                isTopPlace={getIsTopPlace(author.id)}
              />
        ))}

      </div>
      <Pagination
        offset={searchOffset}
        limit={searchLimit}
        total={searchResults.length}
        onChange={searchHandleChange}
      />
    </div>
  );
};

export default Authors;
