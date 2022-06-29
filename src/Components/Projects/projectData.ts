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
        imageURL: 'https://i.imgur.com/AjxJqkq.png',
        title: 'Adventures of Mort',
        description: '"A top-down RPG where you control Mort the necromancer. You and your undead companions must combat waves of heroes and ascend the “evil” princess tower to rescue your dragon."',
        teamSize: 4,
        time: '2 weeks',
        technologies: 'JavaScript, Phaser 3.55, tiled, webpack',
        appLink: 'https://adventures-of-mort.github.io/',
        gitHubLink: 'https://github.com/Group-10-Game-Dev/Group-10-Game-Dev.github.io',
        role: 'I did nothing'
    },
    {
        imageURL: 'https://i.imgur.com/xG0R9zP.png ',
        title: 'Bookstack',
        description: '"An e-commerce book site where customers can peruse a large list of public domain books, see book details, and add them to their collection."',
        teamSize: 4,
        time: '1 and a half weeks',
        technologies: 'JavaScript, React, Redux, Node, Express, Sequelize, PostgreSQL, MaterialUI',
        appLink: 'https://bookstack-fs.herokuapp.com/home',
        gitHubLink: 'https://github.com/2202-chartreuse-gs/BookStack',
        role: 'Back end developer'
    },
    {
        imageURL: 'https://i.imgur.com/sOOrwhG.png',
        title: "Fishin' with Fred",
        description: '"A text adventure in which players navigate a forest and interact with its denizens to find a pond to fish in."',
        teamSize: 1,
        time: '1 day',
        technologies: 'JavaScript, CSS',
        appLink: 'https://johnphilipsprague.github.io/fishin-with-fred/',
        gitHubLink: 'https://github.com/johnphilipsprague/fishin-with-fred'
    },
    {
        imageURL: 'https://i.imgur.com/yAn19VP.png',
        title: 'This Website',
        description: '"Sprague Overflow is my personal portfolio website designed to showcase my projects and talents, while also being a playground to practice new technologies."',
        teamSize: 1,
        time: '1 week',
        technologies: 'TypeScript, React, Sass',
        appLink: 'https://www.spragueoverflow.com',
        gitHubLink: 'https://github.com/johnphilipsprague/SpragueOverflow'
    }
];
