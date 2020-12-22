import SearchInput from './components/SearchInput';

import './styles.scss';

const Authors = () => {
  return (
    <div className="authors">
      <div className="authors--list-wrapper">
        <SearchInput placeholder="Поиск авторов по имени" />
      </div>
    </div>
  );
};

export default Authors;
