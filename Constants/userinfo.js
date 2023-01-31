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
        content:
            "An experienced programmer aspiring to become even greater.\nI first started building applications in C# through Visual Studio. From this, it allowed me to build my foundation of problem solving, expanding my knowledge through fields such as web development and back-end development.\nI am eager to learn, and interested in Artificial Intelligence; some of my projects work with statistics to formulate bot decisions, while others use a general decision based algorithm to drive a variety of unique bots. I've recently completed my Bachelor of Mathematical and Computer Sciences, during which I've worked part time in the gaming industry, using both Lua and Typescript to code for games played by over half a million people.",
        resume: "/", //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: "May - Oct 2020", //timespan
                title: "Degree name", //eg. BTech in Compuster Engineering
                organization: "School Name", //eg. VJTI, Mumbai
                description: "Lorem ipsum dolor sit amet consectetur", //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: "May - Oct 2020",
                title: "Degree name",
                organization: "School Name",
                description: "Lorem ipsum dolor sit amet consectetur",
            },
            {
                time: "May - Oct 2020",
                title: "Degree name",
                organization: "School Name",
                description: "Lorem ipsum dolor sit amet consectetur",
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: "Dunder Mifflin", //company name eg.Microsoft
                companylogo:
                    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*", //companylogo
                position: "Regional Manager", //post you held eg.Senior SDE
                time: "March 2020 - May 2020", //timespan
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum", //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: "Dunder Mifflin",
                companylogo:
                    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
                position: "Regional Manager",
                time: "March 2020 - May 2020",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
            },
            {
                company: "Dunder Mifflin",
                companylogo:
                    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*",
                position: "Regional Manager",
                time: "March 2020 - May 2020",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true,
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
    landingCTA: "My work",
    workCTA: "View All",
    capabCTA: "Get in Touch",
    educationCTA: "About Me",
    resumeCTA: "Resume",
    submitBTN: "Submit",
};
