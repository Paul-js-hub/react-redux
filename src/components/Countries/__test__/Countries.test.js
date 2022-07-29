import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import Countries from '../Countries';

test('it returns all countries', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Countries />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
