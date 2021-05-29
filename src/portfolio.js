// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Andrew Wang",
  title: "Hi, I'm Andrew",
  subTitle: emoji(
    "A computer science student at Georgia Tech 🐝  with interests in full stack web development, data science, and human-computer interaction."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1T1Ey5HhSyTQT1UfF39kx_fKYPpcCoxzR/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/awang378",
  linkedin: "https://www.linkedin.com/in/andrewrwang",
  gmail: "andrewwang.arw@gmail.com",
  instagram: "https://www.instagram.com/wangdrew",
  //medium: "",
  //stackoverflow: "",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  //subTitle: "",
  skills: [
    emoji(
      "⚡ I'm a rising 4th year BS/MS CS major at Georgia Tech interning at Capital One this summer 🏦!"
    ),
    emoji(
      "⚡ Experienced with full stack web development 🌐 with the MERN stack and SQL/NoSQL databases and data science 📊 using Pandas, NumPy, Scikit-Learn, Matplotlib, and Jupyter."
    ),
    emoji(
      "⚡ Currently, I'm looking to gain more experience in software development by learning new technologies 🌱 and working on projects 👨‍💻."
    ),
    emoji(
      "⚡ In my free time, I enjoy watching sports (big Roger Federer 🎾 and Steph Curry 🏀 fan), hanging out with friends 😌, running 🏃, exploring new food places (lowkey boba addiction 🧋), and photography 📸."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SQL databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Markdown",
      fontAwesomeClassname: "fab fa-markdown"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gt1.png").default,
      subHeader: "Master of Science in Computer Science",
      duration: "January 2022 - December 2022",
      desc: "Specialization: Machine Learning",
      descBullets: [
        "Data & Visual Analytics",
        "Machine Learning",
        "Computer Vision"
      ]
    },
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gt.png").default,
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - December 2021",
      desc: "Threads: Intelligence & Information Internetworks",
      descBullets: [
        "Object-Oriented Programming",
        "Intro to Discrete Math",
        "Data Structures & Algorithms",
        "Object-Oriented Design",
        "Design & Analysis of Algorithms",
        "Applied Combinatorics",
        "Computer Organization & Programming",
        "Intro to Artificial Intelligence",
        "Intro to Database Systems",
        "Computer Systems & Networks",
        "Robotics & Perception",
        "Computer Networking",
        "Intro to Information Security",
        "Automata & Complexity",
        "Computing, Society, & Professionalism"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Data Science/ML", //Insert stack or technology you have experience in
      progressPercentage: "45%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Capital One",
      companylogo: require("./assets/images/c1.png").default,
      date: "June 2021 - August 2021",
      desc: "",
      descBullets: []
    },
    {
      role: "Undergraduate Research Assistant",
      company: "CLAWS",
      companylogo: require("./assets/images/claws.png").default,
      date: "January 2021 - May 2021",
      desc: "Computational Data Lab for the Web and Society",
      descBullets: [
        "Created a recommender systems benchmark platform supervised by Dr. Srijan Kumar that evaluates the robustness of RecSys models.",
        "Performed benchmark dataset splits using Scikit-Learn and random deletion attacks using Pandas.",
        "Implemented Python data loader scripts and designed the front facing website with MkDocs inspired by similar ongoing research projects."
      ]
    },
    {
      role: "Software Developer",
      company: "Bits of Good",
      companylogo: require("./assets/images/bog.png").default,
      date: "August 2020 – Present",
      desc: "",
      descBullets: [
        "Currently building the backend API of a mobile app for Umi Feeds, a local Atlanta food rescue non-profit, using TypeScript, Express, Auth0, and MongoDB to manage and process volunteer donations in an Agile environment.",
        "Previously worked on implementing various frontend and backend features for a General Solutions landing page using Next.js."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "StudentSide",
      companylogo: require("./assets/images/studentside.jpg").default,
      date: "June 2020 - August 2020",
      desc: "",
      descBullets: [
        "Part of an edtech startup building an end-to-end service to help simplify the college search process for high school students by connecting them to 500+ college student mentors.",
        "Developed the MVP website’s back end to support client-side requests such as user registration, mentor filtering, and appointment booking using PostgreSQL, Express, and Node.js.",
        "Deployed REST API to AWS Lambda with Serverless and utilized AWS RDS and S3 buckets for data storage."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some cool things I've been a part of",
  projects: [
    {
      image: require("./assets/images/hacklytics.png").default,
      projectName: "Hacklytics 2021",
      projectDesc:
        "As an operations member, I helped plan logistics and scheduling, coordinate the virtual venue and platform, and run Georgia Tech's premier data hackathon.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hacklytics2021.devpost.com/"
        }
      ]
    },
    {
      image: require("./assets/images/estadium.png").default,
      projectName: "Estadium-IoPT",
      projectDesc:
        "As a backend developer, I utilized Laravel and the LAMP stack to create backend API infrastructure to support an Internet of People and Things within Bobby Dodd Stadium.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.vip.gatech.edu/teams/vp3"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/vis.png").default,
      projectName: "Georgia Tech Vis Lab",
      projectDesc:
        "As a student researcher under Dr. John Stasko, I learned common practices used in information visualiztion and explored declarative data vis grammars like Altair and Vega-Lite.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://vis.gatech.edu/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  //subtitle: "",
  number: "",
  email_address: "andrewwang.arw@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
