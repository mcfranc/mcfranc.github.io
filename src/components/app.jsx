import React from 'react';

import ProjectList from '../containers/project_list';
import ActiveProject from '../containers/active_project';

const App = () => {
  return (
    <div className="app">
      <ProjectList />
      <ActiveProject />
    </div>
  );
};

export default App;
