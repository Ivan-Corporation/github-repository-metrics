import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RepositoryMetrics } from '../src/RepositoryMetrics';

const App = () => {
  return (
    <div>
      <RepositoryMetrics owner='Ivan-Corporation' repo='3D-Planet-destroyer' theme='dark' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
