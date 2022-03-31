import React from "react";
import { connect } from "react-redux";
import { fetchPersonalProjects } from "../actions";
import { fetchProjectREADME } from "../actions";
import { Helmet } from "react-helmet";

import ProjectDetail from "./gitHubProjectDetail";

class personalProjectList extends React.Component {
  state = {
    activeProject: null,
  };

  componentDidMount() {
    this.props.fetchPersonalProjects().then((value) => {
      var defaultPersonalProject = this.props.personalProjects[0];
      this.setState({ activeProject: defaultPersonalProject.id });
      this.props.fetchProjectREADME(
        defaultPersonalProject.owner.login,
        defaultPersonalProject.name,
        defaultPersonalProject.default_branch,
        defaultPersonalProject.id
      );
    });
  }

  selectProject(personalProject) {
    this.setState({ activeProject: personalProject.id });
    this.props.fetchProjectREADME(
      personalProject.owner.login,
      personalProject.name,
      personalProject.default_branch,
      personalProject.id
    );
  }
  renderList() {
    const { activeProject } = this.state;    

    return this.props.personalProjects
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .map((personalProject) => {
        return this.generateMarkup(personalProject);
      });
  }

  generateMarkup(personalProject) {
    const { activeProject } = this.state;
    return (
      <div
        key={personalProject.id}
        onClick={() => this.selectProject(personalProject)}
        className={
          "mb-4 hover:bg-gray-50 hover:bg-opacity-5 rounded-md hover:cursor-pointer" +
          (personalProject.id === activeProject
            ? " bg-gray-50 bg-opacity-5"
            : "")
        }
      >
        <div className="md:grid md:grid-cols-third p-4">
          <div className="single-project cursor-pointer pt-4 md:p-4">
            <div className="project-name">
              <h3>{personalProject.name}</h3>
            </div>
            <div className="description">
              <h4>{personalProject.description}</h4>
            </div>
            <div className="project-url">
              <a
                href={personalProject.html_url}
                className="text-yellow-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <h4>{personalProject.html_url}</h4>
              </a>
            </div>
          </div>
          <div className="pt-4">
            <ProjectDetail projectid={personalProject.id} />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="w-full">
        <Helmet>
          <title>Personal Projects - Graham Holland</title>
        </Helmet>
        <div className="p-4 flex-grow">
          <h1>Personal Projects</h1>
          <div className="h-auto flex-grow">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { personalProjects: state.personalProjects };
};

export default connect(mapStateToProps, {
  fetchPersonalProjects,
  fetchProjectREADME,
})(personalProjectList);
