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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  dofleini,
  github,
  ecommerce_techlines,
  calendar,
  threejs,
  world_countries,
  shorten_link,
  landing_page,
  social_network,
  beach_resort,
  deliveroo,
  guajiritos,
  uberclone,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'JavaScript Developer',
    icon: mobile,
  },
  {
    title: 'Frontend Developer',
    icon: backend,
  },
  {
    title: 'Full Stack Developer',
    icon: creator,
  },
  {
    title: 'Mobile Developer',
    icon: mobile,
  },
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
    name: 'Redux Toolkit',
    icon: redux,
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
];

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'Dofleini Software - (Full Time)',
    icon: dofleini,
    iconBg: '#383E56',
    date: 'August 2022 - September 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Guajiritos - (Internship contract)',
    icon: guajiritos,
    iconBg: '#383E56',
    date: 'January 2022 - February 2022',
    points: [
      'I participated in the development of projects associated with the state sector, contributing to the layout, responsive design and implementation of functionalities using Angular as the main development framework.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'GitHub',
    icon: github,
    iconBg: '#E6DEDD',
    date: 'April 2021 - March 2023',
    points: [
      'Since my time as a university student I have been partially dedicated to constant training in new technologies, tools, frameworks and good programming practices to raise my knowledge as a web developer.',
      'I have developed several educational projects using the most popular tools on the market today.',
    ],
  },
];

const projects = [
  {
    name: 'Uberclone - React Native Mobile App',
    description:
      'Mobile application that allows you to obtain directions between two user-defined places, using Google Maps services.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'react native',
        color: 'pink-text-gradient',
      },
      {
        name: 'tailwindCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'google maps services',
        color: 'pink-text-gradient',
      },
    ],
    image: uberclone,
    source_code_link: 'https://expo.dev/@roberto_code_1998/uber-clone?serviceType=classic&distribution=expo-go',
  },
  {
    name: 'Deliveroo - React Native Mobile App',
    description:
      'Mobile application that shows the restaurants availables by type of food and allows you to select the dishes from the menu to create a delivery order.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'react native',
        color: 'pink-text-gradient',
      },
      {
        name: 'tailwindCSS',
        color: 'green-text-gradient',
      },
    ],
    image: deliveroo,
    source_code_link: 'https://expo.dev/@roberto_code_1998/deliveroo-clone',
  },
  {
    name: 'Techlines - Ecommerce',
    description:
      'Website Ecommerce of technological products. Administrator panel for reading, editing, adding and deleting products, orders and users. Configuration of the Payment Gateway PayPal.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'blue-text-gradient',
      },
    ],
    image: ecommerce_techlines,
    source_code_link: 'https://techlines-7xpv.onrender.com/',
  },
  {
    name: 'Calendar - MERN',
    description: 'Calendar App with login and registration of users to set importants dates.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient',
      },
    ],
    image: calendar,
    source_code_link: 'https://calendar-backend-sage.vercel.app/',
  },
  {
    name: 'Beach Resort - REACT',
    description:
      'Beach Resort Website that show available rooms and allow to filter them according to they characteristics.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'html/css',
        color: 'pink-text-gradient',
      },
    ],
    image: beach_resort,
    source_code_link: 'https://beach-resort-roan.vercel.app/',
  },
  {
    name: 'Sociopedia - Social Network',
    description:
      'Website that simulates a social network with the main functionalities associated with the publication of images, registration, login and connections with other users.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'blue-text-gradient',
      },
    ],
    image: social_network,
    source_code_link: 'https://social-media-client-virid.vercel.app/',
  },
  {
    name: 'Easybank - Landing Page',
    description: 'Landing Page that describes the main features and services of a digital bank.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'webpack/babel',
        color: 'pink-text-gradient',
      },
    ],
    image: landing_page,
    source_code_link: 'https://easybank-pink.vercel.app/',
  },
  {
    name: 'Shortly',
    description: 'Website with a fantastic landing page that allows you to make the url links smaller.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'webpack/babel',
        color: 'pink-text-gradient',
      },
    ],
    image: shorten_link,
    source_code_link: 'https://url-shorting-peach.vercel.app/',
  },
  {
    name: 'World Countries',
    description:
      'Website that lists the flag of all countries and allows you to obtain specific information about each one.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'webpack/babel',
        color: 'pink-text-gradient',
      },
    ],
    image: world_countries,
    source_code_link: 'https://react-api-countries.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
