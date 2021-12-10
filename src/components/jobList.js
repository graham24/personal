import React from "react";
import { connect } from 'react-redux';
import { selectJob } from "../actions";
import JobDetail from './jobDetail';

class jobList extends React.Component {
    state = {
        activeJob: null,
    }

    componentDidMount() {
       // var jobs = this.props.jobs;
      //  this.props.selectJob(jobs[0]);
    }
    clickJob(job) {
        this.setState({ activeJob: job.company });
        this.props.selectJob(job);
    }

    renderList() {
        const { activeJob } = this.state;

        return this.props.jobs.map((job) => {
            return (
                <div key={job.company} onClick={() => this.clickJob(job)} className={"mb-4 hover:bg-gray-50 hover:bg-opacity-5 rounded-md hover:cursor-pointer" + (job.company === activeJob ? ' bg-gray-50 bg-opacity-5' : '')}>
                    <div className="md:grid md:grid-cols-third p-4">
                        <div className="job cursor-pointer pt-4 md:p-4">
                            <div className="company-name"><h3>{job.company}</h3></div>
                            <div className="job-title"><h4>{job.title}</h4></div>
                            <div className="job-dates"><p className="mb-0">{job.startDate} - {job.endDate}</p></div>
                            <div><a className="text-yellow-600 hover:underline" href={job.url} target="_blank" rel="noreferrer" ><h4>{job.url}</h4></a></div>
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