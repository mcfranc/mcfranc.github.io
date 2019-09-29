import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectProject from '../actions/index';

const Project = (props) => {
  let classes = "project-index";
  if (props.project === props.activeProject) {
    classes += " active-project-link"
  }

  return (
    <span>
      <span
        className={classes}
        onClick={() => props.selectProject(props.project)}
      >{props.project.index}</span> &nbsp;
    </span>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectProject }, dispatch);
}

function mapStateToProps(state) {
  return {
    activeProject: state.activeProject
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
