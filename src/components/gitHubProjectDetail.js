import React from "react";
import { connect } from "react-redux";

const ProjectDetail = (props) => {
    if (!props.selectedProject) {
        return <div></div>;
    } else {

        function displayHTML() {
            return { __html: props.selectedProject.readme };
        }

        if (props.projectid === props.selectedProject.id) {
            return <div className="project-details" dangerouslySetInnerHTML={displayHTML()} />
        } else {
            return '';
        }
    }
}

const mapStateToProps = (state) => {
    return { selectedProject: state.selectedProject }
}

export default connect(mapStateToProps)(ProjectDetail);