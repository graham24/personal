import React from "react";
import { connect } from 'react-redux';
import { selectJob } from "../actions";
import JobDetail from './jobDetail';

class jobList extends React.Component {
    componentDidMount() {
        var jobs = this.props.jobs;
        this.props.selectJob(jobs[0]);
    }

    renderList() {
        return this.props.jobs.map((job) => {
            return (
                <div className="job" key={job.company} onClick={() => this.props.selectJob(job)}>
                    <span className="company-name">{job.company}</span><br />
                    <span className="job-title">{job.title}</span><br />
                    <span className="job-dates">{job.startDate} - {job.endDate}</span><br />
                    <hr />
                    <JobDetail />
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