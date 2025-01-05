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
import heroImage from '../images/aerial-crop.webp';
import portfolioBVIImage from '../images/portfolio/bvi_screenshot.png';
import portfolioCoursesImage from '../images/portfolio/courses_screenshot.png';
import portfolioOptimizerImage from '../images/portfolio/portfolio_screenshot.png';
import portfolioTurkeyImage from '../images/portfolio/turkey_screenshot.png';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
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
  description: "Nicholas Fournier's Curriculum Vitae, and more!",
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
  Publications: 'publications',
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
  name: `Nicholas Fournier, PhD`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Thinker and Tinkerer.</strong>
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
  I am a data scientist and engineer working in the transportation space. I have an insatiable curiosity and have no fear taking on projects well outside my domain.
  `,
  aboutItems: [
    {label: 'Location', text: 'San Francisco Bay Area, California', Icon: MapIcon},
    {
      label: 'Research Interests',
      text: 'Data science, machine learning, optimization, transportation economics, simulation modeling, urban planning, computer science',
      Icon: SparklesIcon,
    },
    {label: 'Education', text: 'University of Massachusetts Amherst, UC Berkeley, Monash University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Resource System Group, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Data Science',
    skills: [
      {
        name: 'Python, R, Pandas, Polars, DuckDB, data.table',
        level: 9,
      },
      {
        name: 'optimization, econometrics, statistics',
        level: 1,
      },
    ],
  },
  {
    name: 'Geospatial',
    skills: [
      {
        name: 'PostGIS, GeoPandas, Shapely, QGIS/ArcGIS',
        level: 8,
      },
    ],
  },
  {
    name: 'Visualization',
    skills: [
      {
        name: 'Jupyter, RMarkdown, Quarto, Shiny',
        level: 9,
      },
      {
        name: 'Seaborn, Matplotlib, ggplot2',
        level: 9,
      },
    ],
  },
  {
    name: 'Cloud / DevOps',
    skills: [
      {
        name: 'AWS, Azure, GitHub Actions, DockerHub',
        level: 7,
      },
    ],
  },
  {
    name: 'Data engineering',
    skills: [
      {
        name: 'Docker, Kubernetes, Dagster, Django',
        level: 8,
      },
      {
        name: 'PostgreSQL, SQLite, MySQL, parquet, hdf5',
        level: 8,
      }
    ],
  },
  {
    name: 'Code Hygiene',
    skills: [
      {
        name: 'Git, GitHub, CI/CD, Ruff linting, typehinting',
        level: 9,
      },
      {
        name: 'Python Enums, Sphinx, Pandera, Pydantic, PyTest',
        level: 8,
      }
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Portfolio Optimizer',
    description: 'My personal attempt as creating a stock filter and porfoltio optimizer. ',
    url: 'https://apps.nicholasfournier.com/portfolio-optimizer',
    image: portfolioOptimizerImage,
  },
  {
    title: 'Course Maps for South Beach Yacht Club\'s Friday Night Series',
    description: 'I was tired of struggling to read the thrice photocopied directions while on the water',
    url: 'https://apps.nicholasfournier.com/fns/',
    image: portfolioCoursesImage,
  },
  {
    title: 'BVI Sailing Itinerary',
    description: 'An interactive sailing itinerary for the British Virgin Islands',
    url: 'https://apps.nicholasfournier.com/bvi-itinerary/',
    image: portfolioBVIImage,
  },
  {
    title: 'Pico Turkey',
    description: 'A zoneless travel demand model. Uses principles of image compression and multivariate interpolation to utilize pure continuous XY coordinates rather than clunky zones',
    url: 'https://github.com/nick-fournier/pico-turkey',
    image: portfolioTurkeyImage,
  },
  // {
  //   title: 'Speed Cam',
  //   description: 'Me being an annoying neighbor and monitoring local traffic speeds.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
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
    title: 'Data Scientist',
    content: [
      {
        title: 'Statistical weighting & imputation',
        content: <p> Refactor of core travel data pipeline (statistical weighting). Reduced project-level of effort from weeks to hours. Eliminated bottleneck with configurable pipeline allowing analyst level staff to operate. Reduced risk by implementing automation, CI/CD testing, linting, and QAQC reporting and validation. </p>,
      },
      {
        title: 'Routing & map-matching python API',
        content: <p>Wrote high-performance python API for concurrent requests for self-hosted routing machine (OSRM) for bulk routing and map-matching of GPS traces.</p>,
      },
      {
        title: 'ActivitySim',
        content: <p> Contributed core model to open source activity-based travel model <a href='https://activitysim.github.io/'><em>ActivitySim</em></a> for a disaggregated accessibility measure estimator, linking higher level models to lower level choice models.</p>,
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
            Developed toll pricing “futures” market model using bi-parabolic macroscopic traffic flow model and price elasticities to optimize traffic flow. Funded by California State SB1.
          </p>
        ),
      },
      {
        title: 'Bicycle network connectivity evaluation methodology [lead researcher]',
        content: (
          <p>
            Developed graph theory-based bicycle network connectivity performance measure. Funded by Caltrans.
          </p>
        ),
      },
      {
        title: 'Erroneous High Occupancy Vehicle (HOV) Degradation',
        content: (
          <p>
            Python program to detect operational but mislabeled traffic sensors using variety of machine learning techniques (e.g., k-Nearest Neighbor, Logistic Regression, Random Forest, Support Vector Machines, Local Outlier Factor, Isolation Forest, and Robust Covariance Anomaly Detection). Funded by Caltrans.
          </p>
        ),
      },
      {
        title: 'Bicycle level of service measures for the CA State Highway System',
        content: (
          <p>
            UX research/human factors study to determine bicycle infrastructure preferences using virtual reality bicycle simulator. Estimated using a Latent Class Choice Model capable of accounting for user heterogeneity. Funded by Caltrans.
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
            Advised team of 19 doctoral students conducting industry partnered research in public transportation engineering, planning, policy analysis, and economics.
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
            Generated synthetic population of Boston for activity-based travel simulation model as part of joint MIT/UMass ARPA-e competitive research project. Developed a novel data fusion method to synthesize fixed work location data in population synthesis.
          </p>
        ),
      },
      {
        title: 'Infrastructure Strategies for Safer Cycling: An evaluation of driver behavior in a driving simulator',
        content: (
          <p>
            Conducted human factors research using full-scale immersive driving simulator with eye-tracking and control monitoring (steering, gas, and brake) to study responses to novel roadway infrastructure. Sponsored by the U.S. DOT SaferSim UTC.
          </p>
        ),
      },
      {
        title: 'Bicycle Infrastructure and Safety Research',
        content: (
          <p>
            Developed a sinusoidal model for seasonal bicycle demand estimation for calculating bicycle-vehicle crash risk where bicycle traffic data are limited. 
          </p>
        ),
      },
    ],
  },
  {
    date: '2014 - 2015',
    location: 'Volpe National Transportation Center',
    title: 'Community Planning Intern',
    content: [
      {
        title: 'Roadside Safety Hardware Approval Process',
        content: (
          <p>
            Evaluated and prepared a report on the approval process of roadside safety hardware for the Federal Highway Administration.
          </p>
        ),
      },
      {
        title: 'Data collection & analysis of instrumented vehicle',
        content: (
          <p>
            Collected and analyzed LIDAR and video data from instrumented vehicle to estimate microscopic car-following model parameters.
          </p>
        ),
      },
    ]
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
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/nick-fournier'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/nick-fournier/'},
];
