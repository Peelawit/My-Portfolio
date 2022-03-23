import { IoCodeWorking,
         IoLogoGithub,
         IoLogoFacebook,
         IoLogoInstagram,
         IoMail,
         IoCall, } from "react-icons/io5";
import Python from './img/python.png';
import Java from './img/java.png';
import php from './img/php.png';
import MySQL from './img/mysql.png';
import reactjs from './img/react.png';
import Js from './img/js.png';
import Css from './img/css.png';
import html from './img/html-5.png';


export const Experience = [
    {
        id: 1,
        date: "2013-2016",
        iconsScr: <IoCodeWorking />,
        title: "Vocational Certificate",
        location: "Thaluang Cementhaianusorn Technical College",
        description: 
        "I'm graduated from Thaluang Cementhaianusorn Technical College",

    },
    {
        id: 2,
        date: "2016-2018",
        iconsScr: <IoCodeWorking />,
        title: "High Vocational Certificate",
        location: "Thaluang Cementhaianusorn Technical College",
        description: 
        "I'm graduated from Thaluang Cementhaianusorn Technical College",

    },
    {
        id: 3,
        date: "2018-2019",
        iconsScr: <IoCodeWorking />,
        title: "Internship",
        location: "NANOTECHNOLOGY CENTER.",
        description: 
        "Internship student at NANOTECHNOLOGY CENTER.",

    },
    {
        id: 4,
        date: "2019-present",
        iconsScr: <IoCodeWorking />,
        title: "Bachelor's degree",
        location: "king mongkut's university of technology north bangkok",
        description: 
        "Now I'm studying in Bachelor degree of Information Thecnology at King mongkut's university of technology north bangkok.",

    },
]

export const Skills = [
    {
        id: 1,
        position: "Back-End",
        imgSrc:php,
        subject: "PHP"
    },
    {
        id: 2,
        position: "Back-End",
        imgSrc:Java,
        subject: "Java"

    },
    {
        id: 3,
        position: "Back-End",
        imgSrc:Python,
        subject: "Python"

    },
    {
        id: 4,
        position: "Back-End",
        imgSrc:MySQL,
        subject: "MySQL"

    },
    {
        id: 5,
        position: "Front-End",
        imgSrc:reactjs,
        subject: "ReactJS"

    },
    {
        id: 6,
        position: "Front-End",
        imgSrc:Js,
        subject: "JavaScrip"

    },
    {
        id: 7,
        position: "Front-End",
        imgSrc:Css,
        subject: "CSS"

    },
    {
        id: 8,
        position: "Front-End",
        imgSrc:html,
        subject: "HTML"

    },


]



export const SocialLinks = [
    {
        id: 1,
        iconsScr: <IoLogoGithub className="text-textContent text-3xl cursor-pointer" />,
        name: "GitHub",
        link: "https://github.com/Peelawit"

    },
    {
        id: 2,
        iconsScr: <IoLogoFacebook className="text-sky-600 text-3xl cursor-pointer" />,
        name:'Facebook',
        link: "https://www.facebook.com/peelawit/"

    },
    {
        id: 3,
        iconsScr: <IoLogoInstagram className="text-pink-600 text-3xl cursor-pointer" />,
        name:'Instagram',
        link: "https://www.instagram.com/grizzly.bear.___/"

    },
    {
        id: 4,
        iconsScr: <IoMail className="text-blue-600 text-3xl cursor-pointer" />,
        name:'E-mail : peelawit@hotmail.com',
        link: "#contact"

    },
    {
        id: 5,
        iconsScr: <IoCall className="text-green-500 text-3xl cursor-pointer" />,
        name:'Tel : 097-9388255',
        link: "#contact"

    }
]