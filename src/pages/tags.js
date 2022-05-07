import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const TagsPage = ({
    data: {
        allMdx: { group },
        site: {
            siteMetadata: { title },
        },
    },
}) => (
    <Layout>
    <SEO
      title="All posts"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
        <div>
            <Helmet title={title} />
            <div>
                <h1>Tags</h1>
                <div className="tag-group">
                    {group.map(tag => (
                        <span className="tag" key={tag.fieldValue}>
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} <sup>{tag.totalCount}</sup>
                            </Link>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </Layout>
)

TagsPage.propTypes = {
    data: PropTypes.shape({
        allMdx: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`