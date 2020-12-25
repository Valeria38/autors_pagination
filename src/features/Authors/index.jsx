import { useState, useEffect, useMemo } from 'react';

import SearchInput from 'features/Authors/components/SearchInput';
import ListItem from 'features/Authors/components/ListItem';
import Pagination from 'features/Authors/components/Pagination';
import SortHeader from 'features/Authors/components/SortHeader';

import usePagination from 'hooks/usePagination';

import { DEFAULT_OFFSET, DEFAULT_LIMIT, SORTING_ORDERS } from 'Constants';

import data from 'features/Authors/data.json';

import { compareStrings, compareNumbers } from 'helpers/index';

import './styles.scss';

const Authors = () => {
  const [topThree, setTopThree] = useState([]);
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [sortOrders, setSortOrders] = useState({
    name: SORTING_ORDERS.asc,
    pageviews: SORTING_ORDERS.asc,
  });

  const {
    offset: searchOffset,
    limit: searchLimit,
    currentItems: searchCurrentItems,
    handleChange: searchHandleChange,
    reset,
  } = usePagination(
    DEFAULT_OFFSET,
    DEFAULT_LIMIT,
    searchResults,
    searchResults
  );

  const page = useMemo(() => searchOffset / 10 + 1, [searchOffset]);

  const sort = (order, field) => {
    const sortedResults = searchResults.sort((a, b) => {
      const isNumber = typeof a[field] === 'number';

      if (isNumber) {
        return order === SORTING_ORDERS.desc
          ? compareNumbers(a[field], b[field])
          : compareNumbers(b[field], a[field]);
      } else {
        return order === SORTING_ORDERS.desc
          ? compareStrings(a[field], b[field])
          : compareStrings(b[field], a[field]);
      }
    });

    const absentAuthors = getAbsentAuthors(sortedResults);

    setSearchResults([...topThree, ...absentAuthors]);
    setSortOrders({ ...sortOrders, [field]: order });
  };

  const handleSearch = ({ target: { value } }) => {
    setValue(value);
    reset();
  };

  const getAbsentAuthors = (results) => {
    const topThreeIds = topThree.map(({ id }) => id);

    const absentAuthors = results.filter(({ id }) => {
      return !topThreeIds.includes(id);
    });

    return absentAuthors;
  };

  useEffect(() => {
    // get all search results
    const searchResults = data.filter(({ name }) => {
      return name.toLowerCase().includes(value.toLowerCase());
    });

    // get absent in search results from top 3
    const absentAuthors = getAbsentAuthors(searchResults);

    setSearchResults([...topThree, ...absentAuthors]);
  }, [value]);

  const getTopThree = () => {
    const topThree = [...data]
      .sort((a, b) => compareNumbers(b.pageviews, a.pageviews))
      .slice(0, 3);

    setTopThree(topThree);
  };

  useEffect(() => {
    getTopThree();
  }, []);

  const getIsTopPlace = (id) => topThree.map(({ id }) => id).includes(id);

  return (
    <div className="authors">
      <div className="authors--list-wrapper">
        <SearchInput
          placeholder="Поиск авторов по имени"
          onChange={handleSearch}
        />

        <div className="sort-header--wrapper">
          <div />
          <div />
          <SortHeader order={sortOrders.name} sort={sort} field="name">
            Name
          </SortHeader>
          <div />
          <SortHeader
            order={sortOrders.pageviews}
            sort={sort}
            field="pageviews"
          >
            Page views
          </SortHeader>
        </div>

        {searchCurrentItems.length &&
          searchCurrentItems.map((author, index) => (
            <ListItem
              index={page === 1 ? index + 1 : searchOffset + (index + 1)}
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
