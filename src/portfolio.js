/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jashwanth Bamidi",
  title: "Hi, I'm Jashwanth",
  subTitle: emoji(
    "Electrical Engineering student at UIUC, building RISC-V CPU cores, EV telemetry and BMS systems, and hardware-heavy projects across FPGA, PCB design, and embedded systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mWGwuUnqnXNeqSfjKYL51RNW4UByGS_r/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jbamidi",
  linkedin: "https://www.linkedin.com/in/jashwanthbamidi",
  gmail: "jassubamidi24@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Electrical engineering student focused on digital design, FPGA/CPU architecture, embedded systems, and EV power electronics.",
  skills: [
    emoji(
      "⚡ Design and implement RISC-V CPU cores in Verilog/SystemVerilog, moving from single-cycle designs toward pipelined architectures."
    ),
    emoji(
      "⚡ Build and debug PCB-based systems for EV telemetry, motor encoders, Joule meters, buck converters, and BMS hardware."
    ),
    emoji(
      "⚡ Develop embedded and low-level software in C/C++ for microcontrollers and hardware bring-up, backed by strong ECE fundamentals."
    ),
    emoji(
      "⚡ Collaborate on multidisciplinary engineering teams (Eco Illini, Illini EV Concept, class projects) using Git-based workflows and clear documentation."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Verilog / SystemVerilog",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "C / C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "KiCad (PCB Design)",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Embedded systems / MCU",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "FPGA / Digital Design",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Git / GitHub",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "React & JavaScript (for this site)",
      fontAwesomeClassname: "fab fa-react"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois Urbana-Champaign",
      logo: require("./assets/images/IlliniLogo_cropped.jpg"), // replace with an Illinois logo image when you add one
      subHeader: "Bachelor of Science in Electrical Engineering",
      duration: "August 2024 - May 2027 (expected)",
      desc: "GPA: 3.84/4.00",
      descBullets: [
        "Relevant Coursework: Digital Logic Design, Computer Systems, Electronic Circuits, Analog Signal Processing, Design Laboratory.",
        "Combine coursework with hands-on CPU design, FPGA, and EV power/telemetry projects."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Digital design / RTL & FPGA",
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Embedded systems & PCB / power",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming (C/C++/Python, tooling)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Battery Management System – PDU & Joule Meter Lead",
      company: "Eco Illini",
      companylogo: require("./assets/images/EcoIllini.jpg"), // swap to Eco Illini logo when available
      date: "Aug 2025 – Present",
      desc:
        "Lead power distribution and Joule-meter PCB design for a high-efficiency electric vehicle BMS.",
      descBullets: [
        "Led the Power Distribution Unit and Joule Meter PCB-design teams using KiCad, reducing prototype iteration cycles by 30%.",
        "Designed and simulated DC-DC buck converters and LDO voltage regulators to supply stable 12 V and 3.3 V rails with less than 50 mV ripple.",
        "Developed and validated current and voltage sensing circuits using INA228 and STM32 microcontrollers; achieved less than 1% measurement error verified via LTSpice simulations and oscilloscope testing."
      ]
    },
    {
      role: "Motor Encoder Team Member",
      company: "Illini EV Concept",
      companylogo: require("./assets/images/IlliniEVConcept.png"), // swap to Illini EV Concept logo when available
      date: "Aug 2024 – Present",
      desc:
        "Design and validation of motor encoder PCBs and feedback paths for a competition electric vehicle.",
      descBullets: [
        "Spearheaded the design and simulation of encoder PCBs using KiCad and LTSpice, achieving a 15% improvement in motor speed feedback accuracy.",
        "Conducted full bring-up and validation with oscilloscopes, logic analyzers, and differential probes; resolved 5+ hardware bugs and reduced testing time by 40%."
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Gateway Tax Services",
      companylogo: require("./assets/images/GatewayTaxServices.jpg"), // swap to Gateway logo when available
      date: "May 2023 – Aug 2023",
      desc:
        "Supported modernization of tax data workflows and reporting for a high-volume tax services firm.",
      descBullets: [
        "Processed and reorganized 10,000+ client tax records with Excel macros, reducing redundancy by 20% and improving report generation speed.",
        "Built semi-automated workflows for client communications and data reporting, shortening turnaround time from 3 days to 1 day.",
        "Collaborated with management to plan digital infrastructure upgrades projected to reduce manual data entry by 50%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // keep as string to match original
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "RISC-V CPU design and hardware-focused builds that show how I think about systems from circuits to architecture.",
  projects: [
    {
      image: require("./assets/images/risc-v-open-source-processor.jpg"), // replace with your own image when you have one
      projectName: "Pipelined RISC-V CPU Core",
      projectDesc:
        "Built a fully functional 5-stage pipelined RV32I CPU core (IF–ID–EX–MEM–WB) in SystemVerilog, achieving a 3.8× throughput improvement over a single-cycle baseline with data forwarding, hazard detection, and branch/JAL/JALR flush units.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Jbamidi/RISC-V-CPU-Core-Pipelined" // replace with specific CPU repo URL when public
        }
      ]
    },
    {
      image: require("./assets/images/Hardware-Guitar-Tuner.png"), // replace with your own image when you have one
      projectName: "Hardware Guitar Auto-Tuner",
      projectDesc:
        "Developed a fully analog auto-tuning system for guitar strings using op-amp gyrator circuits, high-Q band-pass filters, peak detection, comparators, and an H-bridge motor driver to automatically adjust tuning pegs with tuning accuracy within 2 Hz.",
      footerLink: [
        {
          name: "Project Notes",
          url: "https://drive.google.com/file/d/1ia0KOWbe21YFET0GUzXzy-fnWR_sM_kh/view?usp=sharing" // update with repo or write-up link if created
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Highlights 🏆 "),
  subtitle:
    "ECE at UIUC, EV engineering leadership, and hardware projects that reflect my trajectory toward advanced CPU/SoC and embedded hardware roles.",
  achievementsCards: [
    {
      title: "Electrical Engineering @ UIUC",
      subtitle:
        "Strong academic performance (GPA 3.84/4.00) combined with hands-on projects in CPU design, FPGA, EV systems, and applied electronics.",
      image: require("./assets/images/ECEIllinois.png"),
      imageAlt: "UIUC ECE",
      footerLink: []
    },
    {
      title: "EV & BMS Engineering",
      subtitle:
        "Lead roles in Eco Illini and Illini EV Concept developing BMS, PDU, Joule meter, and motor encoder hardware for electric vehicles.",
      image: require("./assets/images/BMSPic.png"),
      imageAlt: "EV Hardware",
      footerLink: []
    },
    {
      title: "Industry Experience & Data Work",
      subtitle:
        "Gateway Tax Services internship, applying data analysis and automation to streamline workflows and improve efficiency.",
      image: require("./assets/images/IndustryExperience.webp"),
      imageAlt: "Industry",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I plan to write about hardware debugging, CPU design lessons, and embedded systems in the future.",
  displayMediumBlogs: "false", // no Medium feed for now
  blogs: [],
  display: false // hide this section for now
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "I enjoy sharing what I learn about hardware, embedded systems, and ECE when I get the chance."
  ),
  talks: [],
  display: false // hide this section for now
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Maybe one day. For now, I focus on building and learning.",
  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // hide this section for now
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "You can also download my resume from the hero section above.",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in hardware, embedded systems, or CPU/SoC projects. My inbox is open.",
  number: "805-268-4693",
  email_address: "jassubamidi24@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // hide this section
};

const isHireable = true; // Open for opportunities: Yes

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
  twitterDetails,
  isHireable,
  resumeSection
};
  
  
