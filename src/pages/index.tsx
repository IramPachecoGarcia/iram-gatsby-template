import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Check out this doggo!</p>
      <StaticImage alt="Clifford, a reddish-brown putbull, posing on a couch" src="../images/clifford.webp" />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
export default IndexPage