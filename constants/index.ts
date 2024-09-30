import { link } from "fs";
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html96px.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css64.png",
    width: 80,
    height: 80,
  },

  {
    name: "JavaScript",
    Image: "/js96px.png",
    width: 80,
    height: 90,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 70,
    height: 80,
  },
  {
    name: "Bootstrap",
    Image: "/bootstrap.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },

  {
    name: "Java",
    Image: "/java.png",
    width: 80,
    height: 80,
  },
  {
    name: "MySQL",
    Image: "/sqllogo.png",
    width: 80,
    height: 80,
  },
  {
    name: "PHPMyAdmin",
    Image: "/phpmyadmin-icon.png",
    width: 75,
    height: 80,
  },
  {
    name: "Redux Toolkit",
    Image: "/redux.png",
    width: 75,
    height: 80,
  },
  {
    name: "Redux Toolkit",
    Image: "/API.png",
    width: 75,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Github",
    src: "/githubnext64.png",
    link: "https://github.com/saurabhsp",
  },
  {
    name: "Linkedin",
    src: "/linkedin64.png",
    link: "https://www.linkedin.com/in/saurabhsmp/",
  },
  {
    name: "Resume",
    src: "/resume64.png",
    link: "https://drive.google.com/file/d/1tulUW33oBDhrxn5YuC2xW-vUWIhv1Y6W/view?usp=sharing",
  },
];
export const Projects = [
  {
    title: "Movix - Movies & TV Shows",
    text: "All Movies & TV Shows are fetched through API by using Axios in React JS, More JS Libraries are used to optimize Production & better enhancement",
    src: "/movixx.gif",
  },
  {
    title: "News Web Application",
    text: "All News are sorted by categories and trending news are updated daily. All the News Data come from NewsAPI and displaying it using Bootstrap cards.",
    src: "/newsmonkey.gif",
  },
  {
    title: "CRUD - MERN Stack ",
    text: "User Data are taken and store it in database display it to the users. POSTMAN, Mongoose, MongoDB Clusters, React JS, Express JS, Node.js etc. are used.",
    src: "/CRUDGIF.gif",
  },
  {
    title: "TextUtils - Operation on texts",
    text: "Live text operations on texts without reloading the page. React JS & Bootstrap are used. Class Based & Function Based both are on Developed",
    src: "/textutils.gif",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
