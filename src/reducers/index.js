import { combineReducers } from 'redux';
import ProjectsReducer from './projects_reducer';
import ActiveProjectReducer from './active_project_reducer.js';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  activeProject: ActiveProjectReducer
});

export default rootReducer;
