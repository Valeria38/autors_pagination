import SearchInput from './components/SearchInput';
import ListItem from './components/ListItem';

import data from 'features/Authors/data.json';

import './styles.scss';

const Authors = () => {
  return (
    <div className="authors">
      <div className="authors--list-wrapper">
        <SearchInput placeholder="Поиск авторов по имени" />

        {data.map((author, index) => (
          <ListItem key={index} {...author} id={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Authors;
