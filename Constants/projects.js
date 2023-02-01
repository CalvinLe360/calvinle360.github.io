// import project demo images as follows.
import {
    ABILITYARENA,
    ROCKPAPERSCISSORS,
    WDC,
    OT3,
    CODE1,
    RPG,
    WEBSITE,
} from "./images.js";

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: "Ability Arena", //project name
        description:
            "Ability Arena is an autobattler that mixes the fun of games such as Auto Chess, Atomic War, and Underlords with the depth and variety of Ability Draft.", //project description
        githubLink: "", //github repo link
        projectLink: "https://www.abilityarena.com/", //deployed project link
        tech: ["TypeScript"], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: ABILITYARENA, //list of names of images from above imports.
    },
    {
        name: "Overthrow 3.0", //project name
        description:
            "Slay your enemies! Capture and earn Orbs to grow stronger. Be the first to reach the kill goal, or the team with the most kills when the game ends and be victorious!", //project description
        githubLink: "", //github repo link
        projectLink:
            "https://steamcommunity.com/sharedfiles/filedetails?id=2760533777", //deployed project link
        tech: ["Lua", "JavaScript"], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: OT3, //list of names of images from above imports.
    },
    {
        name: "Rock-Paper-Scissors Image Recognition Competition",
        description:
            "Built a neural network using PyTorch that can recognize a dataset of rock-paper-scissors moves against a green background. Experimentations and tweaks to its neural architecture were performed many times, modifying its training environment to improve its performance. The final model achieved 100% accuracy and 0.24 GFLOPs, recognized as one of the most successful projects in the competition.",
        githubLink:
            "https://github.com/CalvinLe360/RockPaperScissors-ComputerVision",
        projectLink:
            "https://github.com/CalvinLe360/RockPaperScissors-ComputerVision",
        tech: ["Python"],
        photo: ROCKPAPERSCISSORS,
    },
    {
        name: "My Portfolio Website",
        description:
            "Any project in any discipline will always come with struggles and frustration, but the end result will always wrap up the experience with gratification. With much appreciation to Asavari Ambavane for developing the template for the website.",
        githubLink: "https://github.com/CalvinLe360/calvinle360.github.io",
        projectLink: "/",
        tech: ["Next.JS", "React", "CSS"],
        photo: WEBSITE,
    },
    {
        name: "Remapping King Solomon's Mine",
        description:
            "Designed a Python program in partnership with Maptek to assist the remapping of an input grid to assist companies in mining gold. Performance of the program is prioritized, but working code is a must. Agile methodology was utilized along with fortnightly contact with Maptek to regularly check on progress and update the program's goals, with some assistance through discussions and questions.",
        githubLink: "",
        projectLink: "",
        tech: ["Python"],
        photo: CODE1,
    },
    {
        name: "Covid-Tracker Website",
        description:
            "Designed a website that tracks the check-ins of all users, geographically locating their position and adding the check-in's location to a database and marking it on Google Maps. Administrative actions can be done with certain accounts of high privileges to mark areas as hotspots of infection.",
        githubLink: "",
        projectLink: "",
        tech: ["Vue", "MySQL", "Google API", "Node.JS", "CSS"],
        photo: WDC,
    },
    {
        name: "2D RPG",
        description:
            "C++ turn-based game that runs in the command prompt, where the player character must survive in a randomly generated world against an endless onslaught of monsters by finding powerups. Utilised object-oriented principles such as inheritance, and contains artificial intelligence.",
        githubLink: "https://github.com/CalvinLe360/2d-Rpg-2020",
        projectLink: "https://github.com/CalvinLe360/2d-Rpg-2020",
        tech: ["C++"],
        photo: RPG,
    },
];
