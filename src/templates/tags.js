import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'


const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`
  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
                  This links to a page that does not yet exist.
                  You'll come back to it!
                */}
      <Link to="/tags">> All tags</Link>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
      ) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
    }
  }
`
