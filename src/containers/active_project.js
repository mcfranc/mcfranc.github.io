import React from 'react';
import { connect } from 'react-redux';

const ActiveProject = (props) => {
  if (!props.activeProject) {
    return (
      <div className="active-project">
      </div>
    );
  }

  return (
    <div className="active-project">
      <a href={props.activeProject.url}>
        <p>{props.activeProject.name}</p>
      </a>
      <p>{props.activeProject.desc}</p>
      <p className="technology">{props.activeProject.technology}</p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeProject: state.activeProject
  };
}

export default connect(mapStateToProps)(ActiveProject);
