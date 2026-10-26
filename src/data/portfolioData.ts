import { BlogPost, EducationItem, ExperienceItem, Project, ServiceItem, Skill } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Enoch Yakubu',
  brandName: 'OJONUGWA',
  tagline: 'HELLO !',
  title: 'Fullstack Web Developer',
  subtitle: 'Passionate multi-disciplinary engineer operating at the intersection of electrical engineering, informatics, and civil engineering (génie civil). Driven by solving complex structural and technological challenges through automated systems, smart design, and technical precision as I advance my civil engineering studies.',
  email: 'enoch.yakubu@engineering.tech',
  discipline: 'Civil, Electrical & Informatics',
  specialization: 'Génie Civil & Smart Systems',
  availability: 'Available for Projects & Research',
  projectsCompleted: '35+',
  location: 'Global / Remote & On-site',
  phone: '+1 (555) 382-9014',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOodbaGy1LYpl0tSGcrR7auz1n28NXh5IHT0CqenEc2q78EUPNyW1exKhuN-VsRC5xyUrnvV-XE9ZKHtls8AKqkcpM5hGnqU19LxgfYJ3Rao_sITnE9GcMdvzIGca4X0wQ3vf4ph3QrchrDPzqHqt734O3o5fHqca02-FHQNOfJ4UD8BnjmXUYza3Hmh97j6wbU8RTVD_5AHK_s8aoatPaCuHbvaujK6wDeg2_nXgI3tdULcmCl9n3',
  aboutImage: 'https://lh3.googleusercontent.com/aida/AEtjO1XboSPDmK38ZofoAtVFjV8h20Fw5i5vNjwSuttjgxZ5ipywBvv-cie9FWk-IOZ0iEINVrhmdwWYCUNB89Z_bw71i0byjlUjSp_NYCHMcm9assYZdRwOM0e6w09F-gTkSgDjHMDSCgB_mrHazNKbD_spKpQCt30jVILsBPCd50uAthgm9auHL7m8Vk16qELGo3oNq8I2jCIXAAYBENo4919T3I0I5nHsLv9YvLiEJP-xfkp41dvvJAoGgA',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  }
};

