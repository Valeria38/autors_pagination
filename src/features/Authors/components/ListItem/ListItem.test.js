import { render } from '@testing-library/react';

import ListItem from './index';

import '@testing-library/jest-dom';

describe('ListItem component', () => {
  const setUp = (extraProps) => {
    const props = {
      id: 1,
      name: 'Valeria',
      count_pub: 10,
      pageviews: 100000,
      isTopPlace: true,
      index: 1,
      ...extraProps,
    };

    const { getByTestId, getAllByTestId } = render(<ListItem {...props} />);
    return { getByTestId, getAllByTestId, props };
  };

  it('shows props on UI', () => {
    const { getByTestId, props } = setUp();
    expect(getByTestId('list-index')).toHaveTextContent('1');
    expect(getByTestId('list-avatar')).toHaveTextContent(
      props.name.slice(0, 1),
    );
    expect(getByTestId('list-name')).toHaveTextContent(props.name);
    expect(getByTestId('list-count-pub')).toHaveTextContent(
      `${props.count_pub} публ.`,
    );
    expect(getByTestId('list-pageviews')).toHaveTextContent(props.pageviews);
  });

  it('shows medal when isTopPlace prop exists', () => {
    const { getByTestId } = setUp();
    expect(getByTestId('list-medal')).toBeDefined();
  });

  it("doesn't show medal when isTopPlace prop was not passed", () => {
    const { getByTestId } = setUp({ isTopPlace: false });
    expect(getByTestId('list-medal-wrapper')).toHaveTextContent('');
  });
});
