import {
    faLinkedin,
    faInstagram,
    faFacebook,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    next,
    cymantix,
    ibm,
    carrent,
    jobit,
    tripguide,
    threejs,
    lenovo,
    firebase,
    C,
    Cpp,
    unc,
} from "../assets";

const intro = `I'm a skilled software developer with experience in full stack web development, mobile application developement, and systems research. I'm a quick learner and collaborate closely with
                teammates and clients to create efficient, scalable, and user-friendly
                solutions that solve real-world problems. Let's work together to
                bring your ideas to life!`;

export const navLinks = [
    {
        id: "",
        title: "Overview",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const contacts = [
    {
        link: "https://github.com/MingliZhang/",
        icon: faGithub,
        text: "@MingliZhang",
    },
    {
        link: "https://www.facebook.com/mike.zhang.792303/",
        icon: faFacebook,
        text: "@Mike Zhang",
    },
    {
        link: "https://www.instagram.com/mingli_zhang/",
        icon: faInstagram,
        text: "@Mingli Zhang",
    },
    {
        link: "https://www.linkedin.com/in/mingli-zhang/",
        icon: faLinkedin,
        text: "@Mingli Zhang",
    },
    {
        link: "mailto:minglizhang2000@outlook.com",
        icon: faEnvelope,
        text: "minglizhang2000@outlook.com",
    },
    {
        link: "tel:9192745562",
        icon: faPhone,
        text: "(919)274-5562",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Researcher",
        icon: backend,
    },
    {
        title: "Software Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Next JS",
        icon: next,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "C",
        icon: C,
    },
    {
        name: "C++",
        icon: Cpp,
    },
];
const whiteBg = "#E6DEDD";
const blackBg = "#383E56";

const experiences = [
    {
        title: "Software Developer",
        company_name: "Cymantix",
        icon: cymantix,
        iconBg: whiteBg,
        date: "October 2021 - Jan 2023",
        points: [
            "Engineered, with a team of 5 developers,  a full-stack SaaS machine learning driven platform that integrated a WebRTC video conferencing app, an information retrieval app, and a core identity API. The platform played a key role in the company securing seed-round funding.",
            "Incorporated Microsoft Azure into our platform as per our client's request, providing more flexible login choices and enabling seamless secured data transfer between our data retrieval app and Microsoft's cloud storage.",
            "Utilized Socket.io to parallelize the real-time news analysis process in our data retrieval platform, leading to a 70% acceleration.",
            "Strengthened our critical data update pipeline with the implementation of bash scripts, Python, and a Cron job, resulting in increased reliability.",
        ],
    },
    {
        title: "Full Stack Enginner Summer Intern",
        company_name: "IBM",
        icon: ibm,
        iconBg: whiteBg,
        date: "May 2021 - Aug 2021",
        points: [
            "Improved user experience on a development environment management platform that supports 2000+ IBM developers each month.",
            "Optimized administrative content tasks to reduce workload for developers, resulting in more than 10 times faster content updates and fewer required deployments.",
            "Founded an automated validation service using Sails.js that reduced month of manual time to maintain the employee database",
        ],
    },
    {
        title: "Research Assistant",
        company_name: "UNC - CH, LAIR ",
        icon: unc,
        iconBg: "#E6DEDD",
        date: "April 2021 - May 2023",
        points: [
            "Established data visualization using Tableau for UNICEF to monitor health conduction of children and women across 200 countries.",
            "Initiated a mobile application for a health data exchange platform using React Native and Flask Backend.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "UI/UX Designer Summer Intern",
        company_name: "Lenovo",
        icon: lenovo,
        iconBg: whiteBg,
        date: "June 2017 - Auguest 2017",
        points: [
            "Designed Lenovo's B2B web store with Mocking-Bot (similar to Adobe XD), providing retailers with access to product information for over 1000 products, as well as remote technology support and restocking capabilities.",
            "Negotiated with the marketing and human resources departments to determine the necessary resources for the completion of the project.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I have the pleasure to work with Mingli throughout the time at UNC LAIR and Cymantix. With a solid foundation in CS and Math, Mingli has demonstrated outstanding capabilities in logical thinking. He's the software engineer that embodies genuine passion about knowledge, extraordinary learning speed and initiatives, and diligent working attitude. I could not recommend him enough!",
        name: "Xinzhao Li",
        designation: "Tech Lead",
        company: "Cymantix",
        image: "https://media.licdn.cn/dms/image/C4E03AQFQuIeI4eHquA/profile-displayphoto-shrink_400_400/0/1573494512736?e=1694649600&v=beta&t=qBVA77lIHcl5aYs6eqlYXlCNe5yhrpkvnAcpdLrAYZ8",
    },
    {
        testimonial:
            "Mingli worked on my project, Easy Access, as part of a advanced-level undergraduate course at UNC that matches teams of 3-4 upper-level computer science majors with software clients. Mingli single-handedly proposed and created a redesign of our back-end system using a sails.js framework connected to MongoDB. He showed great initiative in suggesting and designing changes to our system. Overall, Mingli is a highly skilled, diligent, and innovative programmer, good communicator, and a hard worker. I would highly recommend him for any project, job, or graduate program. It was a pleasure working with Mingli. Thank you so much for your help!",
        name: "Vitaly Radsky",
        designation: "COO",
        company: "Easy Access",
        image: "https://media.licdn.cn/dms/image/C4E03AQGnvEODnb-32A/profile-displayphoto-shrink_400_400/0/1546453608433?e=1694649600&v=beta&t=3WbKD7k7SfIyl1UCgTeCPOUbLses099X9GYTMDN--oY",
    },
    {
        testimonial:
            "Mingli has an impressive ability to learn quickly, which  experienced first-hand during his 11-week internship at IBM this past summer. Mingli joined the development team that project I managed and within just a few weeks he picked up our front-end and back-end frameworks. After only a month, Mingli was assigned bigger projects to automate and streamline manual tasks. He managed this while still delivering front-end enhancements to improve our user's experience while navigating our site, IBM Technology Zone. I realized quickly Mingli was dedicated, hard-working, and could think out of the box. He was always open to trying something new, providing feedback, and contributing his innovative solutions to support our team's initiatives. Mingli also is so much fun to work with. Mingli's personality shined this summer as he was able to make connections with a whole remote working team and fit right in. I would have no hesitation in recommending Mingli to any potential company seeking new talent.",
        name: "Brooke Jones",
        designation: "Product Manager",
        company: "IBM",
        image: "https://media.licdn.cn/dms/image/C4E03AQGOBHLaZGeegA/profile-displayphoto-shrink_400_400/0/1638124922331?e=1694649600&v=beta&t=lJogkDQgzxagezCl75gltQ-pzdzo2S-mAcsoKyk79Hg",
    },
];

const projects = [
    {
        name: "ChampionPDI",
        description:
            "Web-based platform designed for cutco that allows its sells agents to manage demos and prospects, and managers to view, monitor and better support their agents. I am the tech lead of this project and lead a 6 person devleopment team.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "Git",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Miao Miao Social App",
        description: "",
        tags: [
            {
                name: "firebase",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "HTML,CSS,&JS",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Fake News Detection",
        description: "",
        tags: [
            {
                name: "sklearn",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "Jupyter Notebook",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link:
            "https://github.com/MingliZhang/COMP-562-Final-Project",
    },
    {
        name: "One Pixel Attack Defense",
        description: "",
        tags: [
            {
                name: "PyTourch",
                color: "blue-text-gradient",
            },
            {
                name: "Python",
                color: "green-text-gradient",
            },
            {
                name: "Image Processing",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/MingliZhang/comp-755-final",
    },
    {
        name: "SplinterDB",
        description: "",
        tags: [
            {
                name: "C",
                color: "blue-text-gradient",
            },
            {
                name: "KV store",
                color: "green-text-gradient",
            },
            {
                name: "Research",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/vmware/splinterdb",
    },
    {
        name: "HDX",
        description: "",
        tags: [
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "AWS",
                color: "green-text-gradient",
            },
            {
                name: "Flask",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/MingliZhang/hdxMobile",
    },
    {
        name: "Easy Access",
        description: "",
        tags: [
            {
                name: "Sails JS",
                color: "blue-text-gradient",
            },
            {
                name: "React JS",
                color: "green-text-gradient",
            },
            {
                name: "MongoDB",
                color: "pink-text-gradient",
            },
            {
                name: "Firebase",
                color: "red-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "First Portfolio",
        description: "",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Next Portfolio",
        description: "",
        tags: [
            {
                name: "Next JS",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "This Portfolio",
        description: "",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Email JS",
                color: "green-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "pink-text-gradient",
            },
            {
                name: "Three JS",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export {
    intro,
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    contacts,
};
