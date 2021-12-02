import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../actions";
import { fetchProjectREADME } from "../actions";

import ProjectDetail from "./gitHubProjectDetail";

class projectList extends React.Component {
    componentDidMount() {
        this.props.fetchProjects();
    }
    componentDidUpdate() {
        var projects = this.props.projects;
        this.props.fetchProjectREADME(projects[0].name, projects[0].default_branch, projects[0].id)
    }
    renderList() {
        return this.props.projects.map((project) => {
            return (
                <div key={project.id} onClick={() => this.props.fetchProjectREADME(project.name, project.default_branch, project.id)} className="hover:bg-gray-50 hover:bg-opacity-5 rounded-md">
                    <div className="md:grid md:grid-cols-third p-4">
                        <div className="single-project cursor-pointer pt-4 md:p-4">
                            <div className="project-name"><h3>{project.name}</h3></div>
                            <div className="description">{project.description}</div>
                        </div>
                        <div className="pt-4">
                            <ProjectDetail projectid={project.id} />
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="p-4 flex-grow">
                <h2>Projects</h2>
                <div className="h-auto flex-grow">
                    {this.renderList()}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { projects: state.projects }
};

export default connect(mapStateToProps, { fetchProjects, fetchProjectREADME })(projectList);