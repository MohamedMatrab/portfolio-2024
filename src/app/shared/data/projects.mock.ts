import { Project } from 'src/app/models/project.interface';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Portfolio',
    tags: ['Angular', 'Typescript', 'Tailwind', 'SSR'],
    description:
      'It shows my work and skills, developed using Angular 17 with Tailwind. A standalone angular project with SSR that incorporates eslint for code quality.',
    url: 'https://uspiri.com/',
    repo: 'https://github.com/USpiri/uspiri.com',
  },
  {
    id: '11',
    title: 'Blog',
    tags: ['Astro', 'Typescript', 'MDX', 'Tailwind'],
    description:
      'Made with Astro, my personal blog project is a static site dedicated to sharing development content. ',
    url: 'https://uspiri.github.io/',
    repo: 'https://github.com/USpiri/uspiri.github.io',
  },
  {
    id: '2',
    title: 'Raices Nativas',
    tags: ['Angular', 'Material', 'Bootstrap'],
    description:
      'Raíces Nativas is an exciting project in collaboration with biology students from the National University of Córdoba (UNC) to promote the conservation of native plant species. ',
    url: 'https://raices-nativas.vercel.app/',
    repo: 'https://github.com/USpiri/raices-nativas',
  },
  {
    id: '3',
    title: 'Todo CLI',
    tags: ['Rust'],
    description:
      'Command line program written in Rust that allows local task management.',
    url: '',
    repo: 'https://github.com/USpiri/todo',
  },
  {
    id: '4',
    title: 'Devly CLI',
    tags: ['Rust'],
    description:
      'Devly CLI is an ongoing Rust project that assists in the application development process.',
    url: '',
    repo: 'https://github.com/USpiri/devly',
  },
  {
    id: '5',
    title: 'StickyNotes',
    tags: ['Angular', 'Angular SDK'],
    description:
      'One of my first projects developed in Angular, providing a useful notes management that allows organization in tables and boards.',
    url: 'https://simple-sticky-notes.web.app/',
    repo: 'https://github.com/USpiri/StickyNotes',
  },
];
