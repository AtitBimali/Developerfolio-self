/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Atit Bimali",
  title: "Hi all, I'm Atit",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications and writing Scripts with Python,HTML,CSS,Javascript and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DV-bhL0wNNMPG9pGWoEooxl3qFMxfHKa/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AtitBimali",
  linkedin: "https://www.linkedin.com/in/atit-b-b237b4179/",
  gmail: "atitbimali10@gmail.com",
  facebook: "https://www.facebook.com/atit.bimali",
  medium: "https://medium.com/@atitbimali10",
  stackoverflow: "https://medium.com/@atitbimali10",
  instagram: "https://www.instagram.com/atitbimali/",
  twitter: "https://twitter.com/BimaliAtit",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive and fast web and applications"
    ),
    emoji("⚡ Write Python scripts for macros and bots to automate boring stuffs"),
    emoji(
      "⚡ Deploying scripts and web apps on cloud platforms like Heroku and Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
   
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tribhuvan University",
      logo: require("./assets/images/newsummit.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "March 2021 - April 2025",
      desc: "New Summit College",
      
    },
    {
      schoolName: "Arniko College",
      logo: require("./assets/images/arniko.jpg"),
      subHeader: "+2 Science",
      duration: "August 2018 - December 2020",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "45%"
    },
    {
      Stack: "Programming",
      progressPercentage: "35%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Fiverr",
      companylogo: require("./assets/images/fiverr.png"),
      date: "June 2020 – Present",
    },
    {
      role: "Python Developer",
      company: "Upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "May 2020 – Present",
      
    },
    
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
  title: "My Projects",
  subtitle: "SOME OF MY SOLO PROJECTS",
  projects: [
    
    {
      image: require("./assets/images/freebiehub.jpg"),
      projectName: "Web App",
      projectDesc: "Web Application Using django,bootstrap,html,css and some Javascript",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://freebiehub.pythonanywhere.com"
        }
      ]
    },
    {
      image: require("./assets/images/twitter_bot.jpg"),
      projectName: "Twitter Bot",
      projectDesc: "Twitter Bot made using python and tweepy that tweets, replies, retweets on mentions.",
      footerLink: [
        {
          name: "Visit Bot's Account",
          url: "https://twitter.com/tweepy_bot69/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mic.png"),
      projectName: "Speech to Text",
      projectDesc: "A web application that converts audio input to text.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://stegena.github.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/books.png"),
      projectName: "Big Books",
      projectDesc: "A static webpage that contains books in pdf format.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bigbooksnp.me/"
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
    "Achievements, Certifications, Award Letters",

  achievementsCards: [
    {
      title: "Python Basics Certificate",
      subtitle:
        "Python Basics problem solving certificate by HackerRank",
      image: require("./assets/images/PythonB.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NEACqvAM6N1xJinbYLXi6rrBzAJ8uHIX/view?usp=sharing"
        },
      
      ]
    },
    {
      title: "Python Master Certificate",
      subtitle:
        "Python Master Certifcate on completion of Become a Python Master by Programiz",
      image: require("./assets/images/PythonM.jpg"),
      footerLink: [
        {
          name: "Python Master",
          url: "https://drive.google.com/file/d/1cVMYbcWuPF6ueIjxhc8c-WihDmS7j6SJ/view?usp=sharing"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+9779824393773",
  email_address: "atitbimali10@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "tweepy_bot69", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
