import React, { Component } from 'react';
import { connect } from 'react-redux';

import Project from '../containers/project';

class ProjectList extends Component {
  renderList() {
    return this.props.projects.map((project) => {
      return (
        <Project key={project.name} project={project} />
      );
    });
  }

  render() {
    return (
      <div> Projects: &nbsp;
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps)(ProjectList);
