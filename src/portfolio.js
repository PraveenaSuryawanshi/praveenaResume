
const settings = {
  isSplash: true, 
};

//SEO Related settings
const seo = {
  title: "Praveena's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Praveena  Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Praveena Suryawanshi",
  logo_name: "Praveena",
  // nickname: "Tabu",
  subTitle:
    "Meticulous web developer with over 3+ years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach.Proficient in HTML, CSS, jQuery, JavaScript and React",
  resumeLink:
    "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/PraveenaSuryawanshi",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/praveena-suryawanshi-2b0332129",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5", 
  },
  {
    name: "Gmail",
    link: "mailto:praveena.ps7@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836",
  },

  {
    name: "Facebook",
    link: "https://www.facebook.com/praveena.ps.10",
    fontAwesomeIcon: "fa-facebook-f", 
    backgroundColor: "#1877F2", 
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/praveena_dabu/",
    fontAwesomeIcon: "fa-instagram", 
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    
    {
      title: "Front End Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Bringing mock-ups to life using HTML, CSS, JavaScript.",
        "⚡ Collaborating closely with the team during all phases of delivery.",
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Implementing development principles to build stable software.",
        "⚡ Building websites and apps that are responsive and usable.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        }
      ],
    },
   
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "",
    // },
   
  ],
};

const degrees = {
  degrees: [
    {
      title: "AMC Engineering College,Bengaluru",
      subtitle: "MCA",
      // logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2017",
      // descriptions: [
      //   // "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      //   // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      //   // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      // ],
    },
  ],
};


// Experience Page
const experience = {
  title: "Education & Experience",
  subtitle: "Work and Internship",
  
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Front end developer",
          company: "Testsigma Software Technologies",
          company_url: "https://testsigma.com/",
          logo_path: "testsigma.png",
          duration: "April 2020 - PRESENT",
          location: "Bengaluru, Karnataka",
          description:
            "I am working on Creating new web pages and buliding automation tool. The projects involve Responsivness of web pages and powerful open source test automation platform that works out of the box and lets everyone automate tests for web apps, mobile apps and APIs in minutes. ",
          color: "#0879bf",
        },
        {
          title: "UI Developer",
          company: "Logixtic Technologies",
          company_url: "http://baniyaworks.com/",
          logo_path: "logixstic.png",
          duration: "Aug - 2018 To June - 2019",
          location: "Bengaluru, Karnataka",
          description:
            "I have created static web pages with responsiveness in nature",
          color: "#9b1578",
        },
        {
          title: "UI Developer",
          company: "Advity Infomedia",
          company_url: "https://www.advity.in/",
          logo_path: "advity.webp",
          duration: "June 2018 - Dec 2017",
          location: "Bengaluru, Karnataka",
          description:
            "i have worked here as junior web developer",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern",
          company: "Proline",
          company_url: "",
          logo_path: "prolinelogo.png",
          duration: "Feb-2017 -  June 2017",
          location: "Bengaluru, Karnataka",
          description:
            "i have worked as intership.",
          color: "#ee3c26",
        },
     
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of variety of latest technology tools. My best experience is to create React projects and deploy them to web servers.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you for Developing static and dyanamic web pages.",
  },
 
  addressSection: {
    title: "Address",
    subtitle:
      "Ashoka Residency, 6th Main Road, Bayarappa Layout, Suddaguntapalya, C V Raman Nagar, Bengaluru, Karnataka",
  
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7406077690",
  },
  email: {
    title : "Email Address",
    subtitle :"praveena.ps7@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
