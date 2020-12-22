import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

import Authors from 'features/Authors';

// import store from 'store';

import 'normalize.css';
import './styles.scss';

const App = () => (
  // <Provider store={store}>
  <Authors />
  // </Provider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
