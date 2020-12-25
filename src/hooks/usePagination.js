import { useState, useEffect } from 'react';

const usePagination = (defaultOffset, defaultLimit, items) => {
  const [limit, setLimit] = useState(defaultLimit);
  const [offset, setOffset] = useState(defaultOffset);
  const [currentItems, setCurrentItems] = useState([]);

  const handleChange = (newOffset, newLimit) => {
    setOffset(newOffset);
    setLimit(newLimit);
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
