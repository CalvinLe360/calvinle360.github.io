// import project demo images as follows.
import ABILITYARENA_1 from "../styles/AbilityArena_1.jpg";
import ABILITYARENA_2 from "../styles/AbilityArena_2.jpg";
import ROCKPAPERSCISSORS_1 from "../styles/RockPaperScissor_1.png";
import ROCKPAPERSCISSORS_2 from "../styles/RockPaperScissor_2.png";
import ROCKPAPERSCISSORS_3 from "../styles/RockPaperScissor_3.png";
import WDC_1 from "../styles/WDC_1.png";
import OT3_1 from "../styles/ot3_1.jpg";
import OT3_2 from "../styles/ot3_2.jpg";
import OT3_3 from "../styles/ot3_3.jpg";
import OT3_4 from "../styles/ot3_4.jpg";

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
        photo: [ABILITYARENA_1, ABILITYARENA_2], //list of names of images from above imports.
    },
    {
        name: "Overthrow 3.0", //project name
        description:
            "Slay your enemies! Capture and earn Orbs to grow stronger. Be the first to reach the kill goal, or the team with the most kills when the game ends and be victorious!", //project description
        githubLink: "", //github repo link
        projectLink:
            "https://steamcommunity.com/sharedfiles/filedetails?id=2760533777", //deployed project link
        tech: ["Lua", "JavaScript"], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [OT3_1, OT3_2, OT3_3, OT3_4], //list of names of images from above imports.
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
        photo: [ROCKPAPERSCISSORS_1, ROCKPAPERSCISSORS_2, ROCKPAPERSCISSORS_3],
    },
    {
        name: "Covid-Tracker Website",
        description:
            "Designed a website that tracks the check-ins of all users, geographically locating their position and adding the check-in's location to a database and marking it on Google Maps. Administrative actions can be done with certain accounts of high privileges to mark areas as hotspots of infection.",
        githubLink: "",
        projectLink: "",
        tech: ["Vue", "MySQL", "Google API", "Node.JS", "CSS"],
        photo: [WDC_1],
    },
];
