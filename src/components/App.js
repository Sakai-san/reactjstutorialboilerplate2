import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import PictureDetail from '../containers/PictureDetail';
import Upload from './Upload';
import '../styles.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/picture/:id" component={PictureDetail} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </main>
    );
  }
}

export default App;
