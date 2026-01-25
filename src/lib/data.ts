import { Code, Smartphone, PenTool, Bot, Search, LifeBuoy } from 'lucide-react';
import type { ComponentType } from 'react';

// Navigation
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact Us' },
];

// Services
export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  icon: ComponentType<{ className?: string }>;
  imageId: string;
};

export const services: Service[] = [
  {
    slug: 'custom-website-development',
    title: 'Custom Website Development',
    shortDescription: 'Responsive, SEO-friendly websites that convert visitors into customers.',
    description: 'We build beautiful, high-performance websites from the ground up, tailored to your brand. Our focus on clean architecture and SEO best practices ensures your site is fast, scalable, and ranks well on search engines.',
    longDescription: 'Our custom website development service provides a complete solution for your online presence. We handle everything from UI/UX design to backend development and deployment. We use modern technologies like Next.js and Tailwind CSS to create fast, responsive, and maintainable websites. Every site is built with SEO in mind from day one, ensuring you get the visibility you deserve.',
    icon: Code,
    imageId: 'service-web-dev',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform mobile apps for iOS and Android.',
    description: 'Engage your users on the go with intuitive and powerful mobile applications. We develop for both Android and iOS, ensuring a consistent and high-quality experience for all your users.',
    longDescription: 'From concept to launch, we guide you through the mobile app development process. We specialize in building both native (Swift/Kotlin) and cross-platform (React Native) applications. Our process includes a deep dive into your business goals to ensure the final product is not just a great app, but a tool that drives your business forward.',
    icon: Smartphone,
    imageId: 'service-app-dev',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'User-centric design that balances aesthetics with functionality.',
    description: 'We create compelling user interfaces and seamless user experiences that delight users and achieve business objectives. Our designs are intuitive, accessible, and optimized for performance.',
    longDescription: 'A great product starts with a great user experience. Our UI/UX design process is collaborative and research-driven. We conduct user research, create wireframes and prototypes, and perform usability testing to ensure the final design is one that your users will love. We focus on creating clean, modern, and accessible interfaces.',
    icon: PenTool,
    imageId: 'service-ui-ux',
  },
  {
    slug: 'ai-ml-solutions',
    title: 'AI/ML Solutions',
    shortDescription: 'Integrate intelligent features to automate and enhance your products.',
    description: 'Leverage the power of Artificial Intelligence and Machine Learning to build smarter applications. From chatbots to predictive analytics, we help you unlock new capabilities.',
    longDescription: 'We help you integrate cutting-edge AI and Machine Learning models into your applications. Our expertise includes natural language processing (NLP), computer vision, and predictive modeling. We can help you build features like recommendation engines, automated content moderation, and intelligent search to give you a competitive edge.',
    icon: Bot,
    imageId: 'service-ai-ml',
  },
  {
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    shortDescription: 'Improve your search engine rankings and attract organic traffic.',
    description: 'Our SEO services are designed to increase your visibility on search engines like Google. We use a data-driven approach to content, technical SEO, and link building.',
    longDescription: 'Being found online is critical. Our SEO services cover all aspects of search engine optimization, including on-page SEO, technical SEO, content strategy, and local SEO. We start with a comprehensive audit to identify opportunities and create a roadmap for improving your rankings and driving qualified organic traffic to your website.',
    icon: Search,
    imageId: 'service-seo',
  },
  {
    slug: 'support-maintenance',
    title: 'Support & Maintenance',
    shortDescription: 'Ongoing support to keep your digital products running smoothly.',
    description: 'We offer flexible support and maintenance plans to ensure your applications are always up-to-date, secure, and performing optimally.',
    longDescription: 'Technology is always evolving. Our support and maintenance plans give you peace of mind, knowing that your digital assets are in good hands. We handle security patches, performance monitoring, bug fixes, and regular updates, allowing you to focus on your business.',
    icon: LifeBuoy,
    imageId: 'service-support',
  },
];

// Team
export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageId: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Founder & Lead Developer',
    bio: 'With over a decade of experience in software architecture, Alex is passionate about building scalable and robust systems that solve real-world problems.',
    imageId: 'team-1',
  },
  {
    id: 2,
    name: 'Samantha Lee',
    role: 'Head of Design',
    bio: 'Samantha believes that great design is about empathy. She leads our design team to create user experiences that are both beautiful and intuitive.',
    imageId: 'team-2',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Senior Mobile Engineer',
    bio: 'Michael is an expert in mobile development for both iOS and Android. He loves tackling complex challenges and pushing the boundaries of mobile technology.',
    imageId: 'team-3',
  },
];

