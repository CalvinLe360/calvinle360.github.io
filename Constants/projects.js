// import project demo images as follows.
import PROJECT1_1 from "../styles/projects/AbilityArena_1.jpg";
import PROJECT1_2 from "../styles/projects/AbilityArena_2.jpg";
import PROJECT2_1 from "../styles/projects/RockPaperScissor_1.png";
import PROJECT2_2 from "../styles/projects/RockPaperScissor_2.png";
import PROJECT2_3 from "../styles/projects/RockPaperScissor_3.png";
import PROJECT3_1 from "../styles/projects/Project3_1.jpg";
import PROJECT3_2 from "../styles/projects/Project3_2.jpg";
import PROJECT3_3 from "../styles/projects/Project3_3.jpg";

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
        photo: [PROJECT1_1, PROJECT1_2], //list of names of images from above imports.
    },
    {
        name: "Rock-Paper-Scissors Image Recognition Competition",
        description:
            "PyTorch was used to build a neural network that can recognize a dataset of rock-paper-scissors moves against a green background. Experimentations and tweaks to its neural architecture were performed many times, modifying its training environment to improve its performance. The final model achieved 100% accuracy and 0.24 GFLOPs, recognized as one of the most successful projects in the competition.",
        githubLink:
            "https://github.com/CalvinLe360/RockPaperScissors-ComputerVision",
        projectLink: "",
        tech: ["Python"],
        photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
    },
    {
        name: "Project 3",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
        githubLink: "/",
        projectLink: "/",
        tech: ["Tech1", "Tech2", "Tech3"],
        photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
];
