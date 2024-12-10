export type SplashLink = {
    iconPath: string;
    link: string;
    tooltip: string;
}

export type TimelineContent = {
    iconPath: string;
    company: string;
    position: string;
    description: string;
    date: string;
};

export type FooterContent = {
    header: string,
    links: FooterLink[]
}

export type FooterLink = {
    name: string;
    link: string;
    linkName: string;
}