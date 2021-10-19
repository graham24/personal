import React from "react";
import { connect } from "react-redux";

const JobDetail = ({ selectedJob }) => {
    if (!selectedJob) {
        return <div className="jobDetails"></div>;
    }
    var duties = '';
    if (selectedJob.description) {
        duties = selectedJob.description.map(function (d, idx) {
            return (<li key={idx}>{d}</li>)
        })
    }

    return (
        <div className="jobDetails">
            <h3>Job Duties</h3>
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