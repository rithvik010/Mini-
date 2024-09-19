const jobData = {
  internships: [
    { title: "Software Intern", company: "Tech Corp", city: "Hyderabad", work_mode: "Remote" },
    { title: "Marketing Intern", company: "Market Solutions", city: "New York", work_mode: "On-Site" },
    { title: "Graphic Design Intern", company: "Creative Labs", city: "Los Angeles", work_mode: "Hybrid" },
    { title: "Business Analyst Intern", company: "BizAnalytics", city: "Chicago", work_mode: "On-Site" },
    { title: "HR Intern", company: "People Partners", city: "Austin", work_mode: "Hybrid" },
    { title: "Finance Intern", company: "WealthManagement", city: "Boston", work_mode: "On-Site" },
    { title: "Product Management Intern", company: "InnoTech", city: "San Francisco", work_mode: "On-Site" },
    { title: "Sales Intern", company: "SellFast", city: "Houston", work_mode: "On-Site" },
    { title: "Operations Intern", company: "EfficientOps", city: "Miami", work_mode: "Hybrid" },
    { title: "Legal Intern", company: "Law Partners", city: "Washington, D.C.", work_mode: "On-Site" },
    { title: "Software Testing Intern", company: "TestLabs", city: "Remote", work_mode: "Remote" },
    { title: "UX/UI Design Intern", company: "DesignStudio", city: "Los Angeles", work_mode: "Hybrid" },
    { title: "Data Science Intern", company: "DataCrunch", city: "Chicago", work_mode: "On-Site" },
    { title: "Mechanical Engineering Intern", company: "AutoTech", city: "Detroit", work_mode: "On-Site" },
    { title: "Civil Engineering Intern", company: "ConstructIT", city: "Atlanta", work_mode: "On-Site" },
    { title: "Research Intern", company: "BioLabs", city: "Philadelphia", work_mode: "On-Site" },
    { title: "Public Relations Intern", company: "PRPros", city: "San Diego", work_mode: "On-Site" },
    { title: "Social Media Intern", company: "InfluenceHub", city: "New York", work_mode: "Hybrid" },
    { title: "Video Editing Intern", company: "FilmWorks", city: "Los Angeles", work_mode: "Hybrid" },
    { title: "Environmental Science Intern", company: "EcoSolutions", city: "Portland", work_mode: "On-Site" }
  ],
  fulltime: [
    { title: "Software Engineer", company: "Tech Corp", city: "San Francisco", work_mode: "On-Site" },
    { title: "Data Scientist", company: "Data Inc.", city: "Chicago", work_mode: "On-Site" },
    { title: "Project Manager", company: "BuildIT", city: "New York", work_mode: "Hybrid" },
    { title: "Cybersecurity Specialist", company: "SecureNet", city: "Washington, D.C.", work_mode: "On-Site" },
    { title: "Accountant", company: "Finance Group", city: "Dallas", work_mode: "Hybrid" },
    { title: "Mechanical Engineer", company: "AutoTech", city: "Detroit", work_mode: "On-Site" },
    { title: "Network Engineer", company: "NetSystems", city: "San Jose", work_mode: "On-Site" },
    { title: "Electrical Engineer", company: "PowerWorks", city: "Phoenix", work_mode: "On-Site" },
    { title: "Marketing Manager", company: "BrandBoost", city: "Chicago", work_mode: "Hybrid" },
    { title: "UX Designer", company: "Creative Designs", city: "Los Angeles", work_mode: "On-Site" },
    { title: "Technical Support Specialist", company: "HelpDesk Solutions", city: "Remote", work_mode: "Remote" },
    { title: "Human Resources Manager", company: "PeopleFirst", city: "New York", work_mode: "On-Site" },
    { title: "Business Analyst", company: "Strategic Insights", city: "Seattle", work_mode: "On-Site" },
    { title: "Software Architect", company: "CodeMasters", city: "Austin", work_mode: "Hybrid" },
    { title: "Machine Learning Engineer", company: "AI Innovations", city: "San Francisco", work_mode: "Hybrid" },
    { title: "Full Stack Developer", company: "DevWorks", city: "Miami", work_mode: "On-Site" },
    { title: "DevOps Engineer", company: "CloudOps", city: "Remote", work_mode: "Remote" },
    { title: "Logistics Coordinator", company: "ShipFast", city: "Houston", work_mode: "On-Site" },
    { title: "Quality Assurance Engineer", company: "TestPro", city: "San Diego", work_mode: "On-Site" },
    { title: "Environmental Engineer", company: "EcoWorks", city: "Portland", work_mode: "On-Site" }
  ],
  parttime: [
    { title: "Customer Service Rep", company: "Service Solutions", city: "Remote", work_mode: "Remote" },
    { title: "Barista", company: "Coffee Shop", city: "Seattle", work_mode: "On-Site" },
    { title: "Retail Associate", company: "FashionHub", city: "Los Angeles", work_mode: "On-Site" },
    { title: "Warehouse Assistant", company: "LogiPro", city: "Houston", work_mode: "On-Site" },
    { title: "Event Coordinator", company: "PartyTime", city: "Las Vegas", work_mode: "On-Site" },
    { title: "Tutor", company: "LearnFast", city: "Remote", work_mode: "Remote" },
    { title: "Delivery Driver", company: "FastDelivery", city: "Chicago", work_mode: "On-Site" },
    { title: "Call Center Agent", company: "CallPros", city: "Miami", work_mode: "Remote" },
    { title: "Receptionist", company: "OfficeWorks", city: "San Francisco", work_mode: "Remote" },
    { title: "Fitness Instructor", company: "FitLife", city: "Austin", work_mode: "On-Site" },
    { title: "Pet Sitter", company: "PetCare", city: "Remote", work_mode: "Remote" },
    { title: "Freelance Photographer", company: "PhotoPros", city: "Los Angeles", work_mode: "On-Site" },
    { title: "Admin Assistant", company: "OfficeHelp", city: "New York", work_mode: "Hybrid" },
    { title: "Parking Attendant", company: "ParkSafe", city: "Boston", work_mode: "Remote" },
    { title: "Cashier", company: "SuperMart", city: "Houston", work_mode: "On-Site" },
    { title: "Waiter", company: "FineDine", city: "Chicago", work_mode: "On-Site" },
    { title: "Landscaper", company: "GreenThumb", city: "Phoenix", work_mode: "On-Site" },
    { title: "Security Guard", company: "SecureWatch", city: "Dallas", work_mode: "On-Site" },
    { title: "Librarian Assistant", company: "City Library", city: "Portland", work_mode: "On-Site" },
    { title: "Food Delivery", company: "QuickBites", city: "Remote", work_mode: "Remote" }
  ]
}



