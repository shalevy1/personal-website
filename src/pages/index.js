import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import TypeWriter from '../utils/typewriter'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const words = [
      'fullstack developer',
      'devops enthusiast',
      'mentor',
      'tech writer',
      'pythonista',
      'javascript woman',
      'problem solver',
    ]

    return (
      <Layout location={this.props.location} className="home">
        <SEO
          title="Home"
          keywords={[`blog`, siteTitle, `developer`, `paris`]}
        />
        <h1 className="title">
          <TypeWriter
            heading={'Hello, I am Sarah Abderemane,'}
            messages={words}
          />{' '}
          based in Paris<span className="purple">.</span>
        </h1>
        <p>
          <q>Be yourself; everyone else is already taken.</q>
          <span className="author">― Oscar Wilde</span>{' '}
        </p>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
