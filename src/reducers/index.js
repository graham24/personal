import { combineReducers } from "redux";
// import btcPriceReducer from "./btcPriceReducer";

const jobsReducer = () => {
    return [
        {
            company: 'Slopeside Technology',
            locations: 'Crested Butte, CO',
            title: 'Web Developer / IT Support Sepcialist',
            startDate: 'July 2017',
            endDate: 'December 2021',
            description: [
                'Successful implementation of WordPress including domain DNS, hosting, custom development, SEO and best practices.',
                'SEO optimization of client websites using best practices.',
                'Developed web applications for clients using JavaScript, PHP and Kendo UI - Telerik.',
                'Build and implement custom plugins for various needs, with updates and code control through GitHub.',
                'High level understanding of Office 365 and G Suite.Accomplishing multiple successful deployments and migrations.',
                'IT support, including network configuration, hardware setup and software implementation.'
            ]
        },
        {
            company: 'Alpine Property Management',
            locations: 'Crested Butte, CO',
            title: 'Building Maintenance Technician',
            startDate: 'December 2016',
            endDate: 'June 2017',
            description: [
                'General property care. Including but not limited to snow shoveling, roof maintenance, small appliance repair, housekeeping.'
            ]
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

            ]
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

const projectsReducer = (projects = [], action) => {
    switch (action.type) {
        case 'FETCH_PROJECTS':
            return action.payload;
        default:
            return projects;
    }
};

const selectedProjectReducer = (selectedProject = null, action) => {
    if (action.type === 'FETCH_PROJECTREADME') {
        return action.payload
    }
    return selectedProject
}

export default combineReducers({
    jobs: jobsReducer,
    selectedJob: selectedJobReducer,
    btcPrice: btcPriceReducer,
    projects: projectsReducer,
    selectedProject: selectedProjectReducer
})