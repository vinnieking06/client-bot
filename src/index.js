import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Account from './Account';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(<Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/account" component={Account} />
      </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
