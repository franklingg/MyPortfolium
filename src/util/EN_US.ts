import { IPage, LABELS } from "~/util/Content";
import {
  RecomDebora,
  RecomTiago,
  RecomTaynara,
  Book,
  Bulb,
  Gear,
  DiscordLogo,
  SigesLogo,
  LittleGamesLogo,
  PlantManagerLogo,
  PortfoliumLogo,
  DesafioTsLogo,
  DsBeginsLogo,
  FriacaPartyLogo,
  SimlaLogo,
  BeezLogo,
} from "~/assets";

export default class EN_US implements IPage {
  navbar = {
    home: "Home",
    about: "About Me",
    skills: "My Skills",
    projects: "Projects",
  };

  contact = {
    title: "Let's talk about your project/company?",
    name: "Name",
    tel: "Telephone",
    message: "Message",
    send: "Send",
    success: ["Thank you!", "I'll be contacting you shortly"],
    failure: ["ERROR!", "Unfortanetly your message has not been sent"],
  };

  simpleButton = {
    findMore: "Get to know me",
    backHome: "Return Home",
  };

  home = {
    occupation: "Software Developer",
    description: `
            Hi, welcome to my portfolium!
            Here you will get to know more about me, my skills and my projects!
            Are you ready to dive in?!`,
    recommendationsTitle: "Recommendations",
    recommendations: [
      {
        text: "“I've worked with Franklin on a complex project and his capability of solving problems helped us deliver our demands in time.",
        author: "Tiago Chaves",
        occupation: "QA Manager",
        icon: RecomTiago,
      },
      {
        text: "“Franklin is a proactive and dedicated professional, always understanding the team's needs. He was one of the first developers that made sure to work and comprehend designer demands, in order to deliver the best result possible. It was an enourmous pleasure to work by your side!”",
        author: "Taynara Lacerda",
        occupation: "UX/UI Designer",
        icon: RecomTaynara,
      },
      {
        text: "Proactive, liable, dedicated and humorous! Franklin always contributes with the team with innovation and eager of learning more 😄",
        author: "Débora Lêda",
        occupation: "Development Leader",
        icon: RecomDebora,
      },
    ],
  };

  about = {
    who: "Who am I?",
    text: [
      `My name is Franklin Regis, I'm 23 years old and I'm an undergraduate student in Computer Science at the 
                 Federal University of Campina Grande.`,
      `During my fre time I usually play games and read a lot (great fan of Tolkien here!),
                as well as always being tuned on the "memes" - like a good modern person.`,
      `I'm a very peaceful boy, extrovert and passioned with my work, always seeking for the
                well being of the people around me, whether we are in a workplace or not.`,
    ],
    informationsTitle: "Informations",
    informations: [
      {
        type: "Work",
        value: 1,
        content: "year of experience acting solely as Frontend Developer",
      },
      {
        type: "Work",
        value: 1,
        content: "year of experience acting as FullStack Developer",
      },
      {
        type: "Competitions",
        value: 1,
        content: "participation on International Olympiads",
      },
      {
        type: "Innovation",
        value: 1,
        content: "year of experience with extension and technology projects",
      },
      { type: "English", value: "B2", content: "QCE English level (Advanced)" },
      {
        type: "Production",
        value: 2,
        content: "articles published on a national congress",
      },
    ],
  };

  skills = {
    tops: "Best Skills",
    topsList: [
      {
        icon: Bulb,
        title: "Self-learning and versatility",
        text: "Capable of learning and evolving from the problems that arise.",
      },
      {
        icon: Book,
        title: "SEO skillset",
        text: "Static and dynamic pages development with good SEO practices.",
      },
      {
        icon: Gear,
        title: "Organization and Scalability",
        text: "Following all the project patterns and client/system requirements.",
      },
    ],
  };

  "404" = [
    "The page you're attempting to reach is not available right now :(",
    "Refresh the page or return to home page!",
  ];

  projects = {
    title: "My Projects",
    frontend_backend: [
      {
        image: PortfoliumLogo,
        title: "MyPortfolium",
        description:
          "Source-code of this portfolium, using Static Site Generation (SSG).",
        labels: [LABELS.TYPESCRIPT, LABELS.NEXT],
        link: "https://github.com/franklingg/MyPortfolium",
      },
      {
        image: SimlaLogo,
        title: "SimLa",
        description: "Virtual tiles customizer for ceramic manufaturing",
        labels: [LABELS.NEXT],
        link: "https://github.com/franklingg/SimLa",
      },
      {
        image: BeezLogo,
        title: "Beez",
        description:
          "Mobile App useful for finding events and entertainment options around you.",
        labels: [LABELS.FLUTTER, LABELS.FIREBASE],
        link: "https://github.com/franklingg/beez",
      },
      {
        image: PlantManagerLogo,
        title: "PlantManager",
        description:
          "Mobile application for register and management of your home plants.",
        labels: [LABELS.TYPESCRIPT, LABELS.REACT, LABELS.FIREBASE],
        link: "https://github.com/franklingg/PlantManager",
      },
      {
        image: FriacaPartyLogo,
        title: "Friaca Party",
        description:
          "Website useful to handle guest confirmations for your parties.",
        labels: [LABELS.REACT, LABELS.FIREBASE],
        link: "https://github.com/franklingg/friaca-party",
      },
      {
        image: DesafioTsLogo,
        title: "Desafio-TS",
        description:
          "Building a food delivery page that is reponsive and dynamic.",
        labels: [LABELS.REACT, LABELS.JAVASCRIPT],
        link: "https://github.com/franklingg/desafio-teamsoft",
      },
    ],
    software: [
      {
        image: SigesLogo,
        title: "SIGES",
        description:
          "Management system to handle occupation of rooms, labs and public places.",
        labels: [LABELS.HASKELL, LABELS.PROLOG],
        link: "https://github.com/franklingg/SIGES",
      },
      {
        image: DiscordLogo,
        title: "Gummy",
        description: "Discord bot with playful/daytime functionalities.",
        labels: [LABELS.JAVASCRIPT],
        link: "https://github.com/franklingg/Gummy",
      },
      {
        image: LittleGamesLogo,
        title: "LittleGames",
        description: "Authoral games made for learning gaming programming.",
        labels: [LABELS.PYTHON],
        link: "https://github.com/franklingg/LittleGames",
      },
      {
        image: DsBeginsLogo,
        title: "DS-Begins",
        description:
          "A set of introductory models for Data Science, Machine Learning and Deep Learning.",
        labels: [LABELS.JUPYTER, LABELS.PYTHON],
        link: "https://github.com/franklingg/DS-Begins",
      },
    ],
  };
}
