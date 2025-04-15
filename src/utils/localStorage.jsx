const employees = [
  {
    id: 1,
    firstName: "Ishaan",
    email: "employee1@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Update database schema",
        taskDescription: "Revise the current schema to support the new billing module and run migration scripts for consistency.",
        taskDate: "2025-04-15",
        taskCategory: "Database",
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        priority: "High"
      },
      {
        taskTitle: "UI bug fixes",
        taskDescription: "Resolve layout inconsistencies and ensure mobile responsiveness across the dashboard interface.",
        taskDate: "2025-04-16",
        taskCategory: "Frontend",
        active: true,
        newTask: false,
        completion: false,
        failed: false,
        priority: "Medium"
      },
      {
        taskTitle: "Deploy staging build",
        taskDescription: "Deploy the latest changes to the staging server and verify integration endpoints.",
        taskDate: "2025-04-17",
        taskCategory: "DevOps",
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        priority: "Low"
      }
    ],
    taskNumbers: { active: 2, newTask: 1, completion: 1, failed: 0 }
  },
  {
    id: 2,
    firstName: "Meera",
    email: "employee2@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Customer onboarding",
        taskDescription: "Guide new clients through the onboarding steps and gather early feedback.",
        taskDate: "2025-04-12",
        taskCategory: "Support",
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        priority: "High"
      },
      {
        taskTitle: "Brand guidelines update",
        taskDescription: "Revamp branding elements and distribute updated documents to internal teams.",
        taskDate: "2025-04-13",
        taskCategory: "Design",
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        priority: "Medium"
      },
      {
        taskTitle: "Quarterly survey design",
        taskDescription: "Draft and finalize a customer survey to gather insights for Q2.",
        taskDate: "2025-04-14",
        taskCategory: "Research",
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        priority: "Medium"
      },
      {
        taskTitle: "Team goal setting",
        taskDescription: "Host a meeting to establish team objectives and KPIs for the upcoming quarter.",
        taskDate: "2025-04-15",
        taskCategory: "HR",
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        priority: "Low"
      }
    ],
    taskNumbers: { active: 2, newTask: 2, completion: 2, failed: 0 }
  },
  {
    id: 3,
    firstName: "Dev",
    email: "employee3@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Security audit",
        taskDescription: "Conduct an internal audit for application vulnerabilities and prepare a report.",
        taskDate: "2025-04-10",
        taskCategory: "Security",
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        priority: "Low"
      },
      {
        taskTitle: "Docker optimization",
        taskDescription: "Improve container build time and reduce image size for production deployment.",
        taskDate: "2025-04-11",
        taskCategory: "DevOps",
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        priority: "High"
      },
      {
        taskTitle: "Legacy cleanup",
        taskDescription: "Remove deprecated modules and outdated files from the codebase.",
        taskDate: "2025-04-12",
        taskCategory: "Maintenance",
        active: false,
        newTask: false,
        completion: false,
        failed: true,
        priority: "Medium"
      },
      {
        taskTitle: "Review dependencies",
        taskDescription: "Check for outdated npm packages and assess their compatibility with the current app.",
        taskDate: "2025-04-13",
        taskCategory: "Development",
        active: true,
        newTask: false,
        completion: false,
        failed: false,
        priority: "High"
      },
      {
        taskTitle: "Internal sync call",
        taskDescription: "Conduct weekly sync to update the engineering team on backlog and blockers.",
        taskDate: "2025-04-14",
        taskCategory: "Communication",
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        priority: "Low"
      }
    ],
    taskNumbers: { active: 2, newTask: 1, completion: 2, failed: 1 }
  },
  {
    id: 4,
    firstName: "Anaya",
    email: "employee4@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Redesign landing page",
        taskDescription: "Create a more modern, responsive layout with updated branding elements.",
        taskDate: "2025-04-12",
        taskCategory: "Design",
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        priority: "High"
      },
      {
        taskTitle: "User feedback synthesis",
        taskDescription: "Summarize feedback trends from recent usability tests for upcoming iterations.",
        taskDate: "2025-04-14",
        taskCategory: "UX",
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        priority: "Medium"
      },
      {
        taskTitle: "Partner call",
        taskDescription: "Discuss co-marketing strategies with partners and define next steps.",
        taskDate: "2025-04-15",
        taskCategory: "Business",
        active: true,
        newTask: false,
        completion: false,
        failed: false,
        priority: "Low"
      },
      {
        taskTitle: "Component library audit",
        taskDescription: "Ensure UI components follow the updated guidelines and are documented.",
        taskDate: "2025-04-16",
        taskCategory: "UI",
        active: false,
        newTask: true,
        completion: false,
        failed: false,
        priority: "Medium"
      },
      {
        taskTitle: "Header bug resolution",
        taskDescription: "Fix overlapping elements in mobile view of the header menu.",
        taskDate: "2025-04-17",
        taskCategory: "Bug Fix",
        active: true,
        newTask: false,
        completion: false,
        failed: false,
        priority: "High"
      },
      {
        taskTitle: "Doc updates",
        taskDescription: "Add recent API changes and authentication flow to the technical documentation.",
        taskDate: "2025-04-18",
        taskCategory: "Documentation",
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        priority: "Low"
      }
    ],
    taskNumbers: { active: 3, newTask: 2, completion: 2, failed: 0 }
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Performance testing",
        taskDescription: "Run load tests on staging to check app performance under stress conditions.",
        taskDate: "2025-04-10",
        taskCategory: "Testing",
        active: true,
        newTask: false,
        completion: false,
        failed: false,
        priority: "High"
      },
      {
        taskTitle: "Push new article",
        taskDescription: "Publish the latest product release blog and ensure formatting standards.",
        taskDate: "2025-04-11",
        taskCategory: "Content",
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        priority: "Medium"
      },
      {
        taskTitle: "Strategy roadmap",
        taskDescription: "Work with stakeholders to define the roadmap for the next product milestone.",
        taskDate: "2025-04-12",
        taskCategory: "Planning",
        active: false,
        newTask: true,
        completion: false,
        failed: false,
        priority: "Medium"
      },
      {
        taskTitle: "Create demo reel",
        taskDescription: "Prepare a polished video demo for the investor pitch with sound and effects.",
        taskDate: "2025-04-13",
        taskCategory: "Media",
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        priority: "Low"
      },
      {
        taskTitle: "Analytics insights",
        taskDescription: "Summarize key user trends and bounce rates for March analytics.",
        taskDate: "2025-04-14",
        taskCategory: "Data",
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        priority: "Low"
      },
      {
        taskTitle: "Fix broken links",
        taskDescription: "Resolve 404s found on sitemap scan and update redirect logic if needed.",
        taskDate: "2025-04-15",
        taskCategory: "Bug Fix",
        active: true,
        newTask: false,
        completion: false,
        failed: false,
        priority: "High"
      },
      {
        taskTitle: "Survey email setup",
        taskDescription: "Automate emails for the post-purchase survey with dynamic content.",
        taskDate: "2025-04-16",
        taskCategory: "Automation",
        active: false,
        newTask: false,
        completion: false,
        failed: true,
        priority: "Medium"
      }
    ],
    taskNumbers: { active: 3, newTask: 2, completion: 2, failed: 1 }
  }
];

const admin = [
  {
    id: 100,
    firstName: "Kiran",
    email: "admin@example.com",
    password: "1234"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
