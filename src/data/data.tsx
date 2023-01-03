/**
 * BibliographyItem
 */
import {
  AcademicCapIcon,
  // CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import profilepic from '../images/profilepic.jpg';
import data from './data.preval';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
  TimelineSubItem
} from './dataDef';

export const publications = data;

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Nick's CV",
  description: "Nick Fournier's Curriculum Vitae, and more!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Nick Fournier, PhD`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Engineer, planner, and transportist.</strong>
      </p>
      <div className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <p>
        Welcome to my digital Curriculum Vitae and landing page for my miscellaneous projects.
      </p>
      </div>,
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` 
  I currently work as a travel modeling consultant, which is a fancy way of saying python developer and transportation data scientist. I develop and implement large-scale simulation models of regional transportation systems. I also moonlight as an academic, publishing papers when I can find the time.
  `,
  aboutItems: [
    {label: 'Location', text: 'San Francisco Bay Area, California', Icon: MapIcon},
    {
      label: 'Research Interests',
      text: 'Travel modeling, continuum approximation, transportation economics, bicycle mobility, data science, optimization',
      Icon: SparklesIcon,
    },
    {label: 'Study', text: 'University of Massachusetts Amherst', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Resource System Group, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'R',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 4,
      },
      {
        name: 'SQL/Postgres',
        level: 5,
      },
    ],
  },
  {
    name: 'Tools / Framework',
    skills: [
      {
        name: 'Django',
        level: 8,
      },
      {
        name: 'scikit-learn',
        level: 7,
      },
      {
        name: 'pandas',
        level: 9,
      },
      {
        name: 'seaborn',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Portfolio Optimizer',
    description: 'My personal attempt as creating a stock filter and expected return optimizer. ',
    // 'An enhancement of Piotroski\'s famous F-score system, but instead of discrete points it uses the relevant criteria to make autorefressive timeseries predictions of expected returns. The portfolio is then optimized using mean variance optimization with an objective of minimizing volatility.',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'Course Maps for South Beach Yacht Club\'s Friday Night Series',
    description: 'I was tired of struggling to read the written directions while on the water',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Parsimobius',
    description: 'A zoneless travel demand model. Uses principles of image compression and multivariate interpolation to utilize pure continuous XY coordinates rather than clunky zones',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const default_subcontent: TimelineSubItem[] = [
  {
    title: '',
    content: <p></p>,
  },
];

export const education: TimelineItem[] = [
  {
    date: '2019',
    location: 'Univiersity of Massachusetts Amherst',
    title: 'PhD Transportation Engineering',
    // content: <p>Dissertation: Equity and efficiency in multimodal transportation systems</p>,
  },
  {
    date: '2018',
    location: 'University of Massachusetts Amherst',
    title: 'MS Transportation Engineering',
  },
  {
    date: '2017',
    location: 'University of Massachusetts Amherst',
    title: 'Masters of Regional Planning',
  },
  {
    date: '2011',
    location: 'University of Massachusetts Amherst',
    title: 'BS Civil Engineering',
  },
];

export const awards: TimelineItem[] = [
  {
    date: '2019',
    location: '',
    title: 'Eno Fellow – Eno Future Leadership Conference',
  },
  {
    date: '2015-2018',
    location: '',
    title: 'Dwight D. Eisenhower Fellowship',
  },
  {
    date: '2016-2017',
    location: '',
    title: 'UTC Outstanding Student of the Year',
  },
  {
    date: '2015',
    location: '',
    title: 'Daniel B. Fambro Student Paper Award – ITE',
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2022 - Present',
    location: 'Resource Systems Group, inc.',
    title: 'Consultant',
    content: [
      {
        title: 'ActivitySim',
        content: <p> Development and implementation of an open source activity-based travel model <a href='https://activitysim.github.io/'><strong>ActivitySim</strong></a>. Notable implementations for San Diego and Dubai. Created a cross-border model (Mexico to San Diego) and developed a disaggregated accessibility measure estimator, linking higher level models to lower level choice models.</p>,
      },
      {
        title: 'Household Travel Survey data processing and reweighting',
        content: <p>Reweighted survey data to expected Census targets using R for imputation and extrapolation, and PopulationSim for weight estimation.</p>,
      },
    ],
  },
  {
    date: '2020 - 2022',
    location: 'University of California, Berkeley',
    title: 'Post-Doctoral Scholar',
    content: [
      {
        title: 'Exploring the operational and equity benefits of a pre-pay dynamic tolling system [lead researcher]',
        content: (
          <p>
            Analytical simulation exploring revenue and traffic flow with “futures” market toll pricing. Utilized Kernel
            Density Estimation to smooth traffic flow data for forecasting and pricing models. Funded by California
            State SB1.
          </p>
        ),
      },
      {
        title: 'Bicycle network connectivity evaluation methodology [lead researcher]',
        content: (
          <p>
            Ongoing research to develop generalized bicycle network connectivity performance measure using graph theory, open-data, and user preference criteria (e.g., route choice models). Funded by Caltrans.
          </p>
        ),
      },
      {
        title: 'Erroneous High Occupancy Vehicle (HOV) Degradation',
        content: (
          <p>
            Python program to detect operational but mislabeled traffic sensors using variety of machine learning techniques (e.g., k-Nearest
            Neighbor, Logistic Regression, Random Forest, Support Vector Machines, Local Outlier Factor, Isolation
            Forest, and Robust Covariance Anomaly Detection). Funded by Caltrans.
          </p>
        ),
      },
      {
        title: 'Bicycle level of service measures for the CA State Highway System',
        content: (
          <p>
            UX research/human factors study to determine bicycle infrastructure preferences using virtual reality
            bicycle simulator. Estimated using a Latent Class Choice Model capable of accounting for user heterogeneity.
            Results to align with “Complete Cities” project. Funded by Caltrans.
          </p>
        ),
      },
    ],
  },
  {
    date: '2019 - 2020',
    location: 'Monash University',
    title: 'Research Fellow',
    content: [
      {
        title: 'Public Transport Research Group',
        content: (
          <p>
            Advised team of 19 doctoral students conducting industry partnered research in public transportation
            engineering, planning, policy analysis, and economics.
          </p>
        ),
      },
    ],
  },
  {
    date: '2014 - 2019',
    location: 'University of Massachusetts Amherst',
    title: 'Graduate Research Assistant',
    content: [
      {
        title: 'Sustainable Travel Incentives with Prediction, Optimization and Personalization',
        content: (
          <p>
            Data fusion population synthesizer using novel combinatorial optimization algorithm in R and C++
            (demographics, OD-matrices, household/vehicle association, etc.). Mixed-methods include Bayesian Networks,
            Markov chain Monte Carlo simulation, iterative fitting (matrix raking), robust regression, LASSO/Ridge
            regularization, and gradient descent. Used as input in larger agent-based discrete choice and simulation to
            lower energy consumption with user incentives. Joint MIT project sponsored by ARPA-energy.
          </p>
        ),
      },
    ],
  },
  {
    date: '2014 - 2015',
    location: 'Volpe National Transportation Center',
    title: 'Community Planning Intern',
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'nichfournier at gmail.com',
      href: 'mailto:nichfournier@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'San Francisco Bay Area, California',
      href: 'https://www.google.com/maps/place/San+Francisco,+CA/@37.804289,-122.4904803,11z',
    },
    {
      type: ContactType.Github,
      text: 'nick-fournier',
      href: 'https://github.com/nick-fournier',
    },
  ],
};


/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
];
