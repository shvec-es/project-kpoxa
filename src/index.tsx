import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.scss';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter >, 
    document.getElementById('root')
);
