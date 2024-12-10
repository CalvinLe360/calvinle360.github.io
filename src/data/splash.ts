import { SplashLink } from "../components/types";
import { links } from './links'

export const splashLinks: SplashLink[] = [
    {
        iconPath: 'img/svg/github.svg',
        link: links.github,
        tooltip: 'GitHub'
    },
    {
        iconPath: 'img/svg/leetcode.svg',
        link: links.leetcode,
        tooltip: 'LeetCode'
    },
    {
        iconPath: 'img/svg/linkedin.svg',
        link: links.linkedin,
        tooltip: 'LinkedIn'
    },
    {
        iconPath: 'img/svg/gmail.svg',
        link: links.email,
        tooltip: 'calvinle360@gmail.com'
    },
]