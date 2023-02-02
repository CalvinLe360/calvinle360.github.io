//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
    faGithubAlt,
    faLinkedinIn,
    faMediumM,
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faBehance,
} from "@fortawesome/free-brands-svg-icons";

export const userinfo = {
    logoText: "Calvin Le", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: "calvinle360@gmail.com", //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: "466752057", //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: "+61", //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        {
            type: "github",
            link: "https://github.com/CalvinLe360/",
            icon: faGithubAlt,
        },
        {
            type: "linkedin",
            link: "https://www.linkedin.com/in/calvinle360/",
            icon: faLinkedinIn,
        },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I'm Calvin.",
        subtitle:
            "I've recently graduated from the University of Adelaide with a Bachelor of Mathematical and Computer Sciences, and have been working professionally since 2020.",
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Web Development",
            skills: ["Vue", "MySQL", "CSS"],
        },
        {
            category: "General Programming", // eg.frontend, backend, devops etc
            skills: ["TypeScript", "Python", "C++", "C#", "Lua"], //eg. react, html, python etc.
        },
        {
            category: "Protestant Leadership",
            skills: [
                "Sermon Readings",
                "Demon Exorcisms",
                "Holy Rituals",
                "Weddings and Baptisms",
            ],
        },
        // {
        //     category: "Category",
        //     skills: ["Skillset4", "Skillset4", "Skillset4"],
        // },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: [
            "An experienced programmer aspiring to become even greater.",
            "I first started building applications in C# through Visual Studio. From this, it allowed me to build my foundation of problem solving, expanding my knowledge through fields such as web development and back-end development.",
            "I am eager to learn, and interested in Artificial Intelligence; some of my projects work with statistics to formulate bot decisions, while others use a general decision based algorithm to drive a variety of unique bots.",
            "I've completed my Bachelor of Mathematical and Computer Sciences at the University of Adelaide in 2022, during which I've worked part time in the gaming industry, using both Lua and TypeScript to code for games played by over half a million people.",
        ],
        resume: "/resume.pdf", //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: "2019 - 2022", //timespan
                title: "Bachelor of Maths and Computer Sciences", //eg. BTech in Compuster Engineering
                organization: "University of Adelaide", //eg. VJTI, Mumbai
                description: "Foundation and expertise in Computer Science", //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: "May - Dec 2018",
                title: "High School Student",
                organization: "Mawson Lakes Endeavour College",
                description: "Allowed great interest in computer technology.",
            },
            // {
            //     time: "May - Oct 2020",
            //     title: "Degree name",
            //     organization: "School Name",
            //     description: "Lorem ipsum dolor sit amet consectetur",
            // },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: "Arcadia Redux", //company name eg.Microsoft
                companylogo:
                    "https://avatars.githubusercontent.com/u/46830822?s=280&v=4", //companylogo
                position: "Software Engineer", //post you held eg.Senior SDE
                time: "Dec 2020 - Ongoing", //timespan
                description:
                    "Creating and Maintaining a number of games by the company, such as 12v12, Custom Hero Clash, and Overthrow 3.0", //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: "Double Edge Studios",
                companylogo:
                    "https://avatars.githubusercontent.com/u/99471117?s=200&v=4",
                position: "Software Engineer",
                time: "Jan 2022 - Ongoing",
                description:
                    "Assisted in the development of the highly successful game Ability Arena with heavy focus on software mechanics and production efficacy.",
            },
            {
                company: "Acacia Systems",
                companylogo:
                    "https://media.licdn.com/dms/image/C510BAQGqRckgaWPPPg/company-logo_200_200/0/1525800328507?e=2147483647&v=beta&t=bN_PlaxMWCFF7bWVZWqCCXYuRI5IVEeKQbTc9BcMnNE",
                position: "Software Engineer",
                time: "February 2023 - Ongoing",
                description:
                    "Building and maintaining software and technology used to assist the Australian Defence with Machine Learning, Unmanned Systems, and Advanced Data Processing.",
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false,
    },
};

export const headings = {
    //you can customise all the headings here.
    workHomePage: "Work",
    workMainPage: "Projects",
    capabilities: "Capabilities",
    about: "About Me",
    education: "Education",
    experience: "Experiences",
    blogs: "I write!",
    contact: "Contact Me",
};

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: "My Work",
    workCTA: "View All",
    capabCTA: "Get in Touch",
    educationCTA: "About Me",
    resumeCTA: "Resume",
    submitBTN: "Submit",
};
