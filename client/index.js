import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './stylesheets/main.scss';
import App from './components/App';

render(<App/>, document.getElementById('root'));