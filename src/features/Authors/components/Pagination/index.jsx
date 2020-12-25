import PropTypes from 'prop-types';
import classNames from 'classnames';

import ArrowLeft from 'images/arrowLeft.svg';
import ArrowRight from 'images/ArrowRight.svg';

import './styles.scss';

const Pagination = ({ limit, offset, total, onChange }) => {
  const isFirstPage = offset === 0;
  const isLastPage = limit + offset >= total;

  const handlePrev = () => {
    !isFirstPage && onChange(offset - limit, limit);
  };

  const handleNext = () => {
    !isLastPage && onChange(offset + limit, limit);
  };

  return (
    <div className="pagination" data-testid="pagination">
      <ArrowLeft
        data-testid="arrow-left"
        onClick={handlePrev}
        className={classNames('pagination--arrow', { disabled: isFirstPage })}
      />
      <span data-testid="pagination-info">{`${offset + 1} - ${
        isLastPage ? total : limit + offset
      }`}</span>
      <ArrowRight
        data-testid="arrow-right"
        onClick={handleNext}
        className={classNames('pagination--arrow', { disabled: isLastPage })}
      />
    </div>
  );
};

Pagination.propTypes = {
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Pagination;
