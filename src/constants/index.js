import {
  backend,
  creator,
  mobile,
  web,
  github,
  livesite,
  linkedin,
  stackoverflow,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  express,
  graphql,
  mysql,
  postgresql,
  nextjs,
  php,
  python,
  sass,
  meta,
  shopify,
  starbucks,
  tesla,
  saferide,
  comps,
  henrystreetsettlement,
  nbnetsystems,
  josephblank,
  kig,
  cjlfinejewelry,
  lqdent,
  carrent,
  jobit,
  tripguide,
  compsusa,
  buysellmemo,
  stfcpro,
  facerecognition,
  nasaproject,
  robofriends,
  pastrykicks,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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

const myInfo = {
  name: "JoeCrash",
  email: "joeycrash135@gmail.com",
  github: "https://github.com/JoeCrash",
  linkedin: "https://www.linkedin.com/in/juan-medina-full-stack-developer/",
};

const services = [
  {
    title: "Frontend Development",
    points: [
      "HTML5 / CSS3",
      "React.js",
      "Bootstrap",
      "Web Workers",
      "Photoshop",
      "Illustrator",
    ],
    icon: web,
  },
  {
    title: "Backend Development",
    points: [
      "APIs",
      "GraphQL",
      "Next.js",
      "Microservices",
      "Express.js",
      "Worker Threads",
      "CI/CD Pipelines",
    ],
    icon: web,
  },
  {
    title: "Cloud",
    points: [
      "AWS EC2",
      "AWS S3",
      "AWS Lightsail",
      "AWS DynamoDB",
      "Mongo Atlas",
      "Worker Threads",
      "CI/CD Pipelines",
    ],
    icon: web,
  },
  {
    title: "Distributed Computing",
    points: ["Kubernetes", "Docker", "Websockets", "Worker Threads", "Pub/Sub"],
    icon: backend,
  },
  {
    title: "Data Persistence",
    points: [
      "MySQL / SQLite",
      "MariaDB",
      "PostGRESQL",
      "Mongo DB",
      "Flat File",
    ],
    icon: backend,
  },
  {
    title: "Custom Programming",
    points: [
      "Data Scraping",
      "OCR Software",
      "Discord Bots",
      "Content Management Systems",
      "Print Generators",
    ],
    icon: backend,
  },
  {
    title: "GIS",
    points: ["QGIS", "Leaflet.js", "GeoJSON", "Proj4", "Protobuf"],
    icon: backend,
  },
  {
    title: "Robotics",
    points: [
      "Fusion360",
      "Arduino",
      "Raspberry Pi",
      "Electronics",
      "3D Printing",
    ],
    icon: creator,
  },
];

const technologies = [
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "PHP",
    icon: php,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "COMPS Inc.",
    icon: comps,
    iconBg: "#ffffff",
    date: "March 2016 - Present",
    points: [
      "Led the development of the Comps Inc. SaaS application, serving as the principal engineer and architect for the project.",
      "Ported Real Estate software from FoxPro into a SaaS web application serving millions of property records to Realtor's, Bankers and County officials.",
      "Implemented select caching of queries to improve server response time resulting in a 500% page load decrease on average.",
      "Refactored code into an MVC pattern, additionally created MySQL stored procedures to ensure both desktop and web app's results always matched.",
      "Developed an admin backend system to facilitate subscriptions between both desktop and web application users.",
      "Developed a PDF report generator able to produce customizable report types using WKPDFTOHTML & pdf.js",
      "Developed data scraper software to extract property data from their relevant county sources for 11 counties in New York including NYC / Long Island.",
      "Developed a custom street maps application to show property records on a google style map. Generated mbtiles, MySQL to geojson parser.",
      "Reverse engineered their Desktop software serial key generator. Ported code to Javascript and PHP.",
      "Stopped subscription account sharing by implementing session checks / auto logout.",
    ],
  },
  {
    title: "Robotics Specialist",
    company_name: "Henry Street Settlement Inc",
    icon: henrystreetsettlement,
    iconBg: "#ffffff",
    date: "(Part Time) Oct 2020 - May 2022",
    points: [
      "Developed and taught lesson plans to teach teens how to create their own robotic cars using Arduino, from Design to Manufacture.",
      "Taught the kids about structural engineering by having them create a 12 foot functional bridge using popsicle sticks and 3d printed parts they prototyped.",
      "Manufacturing with everyday objects, old controllers, misc upcycled tech.",
      "3D Print preparation, operation and troubleshooting",
      "3D Modeling with Tinkercad.com & Fusion 360",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "NbNet Systems Inc",
    icon: nbnetsystems,
    iconBg: "#ffffff",
    date: "Mar 2015 - Mar 2016",
    points: [
      "Viana Hotel and Spas: Developed a client intake intranet allowing Viana's spa department to go fully paperless.",
      "SR Photos: Integrated the Stamps.com API to allow SR photos to buy postage for shipments directly through their backend.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Knupfer International Gems Inc.",
    icon: kig,
    iconBg: "#ffffff",
    date: "Oct 2013 - Mar 2015",
    points: [
      "Principal engineer and architect for 'BuySellMemo.com', an exchange network for KIG's clientele. Allowed KIG staff to broker 'memos' between their clients directly through the application, speeding up the process by hours to days per transaction.",
      "The system served as a central datastore and messaging service which enabled KIG to send multiple email and text messages with a single interface, eliminating their need to make multiple cold calls/emails to source their gemstones.",
      "Retail customers could browse inventory and purchase stones online.",
      "Vendors could request stone's on memo or purchase.",
      "Developed scripts to sync web app inventory with KIG's Quickbooks system.",
    ],
  },
  {
    title: "PHP Developer",
    company_name: "CJL Fine Jewelry Inc.",
    icon: cjlfinejewelry,
    iconBg: "#ffffff",
    date: "Mar 2013 - Oct 2013",
    points: [
      "Updated website code to latest standards, (HTML5, PHP5.6).",
      "Developed an admin backend to keep track of inventory, sales and repair jobs.",
      "Designed and managed a weekly newsletter campaign.",
      "Took photos and enhanced them with photoshop.",
      "Managed the eBay store.",
    ],
  },
  {
    title: "Lead Developer",
    company_name: "Liquid Entertainment Inc.",
    icon: lqdent,
    iconBg: "#ffffff",
    date: "Jun 2006 - May 2010",
    points: [
      "Pastry Kicks: ",
      "Developed several iterations of the Pastry interactive Flash Website.",
      "Used XML and XSL transformations to make the Flash website SEO friendly.",
      "Developed a Wordpress Blog to promote the Pastry brand.",
      "Developed the initial E-commerce site to start monetizing pastrykicks.com.",
      "Successfully executed very aggressive Search Engine Optimization to gain the #1 - 3 spots on google search for 'Pastry Shoes', 'Pastry Bags', & 'Pastry Accessories'",
      "Developed 2 games in Flash/Actionscript to promote the brand and keep users engaged on the website. 'Kick Whack' & 'The Simmons Sisters dress up game'",
      "Created dozens of Interactive Ad Displays for brand promotions",
      "Handled Administration/Maintenance of our dedicated servers running CentOS.",
      "Ciroc Vodka: ",
      "Developed a new years countdown interactive landing page with an e-mail subscription form.",
      "Atlantic Records: ",
      "Developed several landing pages and Interactive banner ads for upcoming artists.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Joe was able to port my FoxPro application into a webapp, speed my database searches and even updated my internal data collection tools. I really love being able to manage my desktop and web subscribers from my phone too.",
    name: "Keith Larsen",
    designation: "Owner/CEO",
    company: "COMPS Inc.",
    image: comps,
  },
  {
    testimonial:
      "Joe made it possible for me to reduce dozens of calls, texts and emails to source a gemstone into a single request from my website. He worked tirelessly to bring my ideas to life.",
    name: "Robert Knupfer",
    designation: "Owner",
    company: "KIG Gems Inc.",
    image: kig,
  },
];

const projects = [
  {
    name: "Compsusa",
    description:
      "Web-based platform that allows users to search detailed property info and generate custom real estate reports.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "JQuery",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: compsusa,
    source_code_link: "",
    live_link: "https://compsusa.com/",
  },
  {
    name: "Face Detection API",
    description:
      "Simple app that uses the Clarifai API to run facial detection on uploaded images.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API integration",
        color: "green-text-gradient",
      },
      {
        name: "postman",
        color: "pink-text-gradient",
      },
    ],
    image: facerecognition,
    source_code_link: "https://github.com/JoeCrash/face-recognition-api/",
    live_link: "",
  },
  {
    name: "Stfcpro Map",
    description:
      "An indispensable tool used by thousands of Star Trek Fleet Command players all over the world. I gave this out for free and have found 9 variations online so far. v2 runs on WebGL for faster mapping",
    tags: [
      {
        name: "Async js",
        color: "blue-text-gradient",
      },
      {
        name: "leaflet.js",
        color: "green-text-gradient",
      },
      {
        name: "html canvas",
        color: "pink-text-gradient",
      },
    ],
    image: stfcpro,
    source_code_link: "https://github.com/JoeCrash/stfc-galaxy-map",
    live_link: "",
  },
  {
    name: "Buysellmemo",
    description:
      "Innovative web app allowing KIG Gems to broker gemstone transactions between vendors and clientele.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Twilio API",
        color: "pink-text-gradient",
      },
    ],
    image: buysellmemo,
    source_code_link: "",
    live_link: "https://buysellmemo.com",
  },
  {
    name: "SpaceX Mission Control",
    description:
      "Launch, view and cancel fictional Space Launches for Nasa, pulls actual missions from the SpaceX unofficial API",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "postman",
        color: "pink-text-gradient",
      },
    ],
    image: nasaproject,
    source_code_link: "https://github.com/JoeCrash/nasa-project",
    live_link: "",
  },

  {
    name: "Robofriends",
    description:
      "Simple app built to pick up changes in React 18",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
    ],
    image: robofriends,
    source_code_link: "https://github.com/JoeCrash/robofriends",
    live_link: "",
  },
  {
    name: "Pastrykicks",
    description:
      "Ecommerce site for America's Number 1 Dance Sneaker",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Wordpress",
        color: "green-text-gradient",
      },
      {
        name: "Actionscript 3",
        color: "pink-text-gradient",
      },
      {
        name: "CentOS administration",
        color: "green-text-gradient",
      },
    ],
    image: pastrykicks,
    source_code_link: "",
    live_link: "https://lovepastry.com",
  },
];

export { myInfo, services, technologies, experiences, testimonials, projects };
