import { useState, useEffect } from 'react';

const usePagination = (defaultOffset, defaultLimit, items) => {
  const [limit, setLimit] = useState(defaultLimit);
  const [offset, setOffset] = useState(defaultOffset);
  const [currentItems, setCurrentItems] = useState([]);

  const handleChange = (offset, limit) => {
    setOffset(offset);
    setLimit(limit);
  };

  useEffect(() => {
    setCurrentItems(items.slice(offset, offset + limit));
  }, [offset, limit, items]);

  return {
    offset,
    limit,
    currentItems,
    handleChange,
  };
};

export default usePagination;
