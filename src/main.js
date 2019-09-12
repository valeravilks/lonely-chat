import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import {Provider} from 'mobx-react';
import stores from '~s';

stores.storage.loadStore();

ReactDom.render(<Provider stores={stores}>
    <App/>
</Provider>, document.querySelector('#app'));
