import { useState, useEffect } from 'react';

const usePagination = (defaultOffset, defaultLimit, items) => {
  const [limit, setLimit] = useState(defaultLimit);
  const [offset, setOffset] = useState(defaultOffset);
  const [currentItems, setCurrentItems] = useState([]);

  console.log('use pagination', items);

  const handleChange = (offset, limit) => {
    setOffset(offset);
    setLimit(limit);
  };

  useEffect(() => {
    console.log('effect items', items);
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
    setCurrentItems,
    reset,
    handleChange,
  };
};

export default usePagination;
