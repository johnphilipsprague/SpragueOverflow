import {
    SiRedux,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiSequelize,
    SiPostgresql,
    SiJavascript,
    SiTypescript,
    SiCss3,
    SiSass,
    SiHtml5,
    SiGit,
    SiJasmine,
    SiMocha,
    SiPostman,
    SiWebpack,
    SiGoogle
} from 'react-icons/si';

import { GiRetroController } from 'react-icons/gi';

export interface SkillsData {
    icon: any;
    label: string;
}

export const skillsData: Array<SkillsData> = [
    {
        icon: SiJavascript,
        label: 'JavaScript'
    },
    {
        icon: SiTypescript,
        label: 'TypeScript'
    },
    {
        icon: SiHtml5,
        label: 'HTML'
    },
    {
        icon: SiCss3,
        label: 'CSS'
    },
    {
        icon: SiSass,
        label: 'Sass'
    },
    {
        icon: SiGit,
        label: 'Git'
    },
    {
        icon: SiGoogle,
        label: 'Google'
    },
    {
        icon: SiReact,
        label: 'React'
    },
    {
        icon: SiRedux,
        label: 'Redux'
    },
    {
        icon: SiNodedotjs,
        label: 'Node.js'
    },
    {
        icon: SiExpress,
        label: 'Express'
    },
    {
        icon: SiPostgresql,
        label: 'PostgreSQL'
    },
    {
        icon: SiSequelize,
        label: 'Sequelize'
    },
    {
        icon: SiPostman,
        label: 'Postman'
    },
    {
        icon: GiRetroController,
        label: 'Phaser'
    },
    {
        icon: SiWebpack,
        label: 'Webpack'
    },
    {
        icon: SiJasmine,
        label: 'Jasmine'
    },
    {
        icon: SiMocha,
        label: 'Mocha'
    }
];
