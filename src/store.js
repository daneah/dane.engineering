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
          years: [2018, present],
          title: 'Lead Web Application Developer',
          subtitle: 'ITHAKA',
          responsibilities: [
            'Collaborate with the design, brand, and product development teams to build a design system for the JSTOR platform',
            'Support and provide direction for developers on various cross-team initiatives',
            `Manage development, releases, and communications for apiron, an open source package.'
             Collaborate with legal team to determine licensing and privacy obligations.`,
            'Promote strong development practices around testing, automation, and continuous delivery.',
            'Encourage development teams to submit blog posts, talk proposals, and cross-team presentations for knowledge sharing.',
            'Collaborate with quality assurance team to improve automated testing infrastructure.',
          ],
        },
        {
          years: [2014, 2018],
          title: 'Web Application Developer',
          subtitle: 'ITHAKA',
          responsibilities: [
            'Rotate in regularly to manage incident response for system outages.',
            'Collaborate with design and marketing to create Build Smarter, an online presence for technical writing.',
            'Participate in the interview and feedback process for internships and development team hires.',
            'Help lead a multiple-team effort to overhaul our front-end UI toolset.',
            'Transition and port existing feature sets from legacy architecture to new architecture.',
            'Champion transition to HTTPS for all user-facing pages sitewide.',
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
            'Collaborate with scientists to develop a working understanding of genomics and molecular biology concepts.',
            'Transition bioinformatics methods into operational software product offerings.',
            'Analyze and improve performance of big data storage and querying during data processing.',
          ],
        },
        {
          years: [2013, 2014],
          title: 'Software Development Engineer II',
          subtitle: 'Life Technologies (Previously Compendia Bioscience)',
          responsibilities: [
            'Integrate third-party data analysis and visualization products with proprietary big data sets.',
            'Design, build, and maintain internal tools to support data curation and research.',
          ],
        },
        {
          years: [2012, 2013],
          title: 'Software Development Engineer',
          subtitle: 'Compendia Bioscience',
          responsibilities: [
            'Maintain and execute data processing pipeline software.',
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
            'Apply signal processing algorithms to telemetry data for human interpretation.',
            'Augment telemetry prediction systems to account for additional considerations.',
            'Develop, iterate on, and integrate rules for telemetry inference engines.',
          ],
        },
        {
          years: [2010, 2011],
          title: 'Software Engineering Intern',
          subtitle: 'SAIC',
          responsibilities: [
            'Maintain legacy C/C++ applications.',
            'Build a graphical interface for an existing command-line application.',
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
          name: 'jQuery',
          score: 4.5,
        },
        {
          name: 'Vue.js',
          score: 3.25,
        },
        {
          name: 'React',
          score: 2,
        },
        {
          name: 'ZURB Foundation',
          score: 3.75,
        },
        {
          name: 'Bootstrap',
          score: 3.75,
        },
        {
          name: 'SASS',
          score: 5,
        },
        {
          name: 'Webpack',
          score: 4,
        },
      ],
    },
  },
  mutations: {
  },
  actions: {
  }
})
