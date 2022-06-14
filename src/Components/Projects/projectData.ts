export interface ProjectData {
    imageURL: string;
    title: string;
    description: string;
    teamSize: number;
    time: string;
    technologies: string;
    appLink: string;
    gitHubLink: string;
    role?: string;
}

export const projectData: Array<ProjectData> = [
    {
        imageURL: 'some imgur link',
        title: 'Sprague Overflow',
        description: 'My Portfolio Website',
        teamSize: 1,
        time: '1 week',
        technologies: 'TypeScript, React, Sass',
        appLink: 'https://www.spragueoverflow.com',
        gitHubLink: 'https://github.com/johnphilipsprague/SpragueOverflow'
    },
    {
        imageURL: 'some imgur link',
        title: 'Adventures of Mort',
        description: 'Final project of Fullstack Academy',
        teamSize: 4,
        time: '2 weeks',
        technologies: 'JavaScript, Phaser 3.55, tiled, webpack',
        appLink: 'https://adventures-of-mort.github.io/',
        gitHubLink: 'https://github.com/Group-10-Game-Dev/Group-10-Game-Dev.github.io',
        role: 'I did nothing'
    },
    {
        imageURL: 'some imgur link',
        title: 'Bookstack',
        description: 'A project to create an e-commerce website',
        teamSize: 4,
        time: '1 and a half weeks',
        technologies: 'JavaScript, React, Redux, Node, Express, Sequelize, PostgreSQL, MaterialUI',
        appLink: 'https://bookstack-fs.herokuapp.com/home',
        gitHubLink: 'https://github.com/2202-chartreuse-gs/BookStack',
        role: 'Back end developer'
    },
    {
        imageURL: 'some imgur link',
        title: "Fishin' with Fred",
        description: 'A text adventure',
        teamSize: 1,
        time: '1 day',
        technologies: 'JavaScript, CSS',
        appLink: 'https://johnphilipsprague.github.io/fishin-with-fred/',
        gitHubLink: 'https://github.com/johnphilipsprague/fishin-with-fred'
    }
];
