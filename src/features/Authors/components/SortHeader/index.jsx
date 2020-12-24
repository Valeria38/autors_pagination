import './styles.scss';

const sortOrders = {
  asc: 'asc',
  desc: 'desc',
};

const SortHeader = ({ children, order, sort, field }) => {
  // const [sortOrder, setSortOrder] = useState(order);

  // const sort = () => {
  //   const order = sortOrder === sortOrders.asc ? sortOrders.desc : sortOrders.asc;
  //   setSortOrder(order);
  // }

  return (
    <div
      className="sort-header"
      onClick={() =>
        sort(order === sortOrders.asc ? sortOrders.desc : sortOrders.asc, field)
      }
    >
      {children}
      {order === sortOrders.asc ? (
        <div className="arrow-up" />
      ) : (
        <div className="arrow-down" />
      )}
    </div>
  );
};

export default SortHeader;
