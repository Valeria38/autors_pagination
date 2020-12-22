import './styles.scss';

const ListItem = ({ id, name, count_pub, pageviews, withMedal }) => {
  const avatarLetter = name.slice(0, 1);
  return (
    <div className="list-item">
      <div className="list-item--id">{id}</div>

      <div className="list-item--avatar">{avatarLetter}</div>

      <div className="list-item--left">
        <div className="list-item--name">{name}</div>
        <div className="list-item--count-pub">{count_pub} публ.</div>
      </div>

      <div>{withMedal && 1}</div>

      <div className="list-item--pageviews">{pageviews}</div>
    </div>
  );
};

export default ListItem;
