import React from 'react';
import ReactDom from 'react-dom';
import h from 'react-hyperscript';

import App from './App';

ReactDom.render(h(App), document.querySelector('#app'));
