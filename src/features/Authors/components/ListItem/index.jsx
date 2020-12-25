import PropTypes from 'prop-types';

import { medalSvgComponents } from 'Constants';

import './styles.scss';

const ListItem = ({ id, name, count_pub, pageviews, isTopPlace, index }) => {
  const Medal = isTopPlace && medalSvgComponents[id - 1];
  const avatarLetter = name.slice(0, 1);

  return (
    <div className="list-item">
      <div className="list-item--id" data-testid="list-index">
        {index}
      </div>

      <div className="list-item--avatar" data-testid="list-avatar">
        {avatarLetter}
      </div>
      <div className="list-item--left">
        <div className="list-item--name" data-testid="list-name">
          {name}
        </div>
        <div className="list-item--count-pub" data-testid="list-count-pub">
          {count_pub} публ.
        </div>
      </div>

      <div className="list-item--medal" data-testid="list-medal-wrapper">
        {isTopPlace && <Medal data-testid="list-medal" />}
      </div>

      <div className="list-item--pageviews" data-testid="list-pageviews">
        {pageviews}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  count_pub: PropTypes.number.isRequired,
  pageviews: PropTypes.number.isRequired,
  isTopPlace: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default ListItem;
