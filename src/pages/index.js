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
      'queen debugger',
    ]

    return (
      <Layout location={this.props.location} className="home">
        <SEO
          title="Home"
          keywords={[`blog`, siteTitle, `developer`, `paris`]}
        />
        <h1 style={{ fontSize: `54px`, marginTop: 0 }}>
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
