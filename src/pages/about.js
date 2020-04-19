import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
        <SEO
          title="About"
          keywords={[`about`, siteTitle, `developer`, `woman`]}
        />
        <h1>About</h1>
        <p>
          Hi there, I’m Sarah Abderemane! I enjoy writing code and teach people
          stuff to make them evolve - I’m lucky that I get to do it as my job. I
          currently work in Paris as a Fullstack Developer at TKT Thinking
          Technology helping create products according the demands using
          (mostly) Python and Javascript. I enjoy breaking complex technical
          concepts and explaining them through illustrations.
        </p>
        <p>
          Apart from IT, I really enjoy dancing, traveling, reading, hip hop
          music and dancehall. If you have any questions or just want to chat,
          you can reach out to me on{' '}
          <a href="https://twitter.com/s_abderemane/">Twitter</a> or shoot me an{' '}
          <a href="mailto:sarahabderemane@gmail.com">email</a>.
        </p>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
