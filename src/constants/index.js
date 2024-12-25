import {
    faLinkedin,
    faInstagram,
    faFacebook,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
    techZone,
    cymantix,
    ibm,
    threejs,
    championpdiicon,
    byteDance,
    lenovo,
    firebase,
    C,
    Cpp,
    unc,
    attack,
    CD2030,
    championpdi,
    covid,
    easyAccess,
    firstPortfolio,
    game,
    graphics,
    hdxMobile,
    miaomiao,
    news,
    nextPortfolio,
    pattie,
    seamCarving,
    splinterDB,
    thisPortfolio,
} from '../assets';
import { attackReport, newsReport } from '../../documents';

const intro = `I'm a skilled software engineer with experience in full stack development and machine learning engineer. I'm a quick learner and collaborate closely with teammates and clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!`;

export const navLinks = [
    {
        id: '/',
        title: 'Overview',
    },
    {
        id: '/work',
        title: 'Work',
    },
    {
        id: '/projects',
        title: 'Projects',
    },
    {
        id: '/contact',
        title: 'Contact',
    },
];

const contacts = [
    {
        link: 'https://github.com/MingliZhang/',
        icon: faGithub,
        text: '@MingliZhang',
    },
    {
        link: 'https://www.facebook.com/mike.zhang.792303/',
        icon: faFacebook,
        text: '@Mike Zhang',
    },
    {
        link: 'https://www.instagram.com/mingli_zhang/',
        icon: faInstagram,
        text: '@Mingli Zhang',
    },
    {
        link: 'https://www.linkedin.com/in/mingli-zhang/',
        icon: faLinkedin,
        text: '@Mingli Zhang',
    },
    {
        link: 'mailto:minglizhang2000@outlook.com',
        icon: faEnvelope,
        text: 'minglizhang2000@outlook.com',
    },
    {
        link: 'tel:9192745562',
        icon: faPhone,
        text: '(919)274-5562',
    },
];

const services = [
    {
        title: 'Work',
        icon: web,
        link: '/work',
    },
    {
        title: 'Projects',
        icon: mobile,
        link: '/projects',
    },
    {
        title: 'Contact',
        icon: backend,
        link: '/contact',
    },
    // {
    //     title: "Software Developer",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'Next JS',
        icon: next,
    },
    {
        name: 'Firebase',
        icon: firebase,
    },
    {
        name: 'C',
        icon: C,
    },
    {
        name: 'C++',
        icon: Cpp,
    },
];
const whiteBg = '#E6DEDD';
const blackBg = '#383E56';