export const SKILLS: Skill[] = [
  {
    name: 'Electrical Systems & Circuitry',
    percentage: 92,
    category: 'electrical',
    tags: ['Circuit Design', 'Microcontrollers', 'Power Distribution', 'PLC', 'PCB Layout']
  },
  {
    name: 'CAD, BIM & Structural Drafting',
    percentage: 85,
    category: 'civil',
    tags: ['AutoCAD', 'Autodesk Revit', 'Civil 3D', 'Structural Modeling', 'Parametric BIM']
  },
  {
    name: 'Informatics & Software Systems',
    percentage: 88,
    category: 'software',
    tags: ['React', 'TypeScript', 'Node.js', 'Python', 'REST/GraphQL', 'PostgreSQL']
  },
  {
    name: 'Embedded Systems & Automation',
    percentage: 82,
    category: 'electrical',
    tags: ['IoT Sensors', 'C/C++', 'Arduino / ESP32', 'SCADA', 'Actuator Controls']
  },
  {
    name: 'Civil Engineering (Génie Civil)',
    percentage: 78,
    category: 'civil',
    tags: ['Structural Mechanics', 'Soil & Foundation', 'Reinforced Concrete', 'Finite Element Analysis']
  },
  {
    name: 'Technical Computing & Analysis',
    percentage: 80,
    category: 'computing',
    tags: ['MATLAB / Simulink', 'Numerical Methods', 'Data Analysis', 'Structural Load Simulations']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'structural-health-iot',
    title: 'Smart Structural Health Monitoring System',
    category: 'embedded',
    categoryLabel: 'Embedded & IoT / Civil',
    summary: 'Real-time telemetry and wireless sensor mesh monitoring structural load, vibration, and micro-strain in civil infrastructure.',
    description: 'An integrated end-to-end telemetry system deploying ESP32 and strain gauge arrays across bridge girder points. Data streams over MQTT to a custom high-performance dashboard that plots real-time deflection curves and sounds predictive alerts when stress thresholds are exceeded.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop',
    tags: ['IoT Mesh', 'ESP32', 'React', 'TypeScript', 'MQTT', 'Structural Mechanics'],
    metrics: ['Sub-second latency', '16-channel strain logging', '99.98% uptime in field tests'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    date: '2024'
  },
  {
    id: 'cad-bim-automation',
    title: 'BIM Parametric Structural Modeling Toolkit',
    category: 'civil',
    categoryLabel: 'Civil & CAD Automation',
    summary: 'Automated Revit & Civil 3D pipeline for algorithmic concrete reinforcement and beam generation.',
    description: 'Developed custom computational geometry scripts and Revit plugins that translate architectural boundary specifications into fully dimensioned reinforced concrete structural layouts, cutting drafting turnaround time by 65%.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    tags: ['AutoCAD', 'Revit API', 'Python', 'Computational Geometry', 'Génie Civil'],
    metrics: ['65% time reduction', 'Automated clash detection', 'Eurocode & ACI compliant'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    date: '2024'
  },
  {
    id: 'engineering-portal',
    title: 'Enterprise Engineering Project Portal',
    category: 'web',
    categoryLabel: 'Fullstack Web Platform',
    summary: 'Collaborative cloud platform for engineering teams to manage field revisions, blueprints, and milestone logs.',
    description: 'A responsive web application featuring real-time collaborative blueprint annotations, PDF drawing versioning, team permission matrices, and interactive gantt scheduling tailored for civil and MEP contractors.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    tags: ['React 19', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Canvas API', 'WebSockets'],
    metrics: ['Instant vector annotations', 'Role-based access', 'Secure cloud storage'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    date: '2023'
  },
  {
    id: 'microgrid-balancer',
    title: 'Autonomous Smart Microgrid Load Balancer',
    category: 'embedded',
    categoryLabel: 'Electrical & Automation',
    summary: 'Hardware-in-the-loop power management balancing solar PV, battery storage, and dynamic electrical loads.',
    description: 'Engineered an intelligent switching controller that arbitrates between renewable generation and auxiliary battery banks based on predictive tariff curves and critical load prioritization.',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
    tags: ['Electrical Circuitry', 'PLC Logic', 'Power Electronics', 'Simulink', 'Modbus'],
    metrics: ['32% peak-load shaving', 'Seamless 12ms transfer', 'Zero blackout testing'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    date: '2023'
  },
  {
    id: 'concrete-fea-analyzer',
    title: 'Web-Based Finite Element Beam Analyzer',
    category: 'web',
    categoryLabel: 'Technical Computing / Web',
    summary: 'Interactive in-browser structural finite element simulation tool for bending moments and shear stresses.',
    description: 'A WebGL and numerical matrix solver that allows civil engineers to set support conditions, point loads, and distributed stresses to generate instant shear-force and bending-moment diagrams.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    tags: ['WebAssembly', 'TypeScript', 'Three.js / Canvas', 'Matrix Solvers', 'Structural Mechanics'],
    metrics: ['Under 50ms compute', 'Interactive load manipulation', 'Exportable calculation reports'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    date: '2024'
  },
  {
    id: 'drone-telemetry-dashboard',
    title: 'Civil Construction Site Aerial Telemetry',
    category: 'web',
    categoryLabel: 'Web & Informatics',
    summary: 'High-resolution geospatial tile viewer for orthomosaic drone surveys and volume cut-and-fill estimations.',
    description: 'Fullstack application handling massive drone photogrammetry point clouds and contour maps to help site superintendents calculate earthwork volumes and monitor construction progress over weekly flight passes.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop',
    tags: ['Geospatial / GIS', 'React', 'Three.js', 'Earthwork Calculations', 'Tailwind CSS'],
    metrics: ['Handles 1GB+ point clouds', 'Volumetric accuracy within 3%', 'Interactive 3D elevation'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    date: '2023'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2023 - Present',
    title: 'Lead Fullstack & Systems Engineer',
    company: 'Apex Smart Engineering & Informatics',
    location: 'Remote / Hybrid',
    description: 'Spearheading development of web-based engineering dashboards, IoT telemetry integrations, and algorithmic design pipelines for technical clients.',
    achievements: [
      'Built automated calculation engines cutting design review times by 40%',
      'Architected distributed cloud interfaces connecting sensor hardware with enterprise web apps',
      'Mentored junior developers in TypeScript, React, and modular architecture'
    ]
  },
  {
    period: '2021 - 2023',
    title: 'Structural Drafting & BIM Consultant',
    company: 'Civil & Architectural Engineering Works',
    location: 'Abuja / Lagos',
    description: 'Collaborated with principal structural engineers to draft reinforced concrete construction drawings, coordinate MEP clashes, and model 3D structural frameworks.',
    achievements: [
      'Delivered 20+ comprehensive BIM packages for commercial and residential developments',
      'Automated recurring rebar detailing routines utilizing Dynamo and Python',
      'Ensured strict compliance with national building codes and Eurocode specifications'
    ]
  },
  {
    period: '2019 - 2021',
    title: 'Electrical & Embedded Systems Developer',
    company: 'TechFlow Automation Systems',
    location: 'On-site',
    description: 'Designed custom PCB circuitry, firmware for microcontroller-driven automation, and sensor interfaces for industrial monitoring.',
    achievements: [
      'Engineered low-power wireless sensor nodes with 2-year battery operational life',
      'Implemented industrial Modbus / RS485 communication protocols with PLC controllers',
      'Produced detailed schematics, wiring diagrams, and technical test documentation'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    period: '2022 - Present',
    degree: 'Advanced Studies in Civil Engineering (Génie Civil)',
    institution: 'Faculty of Engineering & Built Environment',
    location: 'Academic Program',
    description: 'Focusing on structural dynamics, reinforced concrete design, geotechnics, and modern algorithmic BIM methodologies.',
    highlights: [
      'Specialized coursework in Finite Element Analysis & Structural Modeling',
      'Active research in integrating IoT sensors with smart bridge health diagnostics',
      'Recipient of academic excellence recognition'
    ]
  },
  {
    period: '2017 - 2021',
    degree: 'B.Sc. in Electrical Engineering & Informatics',
    institution: 'Institute of Science and Technology',
    location: 'Graduated with Honors',
    description: 'Comprehensive grounding in digital signal processing, electronic circuit design, computer programming, and microcontrollers.',
    highlights: [
      'Graduated in top 5% of engineering cohort',
      'Senior capstone: Autonomous solar microgrid controller with web monitoring',
      'President of Engineering Student Society'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    icon: 'Code2',
    title: 'Fullstack Web Development',
    description: 'Architecting fast, responsive web applications with modern React, TypeScript, Node.js, and cloud databases. From single-page interfaces to enterprise dashboards.',
    deliverables: ['Custom Web Applications', 'API Development & Integrations', 'Interactive Data Visualizations', 'Performance & SEO Optimization'],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'cad-bim',
    icon: 'Building2',
    title: 'CAD, BIM & Génie Civil Design',
    description: 'Precision structural drafting, 3D BIM modeling, and computational rebar detailing for reinforced concrete and steel construction projects.',
    deliverables: ['Architectural & Structural Drafting', '3D Revit BIM Models', 'Parametric Scripting & Automation', 'Quantity Take-offs & Scheduling'],
    technologies: ['AutoCAD', 'Revit', 'Civil 3D', 'Dynamo', 'Eurocode / ACI']
  },
  {
    id: 'iot-automation',
    icon: 'Cpu',
    title: 'Embedded Systems & IoT Automation',
    description: 'Connecting physical sensors and microcontrollers with cloud platforms for real-time telemetry, monitoring, and industrial control.',
    deliverables: ['Firmware Development (C/C++)', 'Sensor Telemetry Integration', 'Circuit Design & Prototyping', 'Remote Web Dashboards'],
    technologies: ['ESP32', 'Arduino', 'MQTT', 'Modbus', 'Custom PCBs']
  },
  {
    id: 'tech-computing',
    icon: 'BarChart3',
    title: 'Technical Computing & Analysis',
    description: 'Mathematical modeling, structural stress simulations, and algorithmic data processing to solve demanding engineering problems.',
    deliverables: ['Finite Element Simulations', 'Data Pipeline Engineering', 'Algorithm Optimization', 'Technical Reporting & Validation'],
    technologies: ['Python / NumPy', 'MATLAB', 'Simulink', 'Finite Element Solvers']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'merging-civil-and-web',
    title: 'Bridging Génie Civil and Modern Fullstack Software: The Next Era of Infrastructure',
    date: 'October 18, 2024',
    readTime: '6 min read',
    category: 'Engineering & Tech',
    excerpt: 'How modern web frameworks, WebAssembly, and real-time WebSockets are transforming structural analysis and site monitoring from static blueprints into live digital twins.',
    tags: ['Civil Engineering', 'Fullstack', 'IoT', 'Digital Twins'],
    content: [
      'Traditionally, civil engineering has relied on desktop-bound software suites that produce static PDF sheets. Once blueprints are stamped and deployed to the field, synchronization between the physical site and digital models is largely manual.',
      'By pairing modern fullstack technology (React, Node.js, WebSockets, and WebGL) with low-cost edge microcontrollers, we can now build living digital twins of infrastructure. Sensors placed on critical load-bearing joints can stream strain and acceleration data straight to a web dashboard.',
      'The result is predictive structural health monitoring: we detect micro-fissures and material fatigue months before any visible damage appears. The future of civil engineering is intrinsically tied to informatics.'
    ]
  },
  {
    id: 'revit-python-automation',
    title: 'Automating Structural Drafting: How Python & Dynamo Cut 60 Hours of Rebar Modeling',
    date: 'September 24, 2024',
    readTime: '5 min read',
    category: 'CAD & BIM',
    excerpt: 'A practical walkthrough of parametric scripts that automatically generate reinforcement cage geometry across multi-span concrete beams.',
    tags: ['Revit', 'Python', 'BIM Automation', 'Structural Drafting'],
    content: [
      'Detailing rebar across hundreds of structural beams is one of the most repetitive tasks in civil engineering drafting. Each beam requires precise cover calculations, hook extensions, and bar scheduling.',
      'Using the Revit API through Python and Dynamo, we mapped standard structural member dimensions directly to parametric rebar distribution rules.',
      'This automation turned a multi-day drafting grind into a 3-minute execution script, drastically reducing human detailing mistakes.'
    ]
  },
  {
    id: 'iot-telemetry-microgrids',
    title: 'Building Resilient Microgrids: Telemetry, Relay Logic, and Web-Based Supervisory Control',
    date: 'August 12, 2024',
    readTime: '7 min read',
    category: 'Electrical Systems',
    excerpt: 'Designing low-latency power monitoring circuits using ESP32 nodes and reactive frontends for solar-battery hybrid installations.',
    tags: ['Electrical', 'Embedded IoT', 'Renewable Energy', 'Telemetry'],
    content: [
      'Unstable power grids require rapid, automated load shedding and intelligent battery preservation. In this project, we designed a multi-node sensor cluster that polls current, voltage, and phase angle at 100Hz.',
      'When the grid trips, the controller prioritizes essential circuits (lighting, communications, medical cold storage) while gracefully isolating high-draw heating and motor equipment.',
      'Operators can supervise every node via a lightweight mobile-optimized web dashboard built with Tailwind and React.'
    ]
  }
];
