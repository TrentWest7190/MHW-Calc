import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as skillData from './skillData';

ReactDOM.render(<App skillData={skillData}/>, document.getElementById('root'));
registerServiceWorker();
