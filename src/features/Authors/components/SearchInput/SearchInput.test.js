import { render, fireEvent } from '@testing-library/react';

import SearchInput from './index';

import '@testing-library/jest-dom';

describe('SearchInput component', () => {
  const setUp = (extraProps) => {
    const props = {
      value: '',
      onChange: jest.fn(),
      name: 'search',
      placeholder: 'Search...',
      ...extraProps,
    };

    const { getByTestId, getAllByTestId } = render(<SearchInput {...props} />);
    return { getByTestId, getAllByTestId, props };
  };

  it('shows initial value', () => {
    const value = 'Initial';
    const { getByTestId } = setUp({ value });
    expect(getByTestId('search').value).toBe(value);
  });

  it('fires an event handler on change', () => {
    const { getByTestId, props } = setUp();
    const input = getByTestId('search');
    expect(props.onChange.mock.calls.length).toBe(0);
    fireEvent.change(input, { target: { value: '1' } });
    expect(props.onChange.mock.calls.length).toBe(1);
  });

  it('has a name', () => {
    const name = 'new search';
    const { getByTestId } = setUp({ name });
    expect(getByTestId('search').name).toBe(name);
  });

  it('has a placeholder', () => {
    const placeholder = 'new placeholder';
    const { getByTestId } = setUp({ placeholder });
    expect(getByTestId('search').placeholder).toBe(placeholder);
    expect(getByTestId('search').placeholder).not.toBe(`${placeholder}123`);
  });
});
