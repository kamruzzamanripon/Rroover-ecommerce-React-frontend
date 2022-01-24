import {HashRouter} from "react-router-dom";
import AppRoute from "./route/AppRoute";
import {transitions, positions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';


function App() {

    // optional configuration
    const options = {
        // you can also just use 'bottom center'
        position: positions.TOP_CENTER,
        timeout: 5000,
        offset: '30px',
        // you can also just use 'scale'
        transition: transitions.SCALE
    }

    return (

        <>

            <HashRouter>
                <AlertProvider template={AlertTemplate} {...options}>
                    <AppRoute/>
                </AlertProvider>
            </HashRouter>

        </>
    );
}

export default App;
