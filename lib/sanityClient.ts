import { createClient } from 'next-sanity'

export default createClient({
  projectId: process.env.SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2023-05-03',
  useCdn: true, // `false` if you want to ensure fresh data
})
