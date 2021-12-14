import React from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet';

import { fetchWorkProjects } from "../actions";
import { fetchProjectREADME } from "../actions";

import ProjectDetail from "./gitHubProjectDetail";

class workProjectList extends React.Component {
    state = {
        activeProject: null,
    }

    componentDidMount() {
        this.props.fetchWorkProjects();
    }
    selectProject(workProject) {
        this.setState({ activeProject: workProject.id });
        this.props.fetchProjectREADME(workProject.owner.login, workProject.name, workProject.default_branch, workProject.id);
    }
    renderList() {
        const { activeProject } = this.state;

        return this.props.workProjects.map((workProject) => {
            return (
                <div key={workProject.id} onClick={() => this.selectProject(workProject)} className={"mb-4 hover:bg-gray-50 hover:bg-opacity-5 rounded-md hover:cursor-pointer" + (workProject.id === activeProject ? ' bg-gray-50 bg-opacity-5' : '')}>
                    <div className="md:grid md:grid-cols-third p-4">
                        <div className="single-project cursor-pointer pt-4 md:p-4">
                            <div className="project-name"><h3>{workProject.name}</h3></div>
                            <div className="description"><h4>{workProject.description}</h4></div>
                            <div className="project-url"><a href={workProject.html_url} className="text-yellow-600 hover:underline" target="_blank" rel="noreferrer"><h4>{workProject.html_url}</h4></a></div>
                        </div>
                        <div className="pt-4">
                            <ProjectDetail projectid={workProject.id} />
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="w-full">
                <Helmet>
                    <title>Work Projects - Graham Holland</title>
                </Helmet>
                <div className="p-4 flex-grow">
                    <h1>Work Projects</h1>
                    <div className="h-auto flex-grow">
                        {this.renderList()}
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { workProjects: state.workProjects }
};

export default connect(mapStateToProps, { fetchWorkProjects, fetchProjectREADME })(workProjectList);