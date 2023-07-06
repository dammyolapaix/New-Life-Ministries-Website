import { createClient } from 'contentful'

const contentfulClient = createClient({
  accessToken: 'accessToken',
  space: 'space',
})

export default contentfulClient
