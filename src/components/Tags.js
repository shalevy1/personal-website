import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'


class Tags extends React.Component {
  render() {
    const { tags } = this.props
    return (
      <div  style={{ marginBottom: rhythm(1) }}>
        {tags.map( tag => (
        <span>
          <Link
            style={{
              display: `inline-block`,
              boxShadow: `none`,
              paddingRight: `10px`,
              letterSpacing: `1.5px`
            }}
            to={'/tags/' + tag}
            key={tag}
          >#{tag}</Link>
         </span>))}
      </div>
    )
  }
}

export default Tags