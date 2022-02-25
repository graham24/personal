import { combineReducers } from "redux";
// import btcPriceReducer from "./btcPriceReducer";

const jobsReducer = () => {
  return [
    {
      company: "Slopeside Technology",
      locations: "Crested Butte, CO",
      title: "Full Stack Developer",
      startDate: "July 2017",
      endDate: "Present",
      description: [
        "Build and Maintain many Full Stack Projects.",
        "Build front end interfaces using JavaScript, HTML, and CSS.",
        "Work with frameworks to produce interactive and informative front ends.",
        "Built backend REST APIs to support and provide data for applications.",
        "Developed web applications for clients using JavaScript, PHP, and Kendo UI - Telerik. ",
        "Use Git for version control for all projects.",
        "Successful implementation of new websites including domain DNS, hosting, custom development, SEO, and best practices.",
        "SEO optimization of client websites using best practices.",
        "Build and implement custom plugins for various needs, with updates and code control through GitHub.",
        "Experience using tools such as Docker, GitHub, phpMyAdmin",
      ],
      url: "https://slopesidetechnology.com",
    },
    // {
    //   company: "Alpine Property Management",
    //   locations: "Crested Butte, CO",
    //   title: "Building Maintenance Technician",
    //   startDate: "December 2016",
    //   endDate: "June 2017",
    //   description: [
    //     "General property care. Including but not limited to snow shoveling, roof maintenance, small appliance repair, housekeeping.",
    //   ],
    //   url: "https://www.alpinepropertycrestedbutte.com/",
    // },
    {
      company: "Dakine Inc.",
      locations: "Hood River, OR",
      title: "International Sales Support",
      startDate: "August 2015",
      endDate: "November 2016",
      description: [
        "Initial contact for all day to day needs for distributor and international accounts.",
        "Customer and Sales order management/maintenance in Microsoft Dynamics AX.",
        "Excel order form creation and management.",
        "Advanced excel report generation and implementation using VBA Code in Excel.",
        "Work with other departments to ensure all information distributed to customers.",
      ],
      url: "https://www.dakine.com/",
    },
  ];
};

const selectedJobReducer = (selectedJob = null, action) => {
  if (action.type === "JOB_SELECTED") {
    return action.payload;
  }

  return selectedJob;
};

const btcPriceReducer = (btcprice = null, action) => {
  switch (action.type) {
    case "FETCH_PRICE":
      return action.payload;
    default:
      return btcprice;
  }
};

const personalProjectsReducer = (personalProjects = [], action) => {
  switch (action.type) {
    case "FETCH_PERSONAL_PROJECTS":
      return action.payload;
    default:
      return personalProjects;
  }
};

const workProjectsReducer = (workProjects = [], action) => {
  switch (action.type) {
    case "FETCH_WORK_PROJECTS":
      return action.payload;
    default:
      return workProjects;
  }
};

const selectedProjectReducer = (selectedProject = [], action) => {
  if (action.type === "FETCH_PROJECTREADME") {
    return action.payload;
  }
  return selectedProject;
};

export default combineReducers({
  jobs: jobsReducer,
  selectedJob: selectedJobReducer,
  btcPrice: btcPriceReducer,
  personalProjects: personalProjectsReducer,
  workProjects: workProjectsReducer,
  selectedProject: selectedProjectReducer,
});
