import { FooterContent } from "../components/types";

export const links = {
    github: 'https://github.com/CalvinLe360',
    leetcode: 'https://leetcode.com/u/calvinle360/',
    linkedin: 'https://www.linkedin.com/in/calvinle360/',
    email: 'mailto:calvinle360@gmail.com',
    abilityArena: 'https://www.abilityarena.com/',
    overthrow: 'https://steamcommunity.com/sharedfiles/filedetails?id=2760533777',
    chc: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2141071809',
    resume: 'assets/resume-anonymous.pdf'
}

export const footerContent: FooterContent[] = [
    {
        header: 'Contact Me:',
        links: [
            {
                name: "Email",
                link: links.email,
                linkName: links.email.split(':')[1]
            },
            {
                name: "LinkedIn",
                link: links.linkedin,
                linkName: links.linkedin.split('www.')[1]
            }
        ]
    },
    {
        header: 'Resources:',
        links: [
            {
                name: "Résumé",
                link: links.resume,
                linkName: "Click Here"
            },
            {
                name: "GitHub",
                link: links.github,
                linkName: links.github.split('//')[1]
            }
        ]
    }
]