import sanityClient from '@sanity/client'

const settings = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  token: import.meta.env.VITE_SANITY_TOKEN, // or leave blank to be anonymous user
  apiVersion: '2021-03-25',
  useCdn: false // `false` if you want to ensure fresh data
}

const client = sanityClient(settings)

export default client