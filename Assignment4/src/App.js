import { Provider } from 'react-redux';
import './App.css';
import store from './components/store';
import Todo from './components/todo';

function App() {
  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
   );
}

export default App;