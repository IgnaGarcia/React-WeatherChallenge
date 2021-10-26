import Weather from "./components/pages/Weather";
import { Provider } from "react-redux";

import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <Weather></Weather>
        </Provider>
    );
}

export default App;
