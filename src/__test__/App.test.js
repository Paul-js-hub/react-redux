import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

describe('Test header', () => {
  it('test if the heander is rendered correctly', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
