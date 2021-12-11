
import RoutesPages from "./routes/routes";
import store from "./redux/store";
import { Provider } from 'react-redux';

function App() {

  return (
    <>
      <Provider store={store}>
        <RoutesPages />
      </Provider>
    </>
  )
}

export default App
