import { useState, useEffect } from 'react';

import SearchInput from 'features/Authors/components/SearchInput';
import ListItem from 'features/Authors/components/ListItem';
import Pagination from 'features/Authors/components/Pagination';

import usePagination from 'hooks/usePagination';

import data from 'features/Authors/data.json';

import './styles.scss';

const Authors = () => {
  const { offset, limit, currentItems, handleChange } = usePagination(
    0,
    10,
    data
  );

  const [topIds, setTopIds] = useState([]);

  const getTopThree = () => {
    const topThreeIds = [...data]
      .sort((a, b) => b.pageviews - a.pageviews)
      .slice(0, 3)
      .map(({ id }) => id);

    setTopIds(topThreeIds);
  };

  useEffect(() => {
    getTopThree();
  }, []);

  const getTopPlace = (id) => {
    const index = topIds.indexOf(id);
    return index;
  };

  return (
    <div className="authors">
      <div className="authors--list-wrapper">
        <SearchInput placeholder="Поиск авторов по имени" />

        {currentItems.map((author) => (
          <ListItem
            key={author.id}
            {...author}
            topPlaceIndex={getTopPlace(author.id)}
          />
        ))}
      </div>
      <Pagination
        offset={offset}
        limit={limit}
        total={data.length}
        onChange={handleChange}
      />
    </div>
  );
};

export default Authors;
