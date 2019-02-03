import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employment: [
      [
        {
          image: require('@/assets/ithaka.jpg'),
          year: 2018,
          title: 'ITHAKA',
          subtitle: 'Lead Web Application Developer',
          description: `Leverage PaaS and web framework technologies to develop and maintain resilient, large-scale web applications.
            Test, measure, and optimize performance of front-end and back-end components to improve user experience.`,
        },
        {
          year: 2014,
          title: 'ITHAKA',
          subtitle: 'Web Application Developer',
        },
      ],
      [
        {
          image: require('@/assets/thermo-fisher-scientific.png'),
          year: 2014,
          title: 'Thermo Fisher Scientific (Previously Life Technologies)',
          subtitle: 'Software Development Engineer II',
          description: `Transition bioinformatics methods/implementations into operational offerings;
            integrate third-party data products;
            design, build, and maintain internal tools to support data curation and research.`,
        },
        {
          year: 2013,
          title: 'Life Technologies (Previously Compendia Bioscience)',
          subtitle: 'Software Development Engineer II',
        },
        {
          year: 2012,
          title: 'Compendia Bioscience',
          subtitle: 'Software Development Engineer',
        },
      ],
      [
        {
          image: require('@/assets/saic.jpg'),
          year: 2011,
          title: 'SAIC',
          subtitle: 'Software Development Engineer',
          description: `Algorithm design, development, and implementation for C/C++ applications in computer vision and automatic target recognition.`,
        },
        {
          year: 2010,
          title: 'SAIC',
          subtitle: 'Software Engineering Intern',
          description: 'Update and maintain source code for various C/C++ applications.',
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