const experiences = [
    {
        title: 'Machine Learning Backend Engineer',
        company_name: 'ByteDance',
        icon: byteDance,
        iconBg: whiteBg,
        date: 'January 2024 - Present',
        points: [
            'Built a Text-to-SQL AI agent with LangChain to automate natural language-to-SQL queries, integrated RAG for schema fetching, and enhanced ByteDance’s network monitoring service, saving hundreds of human hours monthly across all offices by streamlining network diagnostics.',
            'Developed and fine-tuned computer vision algorithms using YOLO for human detection, DeepSort for people tracking, and Mmpos for action detection to automate server room monitoring across 1,000+ global sites.',
            'Implemented a network diagnostic AI chatbot for a commercialized product based on Swarm, enabling non-technical users to diagnose network issues by retrieving and analyzing monitoring data, streamlining deployment for small businesses and reducing reliance on network specialists.',
            'Developed backend services using FastAPI (for Text-to-SQL and Network Diagnostic) and gRPC (for Computer Vision) to expose machine learning models and support client interaction. Implemented authentication, managed deployment, and ensured service health. Led real-time output streaming to enhance user experience and provide instant feedback.',
            'Collaborate with clients, product managers, and team members to clarify requirements, manage expectations, suggest alternative engineering solutions when needed, and brainstorm optimal approaches, ensuring clear communication and alignment across all stakeholders.',
        ],
    },
    {
        title: 'Lead Software Engineer (Part Time)',
        company_name: 'ChampionPDI',
        icon: championpdiicon,
        iconBg: whiteBg,
        date: 'October 2021 - Jan 2023',
        points: [
            'Led a team of 6 developers to successfully launch a sales representative management platform that gained 200+ users in the first week.',
            'Initiated weekly scrum meetings, code reviews, and tech talks, which reduced learning costs and enabled all developers to contribute quality code after just 1 month.',
            'Delivered a production-quality web application within just 2 months using HTML, CSS, JavaScript, and WebPack for frontend and Firebase backend.',
            'Transitioned the project to React post-launch, which resulted in a 60% reduction in database queries and a 50% faster loading speed.',
            'Introduced release management processes and automated deployment through Github, which saved 4 hours weekly in resolving code conflicts and rolling out bug fixes.',
        ],
    },
    {
        title: 'Software Engineer (Part Time)',
        company_name: 'Cymantix',
        icon: cymantix,
        iconBg: whiteBg,
        date: 'October 2021 - Jan 2023',
        points: [
            "Identified and resolved communication issues proactively between clients and engineers, which boosted the company's reputation and gained 3 additional clients.",
            'Investigated replacing K-Means with Hierarchical clustering, which reduced computation and user wait time by 10%-60%.',
            'Optimized real-time news analysis using multithreading and Socket.io and decreased user wait time by 90%.',
            'Created a full-stack machine-learning-driven data analytics platform in a global team of 5 engineers that secured seed-round funding.',
            'Refactored codebase to Next.js and added animations using D3.js, which reduced 20% code redundancy and provided a smoother user experience.',
            "Integrated Microsoft Azure into our platform, which provided login options and secure data storage from Microsoft's cloud. Resulted in a cost-effective transition for users and gained 2 non-profit organizations as clients within 1 week.",
        ],
    },
    {
        title: 'Full-Stack Engineer (Summer Intern)',
        company_name: 'IBM',
        icon: ibm,
        iconBg: whiteBg,
        date: 'May 2021 - Aug 2021',
        points: [
            'Co-founded an automated validation service using SailsJS that streamlined database maintenance and saved the team $14,000 annually by eliminating headcounts for manual tasks.',
            'Enhanced user experience based on user feedback using NextJS, which expanded the monthly user base to over 12,000+ IBMers.',
            'Streamlined administrative content processes, achieved faster content updates, and reduced redeployments by over 20 per week.',
        ],
    },
    {
        title: 'Research Assistant',
        company_name: 'UNC - CH, LAIR ',
        icon: unc,
        iconBg: '#E6DEDD',
        date: 'April 2021 - May 2023',
        points: [
            'Worked on different projects as a full stack developer as well as a mobile developer.',
        ],
    },
    {
        title: 'UI/UX Designer Summer Intern',
        company_name: 'Lenovo',
        icon: lenovo,
        iconBg: whiteBg,
        date: 'June 2017 - Auguest 2017',
        points: [
            "Designed Lenovo's B2B web store using the program MockingBot with a team of three other individuals.",
            "Attended meetings with the marketing and human resources to discuss the resources necessary for the project's success.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I have the pleasure to work with Mingli throughout the time at UNC LAIR and Cymantix. With a solid foundation in CS and Math, Mingli has demonstrated outstanding capabilities in logical thinking. He's the software engineer that embodies genuine passion about knowledge, extraordinary learning speed and initiatives, and diligent working attitude. I could not recommend him enough!",
        name: 'Xinzhao Li',
        designation: 'Tech Lead',
        company: 'Cymantix',
        image: 'https://media.licdn.cn/dms/image/C4E03AQFQuIeI4eHquA/profile-displayphoto-shrink_400_400/0/1573494512736?e=1694649600&v=beta&t=qBVA77lIHcl5aYs6eqlYXlCNe5yhrpkvnAcpdLrAYZ8',
    },
    {
        testimonial:
            'Mingli worked on my project, Easy Access, as part of a advanced-level undergraduate course at UNC that matches teams of 3-4 upper-level computer science majors with software clients. Mingli single-handedly proposed and created a redesign of our back-end system using a sails.js framework connected to MongoDB. He showed great initiative in suggesting and designing changes to our system. Overall, Mingli is a highly skilled, diligent, and innovative programmer, good communicator, and a hard worker. I would highly recommend him for any project, job, or graduate program. It was a pleasure working with Mingli. Thank you so much for your help!',
        name: 'Vitaly Radsky',
        designation: 'COO',
        company: 'Easy Access',
        image: 'https://media.licdn.cn/dms/image/C4E03AQGnvEODnb-32A/profile-displayphoto-shrink_400_400/0/1546453608433?e=1694649600&v=beta&t=3WbKD7k7SfIyl1UCgTeCPOUbLses099X9GYTMDN--oY',
    },
    {
        testimonial:
            "Mingli has an impressive ability to learn quickly, which  experienced first-hand during his 11-week internship at IBM this past summer. Mingli joined the development team that project I managed and within just a few weeks he picked up our front-end and back-end frameworks. After only a month, Mingli was assigned bigger projects to automate and streamline manual tasks. He managed this while still delivering front-end enhancements to improve our user's experience while navigating our site, IBM Technology Zone. I realized quickly Mingli was dedicated, hard-working, and could think out of the box. He was always open to trying something new, providing feedback, and contributing his innovative solutions to support our team's initiatives. Mingli also is so much fun to work with. Mingli's personality shined this summer as he was able to make connections with a whole remote working team and fit right in. I would have no hesitation in recommending Mingli to any potential company seeking new talent.",
        name: 'Brooke Jones',
        designation: 'Product Manager',
        company: 'IBM',
        image: 'https://media.licdn.cn/dms/image/C4E03AQGOBHLaZGeegA/profile-displayphoto-shrink_400_400/0/1638124922331?e=1694649600&v=beta&t=lJogkDQgzxagezCl75gltQ-pzdzo2S-mAcsoKyk79Hg',
    },
];

const projectIntro =
    'Following projects showcases my skills and experience through work/research projects and school projects. Each project is briefly described with links to code repositories as well as research result paper or live demos in it if avaliable. It reflects my ability to solve complex problems, work with different technologies, and lead development teams to deliver on time.';

const projects = [
    {
        name: "IBM's Tech Zone",
        description:
            'A platform for IBM to share its environments between development teams internally and contracted parties. I worked on this project during my internship at IBM as a full stack developer.',
        tags: [
            {
                name: 'Next JS',
                color: 'blue-text-gradient',
            },
            {
                name: 'Carbon',
                color: 'green-text-gradient',
            },
            {
                name: 'Sails JS',
                color: 'pink-text-gradient',
            },
        ],
        image: techZone,
        githubLink:
            'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjEnL2Q6JSAAxWWZ_UHHSSbCnEQFnoECBIQAQ&url=https%3A%2F%2Ftechzone.ibm.com%2F&usg=AOvVaw3f1u0N_QY5xma7nAQeW-hV&opi=89978449',
    },
    {
        name: 'ChampionPDI',
        description:
            'Web-based platform designed for cutco that allows its sells agents to manage demos and prospects, and managers to view, monitor and better support their agents. I am the tech lead of this project and lead a 6 developer team.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'firebase',
                color: 'green-text-gradient',
            },
            {
                name: 'Git',
                color: 'pink-text-gradient',
            },
        ],
        image: championpdi,
        site: 'https://championpdi.web.app/',
    },
    {
        name: 'Pattie',
        description:
            'A machine learning based search engine for medical documents. It clusters results so that users can find the document they need more acurratly and efficently. I was a software developer on the project and helped secure seed role funding.',
        tags: [
            {
                name: 'Sklearn',
                color: 'blue-text-gradient',
            },
            {
                name: 'Flask',
                color: 'green-text-gradient',
            },
            {
                name: 'React',
                color: 'pink-text-gradient',
            },
            {
                name: 'PyScript',
                color: 'orange-text-gradient',
            },
        ],
        image: pattie,
    },
    {
        name: 'Miao Miao Social App',
        description:
            'A social platform that supports chat through sockets and some games to compete with each other. I lead a team of 4 peers to finish this end of course project and demonstrated our web dev abilities.',
        tags: [
            {
                name: 'firebase',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'HTML,CSS,&JS',
                color: 'pink-text-gradient',
            },
        ],
        image: miaomiao,
        githubLink: 'https://github.com/MingliZhang/final_426',
        site: 'https://comp426-firebase.web.app/',
    },
    {
        name: 'Fake News Detection',
        description:
            'Collaborated with three classmates, used logistic regression, Naive Bayes, support vector machine, and LSTM to train the computer to distinguish between real and fake news. We also compared the accuracy of each model. The data is from Kaggle.',
        tags: [
            {
                name: 'sklearn',
                color: 'blue-text-gradient',
            },
            {
                name: 'python',
                color: 'green-text-gradient',
            },
            {
                name: 'Jupyter Notebook',
                color: 'pink-text-gradient',
            },
        ],
        image: news,
        githubLink: 'https://github.com/MingliZhang/COMP-562-Final-Project',
        doc: newsReport,
    },
    {
        name: 'One Pixel Attack Defense',
        description:
            'An experiment on defending against one pixel attack or adverserial attacks using seam carving as the pre-processing step for CNN. The experiment was only half success as the attack success rate was limited due to computation power limits.',
        tags: [
            {
                name: 'PyTourch',
                color: 'blue-text-gradient',
            },
            {
                name: 'Python',
                color: 'green-text-gradient',
            },
            {
                name: 'Image Processing',
                color: 'pink-text-gradient',
            },
        ],
        image: attack,
        githubLink: 'https://github.com/MingliZhang/comp-755-final',
        doc: attackReport,
    },
    {
        name: 'SplinterDB',
        description:
            'A research project on SplinterDB, a modern KV store system developed by VMWare. I was in charge of decoupling the cache lookup table from storeage size and couple it with the actural cache size.',
        tags: [
            {
                name: 'C',
                color: 'blue-text-gradient',
            },
            {
                name: 'KV store',
                color: 'green-text-gradient',
            },
            {
                name: 'Research',
                color: 'pink-text-gradient',
            },
        ],
        image: splinterDB,
        githubLink: 'https://github.com/vmware/splinterdb',
    },
    {
        name: '2D Graphics',
        description:
            'Implemented a C++ graphics library that can draw polygons, shaders, and much more.',
        tags: [
            {
                name: 'Sails JS',
                color: 'blue-text-gradient',
            },
            {
                name: 'React JS',
                color: 'green-text-gradient',
            },
            {
                name: 'MongoDB',
                color: 'pink-text-gradient',
            },
            {
                name: 'Firebase',
                color: 'orange-text-gradient',
            },
        ],
        image: graphics,
        githubLink: 'https://github.com/MingliZhang/COMP-475',
    },
    {
        name: 'Seam Carving',
        description:
            "A 'smart' way to perform image resizing without loosing much important information by utalizing a per pixel weight map and dynamic programming.",
        tags: [
            {
                name: 'Matlab',
                color: 'blue-text-gradient',
            },
            {
                name: 'Dynamic Programming',
                color: 'green-text-gradient',
            },
        ],
        image: seamCarving,
        githubLink: 'https://github.com/MingliZhang/COMP-572',
        site: 'https://www.youtube.com/watch?v=K0JNBQBAtys',
    },
    {
        name: 'COUNTDOWN2030',
        description:
            "Data visualization for UNICEF. This is the project from my college's information science lab CHIP.",
        tags: [
            {
                name: 'Tableau',
                color: 'blue-text-gradient',
            },
            {
                name: 'Wordpress',
                color: 'green-text-gradient',
            },
        ],
        image: CD2030,
        site: 'https://data.unicef.org/countdown-2030/',
    },
    {
        name: 'HDX',
        description:
            'A mobile application for health data exchange. I am in charge of all of the mobile side and also worked with another college on the api and web development.',
        tags: [
            {
                name: 'React Native',
                color: 'blue-text-gradient',
            },
            {
                name: 'AWS',
                color: 'green-text-gradient',
            },
            {
                name: 'Flask',
                color: 'pink-text-gradient',
            },
        ],
        image: hdxMobile,

        githubLink: 'https://github.com/MingliZhang/hdxMobile',
    },
    {
        name: 'Easy Access',
        description:
            'A platform for high school students that cannot get enough consultation for college application. The project was brought to me for a coures and passed on to future developers.',
        tags: [
            {
                name: 'Sails JS',
                color: 'blue-text-gradient',
            },
            {
                name: 'React JS',
                color: 'green-text-gradient',
            },
            {
                name: 'MongoDB',
                color: 'pink-text-gradient',
            },
            {
                name: 'Firebase',
                color: 'red-text-gradient',
            },
        ],
        image: easyAccess,
        githubLink: 'https://github.com/viradsky/EasyAccessCounselor',

        site: 'https://counselors.easyaccess.education/',
    },
    {
        name: 'How to get away from Covid 19',
        description:
            'Project for the 2020 fall Hackathon. Created with three others within 24 hours. The web app consisits of a covide-related game and a physical timer for washing hands.',
        tags: [
            {
                name: 'Sails JS',
                color: 'blue-text-gradient',
            },
            {
                name: 'React JS',
                color: 'green-text-gradient',
            },
            {
                name: 'MongoDB',
                color: 'pink-text-gradient',
            },
            {
                name: 'Firebase',
                color: 'red-text-gradient',
            },
        ],
        image: covid,
        githubLink:
            'https://github.com/MingliZhang/How-to-Get-Away-from-Covid-19',
    },
    {
        name: '2048',
        description:
            'Implemented the classic 2048 game with a game model for modern web development course using the MVC structure design. The entire project took a day to finish and debug.',
        tags: [
            {
                name: 'JQuery',
                color: 'blue-text-gradient',
            },
            {
                name: 'MVC',
                color: 'green-text-gradient',
            },
        ],
        image: game,
        githubLink: 'https://github.com/MingliZhang/2048',

        site: 'https://minglizhang-first.web.app/2048/index.html',
    },
    {
        name: 'First Portfolio',
        description:
            'My first portfoilo using only HTML, CSS, and vanilla JavaScript. Helped my secure a summer internship at IBM.',
        tags: [
            {
                name: 'HTML',
                color: 'blue-text-gradient',
            },
            {
                name: 'CSS',
                color: 'green-text-gradient',
            },
            {
                name: 'JavaScript',
                color: 'pink-text-gradient',
            },
        ],
        image: firstPortfolio,
        githubLink: 'https://github.com/MingliZhang/portfolio',
        site: 'https://minglizhang-first.web.app/',
    },
    {
        name: 'Next Portfolio',
        description:
            'My second portfolio, it was a side project to learn Next.js and tailwindcss by hands on projects. The content is not updated anymore tho.',
        tags: [
            {
                name: 'Next JS',
                color: 'blue-text-gradient',
            },
            {
                name: 'firebase',
                color: 'green-text-gradient',
            },
            {
                name: 'TailwindCSS',
                color: 'pink-text-gradient',
            },
        ],
        image: nextPortfolio,
        githubLink: 'https://github.com/MingliZhang/portfolio-next',
        site: 'https://minglizhang-next.web.app/',
    },
    {
        name: 'This Portfolio',
        description:
            'The portfolio you are currently viewing. It is more efficient, more elegant interface, and easy to expand.',
        tags: [
            {
                name: 'React',
                color: 'blue-text-gradient',
            },
            {
                name: 'Email JS',
                color: 'green-text-gradient',
            },
            {
                name: 'TailwindCSS',
                color: 'pink-text-gradient',
            },
            {
                name: 'Three JS',
                color: 'orange-text-gradient',
            },
        ],
        image: thisPortfolio,
        githubLink: 'https://github.com/MingliZhang/portfolio-react',
        site: 'https://minglizhang.com/',
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
    projectIntro,
};
