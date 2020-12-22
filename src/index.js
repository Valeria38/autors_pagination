import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';

import 'normalize.css';
import './styles.scss';

const App = () => (
  <Provider store={store}>
    Apps
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
