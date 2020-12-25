import { SORTING_ORDERS } from 'Constants';

import './styles.scss';

const SortHeader = ({ children, order, sort, field }) => {
  const nextOrder =
    order === SORTING_ORDERS.asc ? SORTING_ORDERS.desc : SORTING_ORDERS.asc;

  return (
    <div className="sort-header" onClick={() => sort(nextOrder, field)}>
      {children}
      {order === SORTING_ORDERS.desc ? (
        <div className="arrow-up" />
      ) : (
        <div className="arrow-down" />
      )}
    </div>
  );
};

export default SortHeader;
