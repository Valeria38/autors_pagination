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

  const reset = () => {
    setOffset(defaultOffset);
    setLimit(defaultLimit);
  };

  return {
    offset,
    limit,
    currentItems,
    reset,
    handleChange,
  };
};

export default usePagination;