// Projects
export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageId: string;
};

export const projects: Project[] = [
    { title: 'Fintech Startup Platform', description: 'A web app for personal finance management and investment tracking.', tags: ['Web App', 'Next.js', 'UI/UX'], imageId: 'project-1' },
    { title: 'Health & Wellness Mobile App', description: 'An iOS and Android app for tracking fitness goals and connecting with trainers.', tags: ['Mobile App', 'React Native'], imageId: 'project-2' },
    { title: 'E-commerce Marketplace', description: 'A scalable online marketplace for independent artists.', tags: ['E-commerce', 'SEO', 'Web App'], imageId: 'project-3' },
    { title: 'SaaS Analytics Dashboard', description: 'A data-intensive dashboard for a B2B SaaS company.', tags: ['Data Visualization', 'Web App'], imageId: 'project-4' },
];

// Testimonials
export type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

export const testimonials: Testimonial[] = [
    { quote: "AppyWeb Solutions transformed our vision into a reality. Their team is professional, skilled, and incredibly responsive.", name: "Jyoti Mishra", company: "CEO of Innovate Inc." },
    { quote: "The new mobile app has significantly boosted our user engagement. The design is fantastic and the performance is flawless.", name: "Santosh Bhat", company: "Founder of ConnectCo" },
    { quote: "Their attention to detail and commitment to quality is second to none. I would highly recommend them to any startup.", name: "Puja Sharma", company: "Marketing Director at Growthify" },
];

// Blog Posts
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageId: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
    { 
        slug: '10-signs-your-startup-is-ready-to-scale', 
        title: '10 Signs Your Startup is Ready to Scale', 
        excerpt: 'Scaling a startup is a critical phase. How do you know if you\'re ready? Here are 10 signs to look for...', 
        date: '2024-07-15', 
        author: 'Alex Johnson', 
        imageId: 'blog-post-1',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>'
    },
    { 
        slug: 'the-future-of-ui-ux-design-trends-for-2025', 
        title: 'The Future of UI/UX: Design Trends for 2025', 
        excerpt: 'The world of design is always evolving. We explore the upcoming trends that will shape user experiences in 2025 and beyond.', 
        date: '2024-06-28', 
        author: 'Samantha Lee', 
        imageId: 'blog-post-2',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>'
    },
    { 
        slug: 'choosing-the-right-tech-stack-for-your-web-app', 
        title: 'Choosing the Right Tech Stack for Your Web App', 
        excerpt: 'The technology you choose can make or break your project. Here\'s a guide to help you decide on the right tech stack.', 
        date: '2024-06-10', 
        author: 'Alex Johnson', 
        imageId: 'blog-post-3',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>'
    },
];


// Careers
export type JobOpening = {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
};

export const jobOpenings: JobOpening[] = [
    { 
        id: 'frontend-dev',
        title: 'Senior Frontend Developer', 
        location: 'Remote', 
        type: 'Full-time', 
        description: 'We are looking for an experienced Frontend Developer to join our team. You will be responsible for building the next generation of our user interfaces.',
        requirements: ['5+ years of experience with React or a similar framework.', 'Expertise in HTML, CSS, and JavaScript (TypeScript preferred).', 'Experience with modern build tools and CI/CD pipelines.', 'A portfolio of past work.']
    },
    { 
        id: 'backend-dev',
        title: 'Backend Developer (Node.js)', 
        location: 'Remote', 
        type: 'Full-time', 
        description: 'You will work on the server-side logic, definition, and maintenance of our central database, and ensure high performance and responsiveness to requests from the frontend.',
        requirements: ['3+ years of experience with Node.js.', 'Experience with database technologies like PostgreSQL or MongoDB.', 'Knowledge of RESTful API design.', 'Familiarity with cloud services (AWS, Google Cloud).']
    },
    { 
        id: 'product-manager',
        title: 'Product Manager', 
        location: 'Remote', 
        type: 'Full-time', 
        description: 'We are looking for a Product Manager to guide the success of our products and lead the cross-functional team that is responsible for improving it.',
        requirements: ['Proven experience as a Product Manager in a software company.', 'Excellent communication and leadership skills.', 'Experience with agile development methodologies.', 'Ability to translate business goals into technical requirements.']
    },
];
