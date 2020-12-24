import ReactDOM from 'react-dom';

import Authors from 'features/Authors';

import 'normalize.css';
import './styles.scss';

const App = () => <Authors />;

ReactDOM.render(<App />, document.querySelector('#root'));
