import React from "react";
import { connect } from "react-redux";

const JobDetail = (props) => {

    if (!props.selectedJob) {
        return <div className="job-details"></div>;
    }
    var duties = '';

    if (props.selectedJob.description) {

        if (props.selectedJob.company == props.company) {
            duties = props.selectedJob.description.map(function (d, idx) {
                return (<li key={idx}>{d}</li>)
            })
        }
    } else {
        return '';
    }

    return (
        console.log(),
        <div className="job-details">
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