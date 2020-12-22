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
    <div className="pagination">
      <ArrowLeft
        onClick={handlePrev}
        className={classNames('pagination--arrow', { disabled: isFirstPage })}
      />
      {`${offset + 1} - ${isLastPage ? total : limit + offset}`}
      <ArrowRight
        onClick={handleNext}
        className={classNames('pagination--arrow', { disabled: isLastPage })}
      />
    </div>
  );
};

export default Pagination;
