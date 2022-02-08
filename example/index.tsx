import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GithubStars } from '../.';

const App = () => {
  return (
    <div>
      <GithubStars />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
