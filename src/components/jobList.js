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
                <div key={job.company} className="hover:bg-gray-50 hover:bg-opacity-5 rounded-md hover:cursor-pointer">
                    <div className="md:grid md:grid-cols-third p-4">
                        <div className="job cursor-pointer pt-4 md:p-4" onClick={() => this.props.selectJob(job)}>
                            <span className="company-name">{job.company}</span><br />
                            <span className="job-title">{job.title}</span><br />
                            <span className="job-dates">{job.startDate} - {job.endDate}</span><br />
                        </div>
                        <div className="pt-4">
                            <JobDetail company={job.company} />
                        </div>
                    </div>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="p-4 flex-grow">
                <h2>Work Experience</h2>
                <div className="h-auto flex-grow">
                    {this.renderList()}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { jobs: state.jobs }
};

export default connect(mapStateToProps, { selectJob })(jobList);