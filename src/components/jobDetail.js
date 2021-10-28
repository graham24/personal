import React from "react";
import { connect } from "react-redux";

const JobDetail = ({ selectedJob }) => {
    if (!selectedJob) {
        return <div className="job-details"></div>;
    }
    var duties = '';
    if (selectedJob.description) {
        duties = selectedJob.description.map(function (d, idx) {
            return (<li key={idx}>{d}</li>)
        })
    }

    return (
        console.log(),
        <div className="job-details">
            <h4>Job Duties</h4>
            <ul>
                {duties}
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => {
    return { selectedJob: state.selectedJob }
};

export default connect(mapStateToProps)(JobDetail);