function loadJobs(type) {
  // Hide the search filter when loading jobs
  document.getElementById('search-filter').style.display = 'none';

  const jobs = jobData[type] || [];
  const jobContainer = document.getElementById('job-container');
  jobContainer.innerHTML = ''; // Clear existing jobs

  jobs.forEach(job => {
    const jobElement = document.createElement('div');
    jobElement.className = 'card';

    const jobTitle = document.createElement('h2');
    jobTitle.textContent = job.title;

    const jobCompany = document.createElement('p');
    jobCompany.textContent = `Company: ${job.company}`;

    const jobwork = document.createElement('p');
    jobwork.textContent = `WorkType: ${job.work_mode}`;

    const jobLocation = document.createElement('p');
    jobLocation.textContent = `Location: ${job.city}`;

    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply';
    applyButton.className = 'apply-button';
    applyButton.onclick = () => {
      window.location.href = `https://morganstanley.tal.net/vx/lang-en-GB/mobile-0/brand-2/xf-8f354508211d/candidate/so/pm/1/pl/1/opp/17980-2025-Technology-Spring-Analyst-Program-Mumbai-Bangalore/en-GB`;
  };


    jobElement.appendChild(jobTitle);
    jobElement.appendChild(jobCompany);
    jobElement.appendChild(jobwork);
    jobElement.appendChild(jobLocation);
    jobElement.appendChild(applyButton);

    jobContainer.appendChild(jobElement);
  });
}

function loadFilteredJobs(type, workType) {
  // Hide the search filter when loading filtered jobs
  document.getElementById('search-filter').style.display = 'none';

  const jobs = jobData[type].filter(job => job.work_mode === workType);
  const jobContainer = document.getElementById('job-container');
  jobContainer.innerHTML = ''; // Clear existing jobs

  jobs.forEach(job => {
    const jobElement = document.createElement('div');
    jobElement.className = 'card';

    const jobTitle = document.createElement('h2');
    jobTitle.textContent = job.title;

    const jobCompany = document.createElement('p');
    jobCompany.textContent = `Company: ${job.company}`;

    const jobWork = document.createElement('p');
    jobWork.textContent = `Work Type: ${job.work_mode}`;

    const jobLocation = document.createElement('p');
    jobLocation.textContent = `Location: ${job.city}`;

    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply';
    applyButton.className = 'apply-button';
    applyButton.onclick = () => {
      window.location.href = `https://jobs.cisco.com/jobs/ProjectDetail/Software-Engineer-Network-Embedded-Application-Development-New-Grad-India-UHR/1421660`;
    };

    jobElement.appendChild(jobTitle);
    jobElement.appendChild(jobCompany);
    jobElement.appendChild(jobWork);
    jobElement.appendChild(jobLocation);
    jobElement.appendChild(applyButton);
    jobContainer.appendChild(jobElement);
  });
}