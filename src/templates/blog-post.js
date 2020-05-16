import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext
    console.log(this.props.pageContext)

    return (
      <Layout location={this.props.location} title="&#8592; home">
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          canonical={post.frontmatter.canonical}
        />
        <h1>{post.frontmatter.title}</h1>
        <small
          className="subtitle-blog"
          style={{
            ...scale(-1 / 5),
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          <span>{post.frontmatter.date}</span> <span className="dash">-</span>
          <span className="time">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-clock"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>{' '}
            {post.fields.readingTime.text}
          </span>
        </small>
        <MDXRenderer wrapper="div">{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `center`,
            listStyle: `none`,
            padding: 0,
            marginLeft: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        canonical
      }
      body
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
