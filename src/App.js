import Home from "./components/pages/Home";
import { Provider } from "react-redux";
import styled from "styled-components";

import store from "./store/store";

const Background = styled.div`
    background: #202124;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <Provider store={store}>
            <Background>
                <Home></Home>
            </Background>
        </Provider>
    );
}

export default App;
