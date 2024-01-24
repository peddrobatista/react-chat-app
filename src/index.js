import {createRoot} from 'react-dom/client'
import GlobalStyle from './styles/global';
import App from './App';

const root = createRoot(document.querySelector("#root"));

root.render(
    <>
        <App/>
        <GlobalStyle/>
    </>
);