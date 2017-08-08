import React, {component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//import React Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//component imports
import Home from './Home';
import BaseLayout from './BaseLayout';
import BankShot from './BankShot';
import Users from './Users';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={BankShot} />
            <Route path="/users/:id" component={Home} />
            <Route path="/users" component={Users} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
