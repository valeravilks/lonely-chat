import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import {Provider} from 'mobx-react';
import stores from '~s';

import 'bootstrap/dist/css/bootstrap.min.css';

stores.storage.loadApp();

ReactDom.render(<Provider stores={stores}>
    <App/>
</Provider>, document.querySelector('#app'));
