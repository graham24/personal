import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../actions";
import { fetchProjectREADME } from "../actions";

class projectList extends React.Component {
    componentDidMount() {
        const projects = this.props.fetchProjects();
        console.log(projects);
    }
    componentDidUpdate() {
        var projects = this.props.projects;
        this.props.fetchProjectREADME(projects[0].name, projects[0].default_branch)
    }
    renderList() {
        return this.props.projects.map((project) => {
            return (
                <div className="single-project" key={project.id}>
                    <div className="project-name"><h3 onClick={() => this.props.fetchProjectREADME(project.name, project.default_branch)}>{project.name}</h3></div>
                    <div className="description">{project.description}</div>
                </div>
            );
        });
    }

    render() {
        console.log(this.props.projects);
        return (
            <div>{this.renderList()}</div>
        )
    }
};

const mapStateToProps = (state) => {
    return { projects: state.projects }
};

export default connect(mapStateToProps, { fetchProjects, fetchProjectREADME })(projectList);