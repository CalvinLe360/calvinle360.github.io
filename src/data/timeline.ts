import { TimelineContent } from "../components/types";
import { links } from "./links";

export const timelineData: TimelineContent[] = [
    {
        iconPath: "img/companies/acaciaSystems.jpg",
        company: "Acacia Systems",
        position: "Software Engineer",
        description: "A leading company in the defense industry, where I've worked on advanced radar and recording technology applications with <br>Vue 3 + TypeScript for the frontend and C++ for the backend.",
        date: "Feburary 2023"
    },
    {
        iconPath: "img/companies/doubleEdgeStudios.png",
        company: "Double Edge Studios",
        position: "Programmer",
        description: `One of the developers for <a href='${links.abilityArena}' target="_blank"'>Ability Arena</a>, which has found massive success at its launch.`,
        date: "January 2022"
    },
    {
        iconPath: "img/companies/arcadiaRedux.png",
        company: "Arcadia Redux",
        position: "Programmer",
        description: `Maintained numerous projects with large and active playerbases during university, such as <a href='${links.overthrow}' target="_blank">Overthrow 3.0</a> and <a href='${links.chc}' target="_blank">Custom Hero Clash</a>.`,
        date: "December 2020"
    },
    {
        iconPath: "img/companies/universityOfAdelaide.png",
        company: "University of Adelaide",
        position: "Bachelor of Mathematical and Computer Sciences",
        description: "Honed my skills in analytical thinking, problem-solving, and programming. My studies provided a solid foundation in mathematics and computer science, fueling my passion for innovative solutions.",
        date: "January 2019"
    }
]