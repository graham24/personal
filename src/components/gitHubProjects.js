import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../actions";
import { fetchProjectREADME } from "../actions";

import ProjectDetail from "./gitHubProjectDetail";

class projectList extends React.Component {
    state = {
        activeItem: null,
    }

    componentDidMount() {
        this.props.fetchProjects();
    }
    componentDidUpdate() {
        var projects = this.props.projects;
       // this.props.fetchProjectREADME(projects[0].name, projects[0].default_branch, projects[0].id)
    }
    selectProject(project) {
        this.setState({ activeItem: project.id });
        this.props.fetchProjectREADME(project.name, project.default_branch, project.id);
    }
    renderList() {
        const { activeItem } = this.state;

        return this.props.projects.map((project) => {
            return (
                <div key={project.id} onClick={() => this.selectProject(project)} className={"mb-4 hover:bg-gray-50 hover:bg-opacity-5 rounded-md hover:cursor-pointer" + (project.id === activeItem ? ' bg-gray-50 bg-opacity-5' : '')}>
                    <div className="md:grid md:grid-cols-third p-4">
                        <div className="single-project cursor-pointer pt-4 md:p-4">
                            <div className="project-name"><h3>{project.name}</h3></div>
                            <div className="description">{project.description}</div>
                            <div className=""><a href={project.html_url} target="_blank">{project.html_url}</a></div>
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