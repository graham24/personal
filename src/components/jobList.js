import React from "react";
import { connect } from 'react-redux';
import { selectJob } from "../actions";

class jobList extends React.Component {
    renderList() {
        return this.props.jobs.map((job) => {
            return (
                <div key={job.company}>
                    {job.company} - {job.startDate} - {job.endDate}<br />
                    {job.title}
                    <button onClick={() => this.props.selectJob(job)}>
                        View
                    </button>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="jobList">
                <h2>Work Experience</h2>
                {this.renderList()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { jobs: state.jobs }
};

export default connect(mapStateToProps, { selectJob })(jobList);