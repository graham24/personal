import React from "react";
import { connect } from "react-redux";

const ProjectDetail = ({ selectedProject }) => {
    if (!selectedProject) {
        return <div></div>;
    }

    function displayHTML() {
        return { __html: selectedProject };
    }

    return <div dangerouslySetInnerHTML={displayHTML()} />

}

const mapStateToProps = (state) => {
    return { selectedProject: state.selectedProject }
}

export default connect(mapStateToProps)(ProjectDetail);