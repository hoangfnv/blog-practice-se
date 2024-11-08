import { ArticleOverview } from "@/external-adapter/base-api/useArticleOverviewList.ts";
import { http, HttpResponse } from "msw";

const articles: ArticleOverview[] = [
  {
    id: 'f8a1c0d8b8',
    title: 'The Future of Web Development: Trends in 2023',
    description: 'Explore the upcoming trends in web development that will shape the industry in 2023.',
    createAt: 1693745305000, // 2024-11-05 12:15:05
    tags: ['Web Development', 'Trends', '2023', 'Technology'],
  },
  {
    id: '9bfa739d42',
    title: 'Introduction to Cloud Computing and AWS',
    description: 'A beginner’s guide to understanding cloud computing and using AWS for deploying scalable applications.',
    createAt: 1692723600000, // 2024-08-23 09:00:00
    tags: ['Cloud Computing', 'AWS', 'DevOps', 'Technology'],
  },
  {
    id: 'fa3b2e6721',
    title: 'Optimizing Web Performance: Tips and Best Practices',
    description: 'Learn about various techniques to optimize web performance, from lazy loading to code splitting.',
    createAt: 1692172800000, // 2024-08-01 11:00:00
    tags: ['Web Performance', 'Optimization', 'Best Practices'],
  },
  {
    id: '7bdf6d66a9',
    title: 'Mastering React for Front-End Development',
    description: 'Learn how to build interactive user interfaces using React.js.',
    createAt: 1691716800000, // 2024-07-18 14:00:00
    tags: ['React', 'JavaScript', 'Web Development', 'Frontend'],
  },
  {
    id: '41d9f2e6b5',
    title: 'Understanding TypeScript',
    description: 'A comprehensive guide to learning TypeScript for JavaScript developers.',
    createAt: 1691505600000, // 2024-07-15 08:00:00
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Guide'],
  },
  {
    id: '8a2cfd49e6',
    title: 'GraphQL vs REST APIs: Which One to Choose?',
    description: 'A deep dive into the differences between GraphQL and REST APIs.',
    createAt: 1691419200000, // 2024-07-13 10:00:00
    tags: ['GraphQL', 'API', 'Web Development', 'Backend'],
  },
  {
    id: '6db328cf2e',
    title: 'CSS Grid: A Complete Guide',
    description: 'Master CSS Grid with this comprehensive guide, from basic concepts to advanced techniques.',
    createAt: 1691280000000, // 2024-07-10 13:00:00
    tags: ['CSS', 'Grid', 'Web Design', 'Frontend'],
  },
  {
    id: '7fc3f8d2c4',
    title: 'Node.js for Back-End Development',
    description: 'How to build scalable applications using Node.js on the server-side.',
    createAt: 1691193600000, // 2024-07-08 12:00:00
    tags: ['Node.js', 'Backend', 'JavaScript', 'Server'],
  },
  {
    id: '3c8579b59d',
    title: 'Introduction to Vue.js Framework',
    description: 'A beginner’s introduction to Vue.js for building reactive web interfaces.',
    createAt: 1690742400000, // 2024-06-29 09:00:00
    tags: ['Vue.js', 'JavaScript', 'Frontend', 'Web Development'],
  },
  {
    id: '4a7ed6b983',
    title: 'GraphQL: The Next Generation API',
    description: 'Explore why GraphQL is gaining traction as the API of the future.',
    createAt: 1690656000000, // 2024-06-27 15:00:00
    tags: ['GraphQL', 'API', 'Web Development'],
  },
  {
    id: '58bfc37c14',
    title: 'Building RESTful APIs with Express.js',
    description: 'A complete guide to creating RESTful APIs using Express.js and Node.js.',
    createAt: 1690396800000, // 2024-06-21 16:00:00
    tags: ['Node.js', 'Express.js', 'Backend', 'API'],
  },
  {
    id: 'f4a8b1b6d2',
    title: 'Introduction to Docker Containers',
    description: 'Learn how to containerize your applications with Docker and deploy them in any environment.',
    createAt: 1690128000000, // 2024-06-17 11:00:00
    tags: ['Docker', 'DevOps', 'Containers', 'Technology'],
  },
  {
    id: 'a8e03a06f1',
    title: 'Effective Testing in JavaScript with Jest',
    description: 'Learn how to use Jest for writing unit tests in JavaScript applications.',
    createAt: 1689811200000, // 2024-06-12 10:00:00
    tags: ['JavaScript', 'Testing', 'Jest', 'Development'],
  },
  {
    id: '2815fc0bb3',
    title: 'CSS Flexbox: A Beginner’s Guide',
    description: 'A beginner-friendly guide to using Flexbox for layout design in CSS.',
    createAt: 1689724800000, // 2024-06-10 08:00:00
    tags: ['CSS', 'Web Design', 'Frontend', 'Flexbox'],
  },
  {
    id: '2b94d8fa02',
    title: 'The Importance of Code Reviews in Software Development',
    description: 'How code reviews can help maintain code quality and improve team collaboration.',
    createAt: 1689417600000, // 2024-06-03 12:00:00
    tags: ['Code Reviews', 'Software Development', 'Collaboration'],
  },
  {
    id: 'e0dbb3ac88',
    title: 'A Guide to Modern JavaScript Features',
    description: 'Learn about the latest ECMAScript features in JavaScript, including optional chaining, nullish coalescing, and more.',
    createAt: 1689331200000, // 2024-06-01 11:00:00
    tags: ['JavaScript', 'ECMAScript', 'Features', 'Tutorial'],
  },
  {
    id: '2792a82b63',
    title: 'Introduction to Web Accessibility',
    description: 'A guide to making your web applications more accessible to all users, including those with disabilities.',
    createAt: 1688956800000, // 2024-05-24 10:00:00
    tags: ['Web Accessibility', 'Web Design', 'Inclusive Design'],
  },
  {
    id: 'e8f43bfbde',
    title: 'Python for Data Science: Getting Started',
    description: 'Learn how to use Python for data analysis and visualization in the world of data science.',
    createAt: 1688865600000, // 2024-05-22 14:00:00
    tags: ['Python', 'Data Science', 'Machine Learning', 'Tutorial'],
  },
  {
    id: '4204b084f7',
    title: 'Building Single Page Applications with Angular',
    description: 'A step-by-step guide to building SPAs using Angular, covering routing, components, and more.',
    createAt: 1688486400000, // 2024-05-15 12:00:00
    tags: ['Angular', 'SPA', 'JavaScript', 'Frontend'],
  },
  {
    id: 'a15cb6d0e4',
    title: 'Understanding Asynchronous JavaScript',
    description: 'An introduction to asynchronous programming in JavaScript, including callbacks, promises, and async/await.',
    createAt: 1688304000000, // 2024-05-13 13:00:00
    tags: ['JavaScript', 'Async', 'Programming', 'Tutorial'],
  },
];

const ArticleResponseSuccess = {
  status: 'success',
  data: articles
}

const getArticleList = http.get('https://api.blog-fe.com/articles', () => {
  return HttpResponse.json(ArticleResponseSuccess, {status: 200})
})

export const homeApis = [
  getArticleList
]
