import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skills', {
  state: () => ({
    languages: [
      {
        name: 'Java',
        score: 1
      },
      {
        name: 'Ruby',
        score: 3
      },
      {
        name: 'Python',
        score: 5
      },
      {
        name: 'CSS',
        score: 3.75
      },
      {
        name: 'JavaScript',
        score: 3.5
      }
    ],
    frameworksAndTools: [
      {
        name: 'Django',
        score: 5
      },
      {
        name: 'Vue',
        score: 4
      },
      {
        name: 'React',
        score: 3
      },
      {
        name: 'SCSS',
        score: 5
      },
      {
        name: 'Webpack',
        score: 4
      },
      {
        name: 'lit',
        score: 4
      },
      {
        name: 'Fastify',
        score: 3.5
      }
    ]
  })
})
