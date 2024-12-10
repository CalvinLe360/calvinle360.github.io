import { SplashLink } from "../components/types";
import { links } from './links'

export const splashLinks: SplashLink[] = [
    {
        iconPath: '/svg/github.svg',
        link: links.github,
        tooltip: 'GitHub'
    },
    {
        iconPath: '/svg/leetcode.svg',
        link: links.leetcode,
        tooltip: 'LeetCode'
    },
    {
        iconPath: '/svg/linkedin.svg',
        link: links.linkedin,
        tooltip: 'LinkedIn'
    },
    {
        iconPath: '/svg/gmail.svg',
        link: links.email,
        tooltip: 'calvinle360@gmail.com'
    },
]