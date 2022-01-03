import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const present = new Date().getFullYear()

export default new Vuex.Store({
  state: {
    employment: [
      [
        {
          image: require('@/assets/ithaka.png'),
          years: [2022, present],
          title: 'Principal Engineer',
          subtitle: 'ITHAKA',
          responsibilities: [
            'Developing capabilities and competencies in modular software for developer productivity and platform stability.',
          ],
        },
        {
          years: [2018, 2022],
          title: 'Lead Web Application Developer',
          subtitle: 'ITHAKA',
          responsibilities: [
            'Provided technical product ownership in micro frontend architecture and developer ergonomics.',
            'Co-lead a team of 15+ front end developers writing web applications serving ~20M monthly active users.',
            'Coordinated the upgrade of 30+ user-facing JSTOR applications to new Django and Python versions with no down time.',
            'Identified infrastructure cost reductions and non-profit vendor discounts, saving over $50K annually.',
            `Created, released, and oversaw maintenance of <a class="link" href="https://github.com/ithaka/apiron">apiron</a>, ITHAKA's first actively-maintained open source software.`,
            'Worked with design, brand, and product development to define the direction and lead the implementation of the <a class="link" href="https://pharos.jstor.org">Pharos</a> design system.',
            'Built an internal code and architecture documentation system using Sphinx, and built a mind map to identify opportunities for knowledge sharing.',
            'Worked with engineering leadership to create diversified avenues for team learning and discussion, resulting in mentorship groups, open office hours, and recurring tech talk spaces.',
          ],
        },
        {
          years: [2014, 2018],
          title: 'Web Application Developer',
          subtitle: 'ITHAKA',
          responsibilities: [
            'Championed and coordinated the transition to HTTPS for all user-facing pages on the JSTOR platform.',
            'Helped transition core JSTOR functionality from a proprietary CMS to AWS-hosted Django applications.',
            'Represented ITHAKA and JSTOR as a speaker at 4 technical conferences nationally and internationally.',
            'Designed and implemented continuous integration and publishing pipelines for internally-shared Python software.',
            'Took <a class="link" href="https://medium.com/build-smarter">Build Smarter</a>, a public-facing outlet for our technical learnings, from concept to reality in collaboration with design and marketing.',
          ],
        },
      ],
      [
        {
          image: require('@/assets/thermo-fisher-scientific.png'),
          years: [2014],
          title: 'Software Development Engineer II',
          subtitle: 'Thermo Fisher Scientific (Previously Life Technologies)',
          responsibilities: [
            'Built a feature extraction and translation tool for Variant Call Format (VCF) files.',
            'Optimized and scaled a bioinformatics processing pipeline to hundreds of oncogemonics datasets.',
          ],
        },
        {
          years: [2013, 2014],
          title: 'Software Development Engineer II',
          subtitle: 'Life Technologies (Previously Compendia Bioscience)',
          responsibilities: [
            'Introduced tight feedback loops in our data processing pipeline to save developers potentially hours of wasted time.',
            'Designed and built internal tools to support our data curation and research teams.',
          ],
        },
        {
          years: [2012, 2013],
          title: 'Software Development Engineer',
          subtitle: 'Compendia Bioscience',
          responsibilities: [
            'Integrated and operated a bioinformatics processing pipeline for oncogenomics datasets.',
          ],
        },
      ],
      [
        {
          image: require('@/assets/saic.jpg'),
          years: [2011, 2012],
          title: 'Software Development Engineer',
          subtitle: 'SAIC',
          responsibilities: [
            'Developed novel inference algorithms for telemetry data.',
            'Implemented an image processing algorithm to translate data between coordinate systems.',
            'Retrofitted an existing prediction pipeline to enable dynamic input data.',
          ],
        },
        {
          years: [2010, 2011],
          title: 'Software Engineering Intern',
          subtitle: 'SAIC',
          responsibilities: [
            'Built an interactive graphical interface in MATLAB on top of existing software for easier analysis.',
          ],
        },
      ]
    ],
    skills: {
      languages: [
        {
          name: 'Java',
          score: 1,
        },
        {
          name: 'Ruby',
          score: 3,
        },
        {
          name: 'Python',
          score: 5,
        },
        {
          name: 'CSS',
          score: 3.75,
        },
        {
          name: 'JavaScript',
          score: 3.5,
        },
      ],
      frameworksAndTools: [
        {
          name: 'Django',
          score: 5,
        },
        {
          name: 'Vue',
          score: 3.25,
        },
        {
          name: 'React',
          score: 2,
        },
        {
          name: 'SASS',
          score: 5,
        },
        {
          name: 'Webpack',
          score: 4,
        },
        {
          name: 'LitElement',
          score: 3.5,
        },
      ],
    },
  },
  mutations: {
  },
  actions: {
  }
})
