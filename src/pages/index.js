import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} className="home">
        <SEO
          title="Home"
          keywords={[`blog`, siteTitle, `developer`, `paris`]}
        />
        <h1 style={{ fontSize: `54px`, marginTop: 0 }}>
          Hello, I am Sarah Abderemane, fullstack developer based in Paris.
        </h1>
        <p>
          <q>Be yourself; everyone else is already taken.</q>― Oscar Wilde{' '}
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
