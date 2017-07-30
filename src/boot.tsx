//css
import './css/site.css';

//js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as RoutesModule from './routes';
import { BrowserRouter } from 'react-router-dom';
let routes = RoutesModule.routes;
import { AppContainer } from 'react-hot-loader';


ReactDOM.render(
    <AppContainer>
        <BrowserRouter children={routes} />

    </AppContainer>,
    document.getElementById('root') as HTMLElement
);

interface RequireImport {
    default: any;
}

if (module.hot) {
    module.hot.accept('./routes', () => {
        console.log('doing a app hot accept')
        // const NextApp = require<RequireImport>('./routes').default
        ReactDOM.render(
            <AppContainer>
                {/* <NextApp /> */}
                {/* <BrowserRouter children={ routes } /> */}

            </AppContainer>,
            document.getElementById('root')
        );
    });
}
