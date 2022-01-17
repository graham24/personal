import { combineReducers } from "redux";
// import btcPriceReducer from "./btcPriceReducer";

const jobsReducer = () => {
    return [
        {
            company: 'Slopeside Technology',
            locations: 'Crested Butte, CO',
            title: 'Web Developer / IT Support Specialist',
            startDate: 'July 2017',
            endDate: 'Present',
            description: [
                'Successful implementation of WordPress including domain DNS, hosting, custom development, SEO and best practices.',
                'SEO optimization of client websites using best practices.',
                'Developed web applications for clients using JavaScript, PHP and Kendo UI - Telerik.',
                'Build and implement custom plugins for various needs, with updates and code control through GitHub.',
                'High level understanding of Office 365 and G Suite.Accomplishing multiple successful deployments and migrations.',
                'IT support, including network configuration, hardware setup and software implementation.'
            ],
            url: 'https://slopesidetechnology.com'
        },
        {
            company: 'Alpine Property Management',
            locations: 'Crested Butte, CO',
            title: 'Building Maintenance Technician',
            startDate: 'December 2016',
            endDate: 'June 2017',
            description: [
                'General property care. Including but not limited to snow shoveling, roof maintenance, small appliance repair, housekeeping.'
            ],
            url: 'https://www.alpinepropertycrestedbutte.com/'
        },
        {
            company: 'Dakine Inc.',
            locations: 'Hood River, OR',
            title: 'International Sales Support',
            startDate: 'August 2015',
            endDate: 'November 2016',
            description: [
                'Initial contact for all day to day needs for distributor and international accounts.',
                'Customer and Sales order management/maintenance in Microsoft Dynamics AX.',
                'Excel order form creation and management.',
                'Advanced excel report generation and implementation using VBA Code in Excel.',
                'Work with other departments to ensure all information distributed to customers.'

            ],
            url: 'https://www.dakine.com/'
        }
    ];
};

const selectedJobReducer = (selectedJob = null, action) => {
    if (action.type === 'JOB_SELECTED') {
        return action.payload
    }

    return selectedJob
}

const btcPriceReducer = (btcprice = null, action) => {
    switch (action.type) {
        case 'FETCH_PRICE':
            return action.payload;
        default:
            return btcprice;
    }
};

const personalProjectsReducer = (personalProjects = [], action) => {
    switch (action.type) {
        case 'FETCH_PERSONAL_PROJECTS':
            return action.payload;
        default:
            return personalProjects;
    }
};

const workProjectsReducer = (workProjects = [], action) => {
    switch (action.type) {
        case 'FETCH_WORK_PROJECTS':
            return action.payload;
        default:
            return workProjects;
    }
};

const selectedProjectReducer = (selectedProject = [], action) => {
    if (action.type === 'FETCH_PROJECTREADME') {
        return action.payload
    }
    return selectedProject
}

export default combineReducers({
    jobs: jobsReducer,
    selectedJob: selectedJobReducer,
    btcPrice: btcPriceReducer,
    personalProjects: personalProjectsReducer,
    workProjects: workProjectsReducer,
    selectedProject: selectedProjectReducer
})