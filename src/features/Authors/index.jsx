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

  return (
    <div className="authors">
      <div className="authors--list-wrapper">
        <SearchInput placeholder="Поиск авторов по имени" />

        {currentItems.map((author) => (
          <ListItem key={author.id} {...author} />
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
