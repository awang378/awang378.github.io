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
      "⚡ I'm a 4th year BS/MS CS major at Georgia Tech interning at Capital One this summer 🏦!"
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
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
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
      logo: require("./assets/images/gt.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2022 - December 2022",
      desc: "Specialization: Machine Learning"
    },
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gt.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - December 2021",
      desc: "Threads: Intelligence & Information Internetworks"
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
      role: "Graduate Teaching Assistant",
      company: "Georgia Tech CoC",
      companylogo: require("./assets/images/gtcomputing.jpeg"),
      date: "January 2022 - Present",
      desc: "GTA for CX 4242/CSE 6242 Data & Visual Analytics",
      descBullets: []
    },
    {
      role: "Software Engineer Intern",
      company: "Capital One",
      companylogo: require("./assets/images/c1.png"),
      date: "June 2021 - August 2021",
      desc:
        "Worked on Spark card decline prediction for Small Business Card within Card Tech.",
      descBullets: []
    },
    {
      role: "Undergraduate Research Assistant",
      company: "CLAWS",
      companylogo: require("./assets/images/claws.png"),
      date: "January 2021 - May 2021",
      desc:
        "Prototyped a recommender systems benchmark platform for the Computational Data Lab for the Web and Society.",
      descBullets: []
    },
    {
      role: "Software Developer",
      company: "Bits of Good",
      companylogo: require("./assets/images/bog.png"),
      date: "August 2020 – Present",
      desc:
        "Building the backend of an app for Umi Feeds, a food rescue non-profit, using the MERN stack.",
      descBullets: []
    },
    {
      role: "Software Engineer Intern",
      company: "StudentSide",
      companylogo: require("./assets/images/studentside.jpg"),
      date: "June 2020 - August 2020",
      desc:
        "Created MVP backend for a website to connect high school students to college student mentors using Express, PostgreSQL, and AWS.",
      descBullets: []
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
      image: require("./assets/images/hacklytics.png"),
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
      image: require("./assets/images/estadium.png"),
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
      image: require("./assets/images/vis.png"),
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

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "",
      subtitle: "",
      image: require("./assets/images/gt.png"),
      footerLink: [
        {
          name: "",
          url: ""
        },
        {
          name: "",
          url: ""
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
      url: "",
      title: "",
      description: ""
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
