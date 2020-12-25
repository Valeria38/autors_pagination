import { render, fireEvent } from '@testing-library/react';

import Pagination from './index';

import '@testing-library/jest-dom';

describe('Pagination component', () => {
  const setUp = (extraProps) => {
    const props = {
      limit: 10,
      offset: 0,
      total: 35,
      onChange: jest.fn(),
      ...extraProps,
    };

    const { getByTestId, getAllByTestId } = render(<Pagination {...props} />);
    return { getByTestId, getAllByTestId, props };
  };

  it('shows first page when offset is 0', () => {
    const { getByTestId } = setUp({ limit: 20, offset: 0 });
    expect(getByTestId('pagination-info')).toHaveTextContent('1 - 20');
  });

  it('fires an event on right arrow click', () => {
    const { getByTestId, props } = setUp({ limit: 10, offset: 0 });
    const rightArrow = getByTestId('arrow-right');
    expect(props.onChange.mock.calls.length).toBe(0);
    fireEvent.click(rightArrow);
    expect(props.onChange.mock.calls.length).toBe(1);
  });

  it('shows total items count on the last page', () => {
    const { getByTestId } = setUp({ limit: 10, offset: 30, total: 35 });
    expect(getByTestId('pagination-info')).toHaveTextContent('31 - 35');
  });
});
